import { capitalizeCamelCase } from "../../util/functions";
import "./text-input.css";

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

export default TextInput;
