import DonateButton from "../../components/donateButton/DonateButton";
import "./home.css";
// import mainPicture from "../../assets/wcim-main-pic.png";

function Home() {
  return (
    <main className="home">
      <section id="intro">
        {/* <img
          src={mainPicture}
          alt="Kids touching with a WCIM official's hair while they all smile"
        /> */}
        <div>
          <header>
            Expressing your faith means blessing the poor and helping humanity
          </header>
          <DonateButton styleClass={"bigger"} />
          <p>Join and support us in making the world a better place.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
