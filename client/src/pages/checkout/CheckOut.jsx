import { useMemo, useRef, useState } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/customSection";
import "./checkout.css";
import {
  capitalizeCamelCase,
  getStatesByCountry,
  extractCountries,
} from "../../util/functions";
import { SelectBox } from "../../components/donate/Donate";
import {
  useGetCountriesAndStatesQuery,
  useInitPaystackMutation,
} from "../../app/api-slices/payment";
import Spinner from "../../components/spinner/Spinner";

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

  const { data } = useGetCountriesAndStatesQuery();
  const [donate, { data: paystackInitData, isLoading }] =
    useInitPaystackMutation();

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
      amount: donationDetails.amount.replace(/,/g, ""),
    };
    donate(body);
  };

  return (
    <AnimatedPage className={"checkout"}>
      {!paystackInitData ? (
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
      ) : (
        <iframe src={paystackInitData.authorization_url}></iframe>
      )}
    </AnimatedPage>
  );
};

const inputTypes = {
  firstName: "text",
  lastName: "text",
  email: "email",
  address: "text",
};
const TextInput = ({ value, handleInput, name }) => {
  return (
    <div className="text-input-container">
      <label htmlFor={name}>
        {capitalizeCamelCase(name) +
          (name === "address" ? " (optional)" : " *")}
      </label>
      <input
        type={inputTypes[name]}
        id={name}
        value={value}
        onInput={handleInput}
        autoComplete="off"
      />
    </div>
  );
};

export default CheckOut;
