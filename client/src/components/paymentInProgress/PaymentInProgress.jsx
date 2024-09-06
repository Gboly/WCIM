import { useRef } from "react";
import AnimatedPage from "../animated/AnimatedPage";
import CustomSection from "../customSection/CustomSection";
import Spinner from "../spinner/Spinner";
import "./payment-In-progress.css";

const PaymentInProgress = () => {
  const pipRef = useRef(null);

  return (
    <AnimatedPage className="pip">
      <CustomSection id={""} ref={pipRef}>
        <Spinner />
        <div>
          Kindly complete your donation in the pop-up window. You would be
          redirected back here after your succesful donation.
        </div>
      </CustomSection>
    </AnimatedPage>
  );
};

export default PaymentInProgress;
