import { useLayoutEffect } from "react";
import Spinner from "../../components/spinner/Spinner";
import "./stripe-reroute.css";

const StripeReRoute = ({ type }) => {
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      window.opener.setPaidStatus(type);
      window.opener.open();
      window.close();
    }, 100);

    return () => clearTimeout(timeout);
  }, [type]);

  return (
    <main className="stripe-reroute-page">
      <Spinner />
    </main>
  );
};

export default StripeReRoute;
