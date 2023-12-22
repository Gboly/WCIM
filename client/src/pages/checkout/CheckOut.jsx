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
import { useGetCountriesAndStatesQuery } from "../../app/api-slices/payment";
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
  const checkoutRef = useRef(null);
  const [details, setDetails] = useState(initialState);

  const { data } = useGetCountriesAndStatesQuery();

  const { firstName, lastName, email, address, country, state } = details;

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

  const isDisabled = Object.entries(details).some(
    ([key, value]) => key !== "address" && !value
  );

  const selectOptions = useMemo(() => {
    return {
      country: extractCountries(data),
      state: getStatesByCountry(data, country),
    };
  }, [country, data]);

  return (
    <AnimatedPage className={"checkout"}>
      <CustomSection id={""} ref={checkoutRef}>
        <div className="checkout-box">
          <aside>
            <header>Donate Now</header>
            <p>Join us in making the world a better place.</p>
          </aside>
          <main>
            {data ? (
              <form action="">
                {Object.keys(initialState).map((item) =>
                  item === "country" || item === "state" ? (
                    <div key={item} className="select-container">
                      <label htmlFor={item}>
                        {capitalizeCamelCase(item)} *
                      </label>
                      <SelectBox
                        handleChange={handleChange}
                        value={item === "country" ? country : state}
                        label={item}
                        options={selectOptions[item]}
                      />
                    </div>
                  ) : (
                    <div key={item}>
                      <TextInput
                        value={details[item]}
                        handleInput={handleInput}
                        name={item}
                      />
                    </div>
                  )
                )}
                <section className="other-section">
                  <header>Your Donation</header>
                  <div>
                    <span>Frequency</span>
                    <span>Monthly</span>
                  </div>
                  <div>
                    <span>Amount</span>
                    <span>$50</span>
                  </div>
                </section>
                <p>
                  <button disabled={isDisabled}>Continue</button>
                </p>
              </form>
            ) : (
              <Spinner />
            )}
          </main>
        </div>
      </CustomSection>
    </AnimatedPage>
  );
};

const TextInput = ({ value, handleInput, name }) => {
  return (
    <div className="text-input-container">
      <label htmlFor={name}>
        {capitalizeCamelCase(name) +
          (name === "address" ? " (optional)" : " *")}
      </label>
      <input
        type="text"
        id={name}
        value={value}
        onInput={handleInput}
        autoComplete="off"
      />
    </div>
  );
};

export default CheckOut;
