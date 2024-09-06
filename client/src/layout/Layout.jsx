import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Donate from "../components/donate/Donate";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../components/error/Error";
import { useContext, useState } from "react";
import Processing from "../components/processing/Processing";
import { GeneralContext } from "../App";

const donateExcludedPages = [
  "/who-we-are/team",
  "/donate/checkout",
  "/search",
  "/who-we-are/contact-us",
  "/scholarship/application",
];

export default function Layout() {
  const { processingDesc } = useContext(GeneralContext);
  const location = useLocation();
  const [isNoPage, setIsNoPage] = useState(false);

  const isStripeReroutePage =
    location.pathname === "/stripe/redirect/success" ||
    location.pathname === "/stripe/redirect/cancel";

  const isExcluded =
    donateExcludedPages.includes(location.pathname) ||
    isStripeReroutePage ||
    isNoPage;

  return (
    <>
      {!isStripeReroutePage && <Navbar />}
      <ErrorBoundary FallbackComponent={Error}>
        <Outlet context={{ setIsNoPage, isNoPage }} />
        {!isExcluded && <Donate />}
      </ErrorBoundary>
      {!isStripeReroutePage && <Footer />}
      {processingDesc && <Processing desc={processingDesc} />}
    </>
  );
}
