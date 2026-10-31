import "./globals.css";

export const metadata = {
  title: "Vejay Suriyaa Senguttuvan | USC MS ECE",
  description:
    "Vejay Suriyaa Senguttuvan | USC MS ECE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
