import "./brand.css";
import globe from "../../assets/globe.png";
import cross from "../../assets/cross.png";

const Brand = () => {
  return (
    <div className="brand">
      <div className="brand-name lg">
        <span>
          <span className="world">w</span>
          <img src={globe} alt="globe" className="globe" />
          <span>rld</span>
          <span className="care">c</span>
          <img src={cross} alt="cross" className="cross" />
          <span>re</span>
        </span>
        <span>international ministry</span>
      </div>
      <div className="brand-name sm">
        <span>
          <span>w</span>
          <span>c</span>
          <img src={cross} alt="cross" className="cross" />
          <span>m</span>
        </span>
      </div>
    </div>
  );
};

export default Brand;
