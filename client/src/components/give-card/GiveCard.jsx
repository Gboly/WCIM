import Article from "../article/Article";
import "./give-card.css";
import feedPoster from "../../assets/wcim-donations.jpg";

const GiveCard = () => {
  return (
    <article className="give-card">
      <img src={feedPoster} alt="" />
      <Article
        header={"Feed the Hungry"}
        body={
          "Your support has the transformative ability to break the chains of hunger, providing nourishment and fostering hope. Join us in the mission to eradicate hunger, ensuring a future where no one experiences the pain of an empty"
        }
      />
      <button>Give Now</button>
    </article>
  );
};

export default GiveCard;
