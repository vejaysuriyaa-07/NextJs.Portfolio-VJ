import "./globals.css";

export const metadata = {
  title: "Vejay Suriyaa | DFT and VLSI Portfolio",
  description:
    "Portfolio of Vejay Suriyaa Senguttuvan focused on DFT, ATPG, scan insertion, RTL design, and VLSI implementation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
