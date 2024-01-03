import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Donate from "../components/donate/Donate";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../components/error/Error";

const donateExcludedPages = [
  "who-we-are/team",
  "/donate/checkout",
  "/search",
  "who-we-are/contact-us",
];

export default function Layout() {
  const location = useLocation();

  const isExcluded = donateExcludedPages.includes(location.pathname);

  return (
    <>
      <Navbar />
      <ErrorBoundary FallbackComponent={Error}>
        <Outlet />
        {!isExcluded && <Donate />}
      </ErrorBoundary>
      <Footer />
    </>
  );
}
