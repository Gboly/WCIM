import Spinner from "../spinner/Spinner";
import "./processing.css";

const Processing = ({ desc }) => {
  return (
    <section className="processing">
      <main>
        <div>
          <Spinner />
        </div>
        <p>{desc}</p>
      </main>
    </section>
  );
};

export default Processing;
