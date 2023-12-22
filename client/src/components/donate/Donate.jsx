import { NavLink } from "react-router-dom";
import { donationSectionImages } from "../../util/content";
import { chooseAtRandomFromArray } from "../../util/functions";
import "./donate.css";
import { useState } from "react";

const backgroundImage = chooseAtRandomFromArray(donationSectionImages);
const initialState = {
  frequency: "monthly",
  amount: "",
  priceType: "50",
  currency: "USD",
};
const howFrequent = [
  { type: "monthly", label: "Monthly Gift" },
  { type: "Once", label: "One-time Gift" },
];
const donationAmount = [
  {
    type: "20",
    price: { USD: "20", NGN: "5000" },
  },
  {
    type: "50",
    price: { USD: "50", NGN: "10,000" },
  },
  {
    type: "100",
    price: { USD: "100", NGN: "50,000" },
  },
  {
    type: "other",
    price: { USD: "", NGN: "" },
  },
];
const currencies = [
  { desc: "USD", name: "USD" },
  { desc: "NGN", name: "NGN" },
];

const Donate = () => {
  const [{ frequency, amount, priceType, currency }, setDetails] =
    useState(initialState);

  const handleChange = (e) => {
    e && e.preventDefault && e.preventDefault();
    setDetails((pending) => ({
      ...pending,
      [e.target.name]: e.target.value,
    }));
  };
  const handleInput = (e) => {
    setDetails((pending) => ({ ...pending, amount: e.target.value }));
  };
  const selectOther = () =>
    setDetails((pending) => ({ ...pending, priceType: "other" }));

  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
  };

  return (
    <section className="donate-section">
      <img src={backgroundImage} alt="donate" />
      <div>
        <div>
          <p>Join and support us in making the world a better place</p>
          <header>
            <span>Donate Now</span>
            <SelectBox
              {...{
                handleChange,
                options: currencies,
                label: "currency",
                value: currency,
              }}
            />
          </header>
          <form onSubmit={handleSubmit}>
            <div>
              {howFrequent.map(({ type, label }) => (
                <RadioLabel
                  key={type}
                  type={type}
                  label={label}
                  handleChange={handleChange}
                  value={frequency}
                  name={"frequency"}
                />
              ))}
            </div>
            <div>
              {donationAmount.map(({ type, price }) => (
                <RadioLabel
                  key={type}
                  type={type}
                  label={`${currency === "USD" ? "$" : "N"} ${price[currency]}`}
                  handleChange={handleChange}
                  value={priceType}
                  name={"priceType"}
                  amount={amount}
                  handleInput={handleInput}
                  selectOther={selectOther}
                />
              ))}
            </div>
            <button disabled={priceType === "other" && !amount}>
              Donate securely
            </button>
            <NavLink to={"get-involved/giving"}>
              Browse through our giving catalog to donate to a specific cause
            </NavLink>
          </form>
        </div>
      </div>
    </section>
  );
};

export const SelectBox = ({ handleChange, value, label, options }) => {
  return (
    <>
      <select
        className="select"
        name={label}
        id={label}
        value={value}
        onChange={handleChange}
      >
        {(options || []).map(({ desc, name }, index) => (
          <option key={index} value={name}>
            {desc}
          </option>
        ))}
      </select>
    </>
  );
};

const RadioLabel = ({
  type,
  label,
  handleChange,
  value,
  name,
  amount,
  handleInput,
  selectOther,
}) => {
  return (
    <>
      <input
        key={type}
        type="radio"
        id={type}
        name={name}
        value={type}
        checked={value === type}
        onChange={handleChange}
      />
      <label
        key={label}
        htmlFor={type}
        className={`${type === "other" ? "other-label" : ""} ${
          value === type ? "checked" : ""
        }`}
      >
        {type === "other" ? (
          <input
            type="number"
            className="custom-donation"
            value={amount}
            onInput={handleInput}
            placeholder="Custom"
            onFocus={selectOther}
          />
        ) : (
          label
        )}
      </label>
    </>
  );
};

export default Donate;
