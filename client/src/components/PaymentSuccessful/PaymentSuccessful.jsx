import { useRef } from "react";
import AnimatedPage from "../animated/AnimatedPage";
import CustomSection from "../customSection/CustomSection";
import "./payment-successful.css";
import successful from "../../assets/successful.png";

const PaymentSuccessful = () => {
  const { currency, amount, subscription } = JSON.parse(
    sessionStorage.getItem("donation")
  );
  const psRef = useRef(null);

  const handleClick = () => (window.location.href = "/");

  return (
    <AnimatedPage className="pip ps">
      <CustomSection id={""} ref={psRef}>
        <img src={successful} alt="" />
        <div>
          <p>Donation Successful</p>
          <p>
            Your donation of {currency}
            {amount} is successful.{" "}
            {subscription && "You would be charged on a monthly basis."} Thank
            you and God bless.
          </p>
        </div>
        <button onClick={handleClick}>Go to Homepage</button>
      </CustomSection>
    </AnimatedPage>
  );
};

export default PaymentSuccessful;
