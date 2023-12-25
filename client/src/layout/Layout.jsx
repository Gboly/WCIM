import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Donate from "../components/donate/Donate";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Donate />
      <Footer />
    </>
  );
}
