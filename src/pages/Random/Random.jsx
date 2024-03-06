import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Random.css";
import Footer from "../../components/Footer/Footer";

const Random = () => {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((data) => setRandom(data))
      .catch((error) => console.log("Fehler", error));
  }, []);

  console.log(random);
  return (
    <section>
      <div className="random">
        <img src={random.image_url} alt="" />
        <article>
          <h2>{random.name}</h2>
          <h3>{random.tagline}</h3>
          <div>
            <p>First Brewed</p>
            <p>{random.first_brewed}</p>
          </div>
          <div>
            <p>Attenuation Level</p>
            <p>{random.attenuation_level}</p>
          </div>
          <p className="description">{random.description}</p>
        </article>
      </div>
      <Footer />
    </section>
  );
};

export default Random;
