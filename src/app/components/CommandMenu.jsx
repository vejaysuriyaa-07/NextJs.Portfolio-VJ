"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Copy, ExternalLink, FileText, Search } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const OPEN_COMMAND_MENU = "open-command-menu";

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
const openTab = (href) => window.open(href, "_blank", "noopener,noreferrer");

const COMMANDS = [
  { group: "Go to", label: "Home", icon: ArrowRight, run: () => scrollTo("#hero") },
  { group: "Go to", label: "About", icon: ArrowRight, run: () => scrollTo("#about") },
  { group: "Go to", label: "Achievements", icon: ArrowRight, run: () => scrollTo("#achievements") },
  { group: "Go to", label: "Experience", icon: ArrowRight, run: () => scrollTo("#experience") },
  { group: "Go to", label: "Projects", icon: ArrowRight, run: () => scrollTo("#projects") },
  { group: "Go to", label: "Highlights", icon: ArrowRight, run: () => scrollTo("#gallery") },
  { group: "Actions", label: "Open resume (PDF)", icon: FileText, run: () => openTab(`${basePath}/resume.pdf`) },
  { group: "Actions", label: "Copy email", icon: Copy, copy: "senguttu@usc.edu" },
  { group: "Links", label: "GitHub", icon: ExternalLink, run: () => openTab("https://github.com/vejaysuriyaa-07") },
  { group: "Links", label: "LinkedIn", icon: ExternalLink, run: () => openTab("https://www.linkedin.com/in/vejay-suriyaa-a274b3201") },
  { group: "Links", label: "RTL Live on the Marketplace", icon: ExternalLink, run: () => openTab("https://marketplace.visualstudio.com/items?itemName=vejaysuriyaa.rtl-live") },
];

const CommandMenu = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const results = useMemo(
    () => COMMANDS.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase())),
    [query]
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
    setCopied(false);
  }, []);

  const run = useCallback(
    async (command) => {
      if (!command) return;
      if (command.copy) {
        try {
          await navigator.clipboard.writeText(command.copy);
          setCopied(true);
          setTimeout(close, 900);
        } catch {
          window.location.href = `mailto:${command.copy}`;
          close();
        }
        return;
      }
      close();
      command.run();
    },
    [close]
  );

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        close();
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_COMMAND_MENU, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_COMMAND_MENU, onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[active]);
    }
  };

  let lastGroup = null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-label="Command menu"
            className="w-full max-w-lg overflow-hidden rounded-xl border border-slate-700 bg-[#181818] shadow-2xl"
            initial={{ scale: 0.95, y: -10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-slate-700 px-4">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKey}
                placeholder="Jump to a section or open a link..."
                className="w-full bg-transparent py-4 text-white placeholder-gray-500 outline-none"
              />
              <kbd className="rounded border border-slate-600 px-1.5 py-0.5 text-xs text-gray-400">esc</kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-gray-500">No matches</li>
              )}
              {results.map((command, index) => {
                const header = command.group !== lastGroup ? command.group : null;
                lastGroup = command.group;
                const Icon = command.icon;
                return (
                  <li key={command.label}>
                    {header && (
                      <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {header}
                      </p>
                    )}
                    <button
                      onMouseEnter={() => setActive(index)}
                      onClick={() => run(command)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm sm:text-base transition-colors ${
                        index === active ? "bg-blue-500 text-white" : "text-gray-300"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {command.copy && copied ? "Copied!" : command.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandMenu;
