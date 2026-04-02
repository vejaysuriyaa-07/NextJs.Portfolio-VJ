import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 sm:p-12 flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <p className="font-semibold">Vejay Suriyaa Senguttuvan</p>
          <p className="text-slate-400 text-sm sm:text-base">
            DFT | VLSI | RTL | Physical Design
          </p>
        </div>
        <div className="text-slate-400 text-sm sm:text-base sm:text-right">
          <p>
            <a href="mailto:senguttu@usc.edu" className="hover:text-white transition-colors">
              senguttu@usc.edu
            </a>
          </p>
          <p>Los Angeles, CA</p>
          <p>
            <a
              href="https://www.linkedin.com/in/vejay-suriyaa-a274b3201"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              linkedin.com/in/vejay-suriyaa-a274b3201
            </a>
          </p>
          <p>
            <a
              href="https://github.com/vejaysuriyaa-07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              github.com/vejaysuriyaa-07
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
