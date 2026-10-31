import "./globals.css";
import MotionProvider from "./components/MotionProvider";

export const metadata = {
  title: "Vejay Suriyaa Senguttuvan | USC MS ECE",
  description:
    "Vejay Suriyaa Senguttuvan | USC MS ECE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
