import { useRef } from "react";
import AnimatedPage from "../animated/AnimatedPage";
import CustomSection from "../customSection/CustomSection";
import "./payment-cancelled.css";
import cancel from "../../assets/cancel.png";

const PaymentCancelled = () => {
  const pcRef = useRef(null);

  const handleClick = () => (window.location.href = "/donate/checkout");

  return (
    <AnimatedPage className="pip ps">
      <CustomSection id={""} ref={pcRef}>
        <img src={cancel} alt="" />
        <div>
          <p>Donation Cancelled</p>
          <p>
            Unfortunately, your donation was not successful. Kindly try again
          </p>
        </div>
        <button onClick={handleClick}>Go to Checkout</button>
      </CustomSection>
    </AnimatedPage>
  );
};

export default PaymentCancelled;
