import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css"
import Providers from "./Providers";
export const metadata = {
  title: "Fab Cheat",
  description: "You take refrence when you create your project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
