import { useEffect, useMemo, useRef, useState } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/CustomSection";
import "./checkout.css";
import {
  capitalizeCamelCase,
  getStatesByCountry,
  extractCountries,
  isPaystack,
} from "../../util/functions";
import { SelectBox } from "../../components/donate/Donate";
import {
  useGetCountriesAndStatesQuery,
  useInitPaymentMutation,
} from "../../app/api-slices/payment";
import Spinner from "../../components/spinner/Spinner";
import TextInput from "../../components/text-input/TextInput";
import PaymentSuccessful from "../../components/PaymentSuccessful/PaymentSuccessful";
import PaymentCancelled from "../../components/PaymentCancelled/PaymentCancelled";
import PaymentInProgress from "../../components/PaymentInProgress/PaymentInProgress";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  country: "",
  state: "",
};

const CheckOut = () => {
  const donationDetails = JSON.parse(sessionStorage.getItem("donation"));

  const checkoutRef = useRef(null);
  const [details, setDetails] = useState(initialState);
  const [isPaid, setIsPaid] = useState("");

  const { data } = useGetCountriesAndStatesQuery();
  const [donate, { data: paymentData, isLoading }] = useInitPaymentMutation();

  useEffect(() => {
    window.setPaidStatus = (type) => {
      setIsPaid(type);
    };

    paymentData &&
      !isPaystack(donationDetails) &&
      window.open(paymentData.url, "_blank", "width=1000,height=1000");
  }, [paymentData, donationDetails]);

  const handleChange = (e) => {
    e && e.preventDefault && e.preventDefault();
    setDetails((pending) => ({
      ...pending,
      [e.target.name]: e.target.value,
    }));
  };
  const handleInput = (e) => {
    e && e.preventDefault && e.preventDefault();
    setDetails((pending) => ({
      ...pending,
      [e.target.id]: e.target.value,
    }));
  };

  const isDisabled =
    Object.entries(details).some(
      ([key, value]) => key !== "address" && !value
    ) ||
    !donationDetails ||
    donationDetails.amount === "0";

  const selectOptions = useMemo(() => {
    return {
      country: extractCountries(data),
      state: getStatesByCountry(data, details.country),
    };
  }, [details, data]);

  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
    const body = {
      ...donationDetails,
      ...details,
      amount: String(Number(donationDetails.amount.replace(/,/g, "")) * 100),
    };
    donate(body);
  };

  return isPaid === "success" ? (
    <PaymentSuccessful />
  ) : isPaid === "cancel" ? (
    <PaymentCancelled />
  ) : (
    <AnimatedPage className={"checkout"}>
      {!paymentData ? (
        <CustomSection id={""} ref={checkoutRef}>
          <div className="checkout-box">
            <aside>
              <header>Donate Now</header>
              <p>Join us in making the world a better place.</p>
            </aside>
            <main>
              {data ? (
                <form onSubmit={handleSubmit}>
                  {Object.keys(initialState).map((item) =>
                    item === "country" || item === "state" ? (
                      <div key={item} className="select-container">
                        <label htmlFor={item}>
                          {capitalizeCamelCase(item)} *
                        </label>
                        <SelectBox
                          handleChange={handleChange}
                          value={details[item]}
                          label={item}
                          options={selectOptions[item]}
                        />
                      </div>
                    ) : (
                      <TextInput
                        key={item}
                        value={details[item]}
                        handleInput={handleInput}
                        name={item}
                      />
                    )
                  )}
                  <section className="other-section">
                    <header>Your Donation</header>
                    <div>
                      <span>Frequency</span>
                      <span>
                        {donationDetails?.subscription ? "Monthly" : "One-off"}
                      </span>
                    </div>
                    <div>
                      <span>Amount</span>
                      <span>{`${donationDetails?.currency || "NGN"} ${
                        donationDetails?.amount || "0"
                      }`}</span>
                    </div>
                    <div>
                      <span>Gift Target</span>
                      <span>{donationDetails?.giftCategory || "General"}</span>
                    </div>
                  </section>
                  <section className="continue">
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      <button
                        disabled={isDisabled}
                        className={isDisabled ? "disabled-button" : ""}
                      >
                        Continue
                      </button>
                    )}
                  </section>
                </form>
              ) : (
                <Spinner />
              )}
            </main>
          </div>
        </CustomSection>
      ) : isPaystack(donationDetails) ? (
        <iframe src={paymentData.authorization_url}></iframe>
      ) : (
        <PaymentInProgress />
      )}
    </AnimatedPage>
  );
};

export default CheckOut;
