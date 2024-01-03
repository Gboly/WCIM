import Article from "../article/Article";
import "./give-card.css";
import { useNavigate } from "react-router-dom";

const GiveCard = ({ details: { id, title, desc, poster } }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/gift/${id}`);

  return (
    <article className="give-card">
      <img src={poster} alt="" onClick={handleClick} />
      <Article header={title} body={desc} />
      <button onClick={handleClick}>Give Now</button>
    </article>
  );
};

export default GiveCard;
