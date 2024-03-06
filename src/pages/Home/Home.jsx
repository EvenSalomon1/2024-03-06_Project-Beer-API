import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div>
        <img src="../../../public/startseite1.jpeg" alt="" />
        <h2>
          <Link to="/allbeers">All Beers</Link>
        </h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.{" "}
        </h3>
      </div>
      <div>
        <img src="../../../public/startseite2.jpeg" alt="" />
        <h2>
          <Link to="/random">Random Beers</Link>
        </h2>

        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.{" "}
        </h3>
      </div>
    </section>
  );
};

export default Home;
