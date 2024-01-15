import { capitalizeCamelCase } from "../../util/functions";
import "./text-input.css";

const inputTypes = {
  email: "email",
  guardianEmail: "email",
  DOB: "date",
  lastResult: "file",
  essay: "file",
};
const accept = {
  essay:
    "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  lastResult: "image/png, image/gif, image/jpeg",
};
const TextInput = ({ value, handleInput, handleChange, name, label }) => {
  return (
    <div className="text-input-container">
      <label htmlFor={name}>
        {label ||
          capitalizeCamelCase(name) +
            (name === "address" ? " (optional)" : " *")}
      </label>
      <input
        type={inputTypes[name] || "text"}
        id={name}
        value={value}
        onInput={handleInput}
        onChange={handleChange}
        autoComplete="off"
        accept={accept[name] || "*"}
      />
    </div>
  );
};

export default TextInput;
