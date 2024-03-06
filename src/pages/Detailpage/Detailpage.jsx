import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Detailpage.css";
import Footer from "../../components/Footer/Footer";

const Detailpage = () => {
  const [details, setDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .then((error) => console.log("Fehler", error));
  }, []);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const find = details.find((item) => item._id === id);
    setFilteredData(find);

    console.log(find);
  }, [details]);

  return (
    <section>
      {filteredData ? (
        <div className="detail">
          <img src={filteredData.image_url} alt="" />
          <article>
            <h1>{filteredData.name}</h1>
            <h3>{filteredData.tagline}</h3>
            <div>
              <p>First Brewed</p>
              <p>{filteredData.first_brewed}</p>
            </div>
            <div>
              <p>Attenuation Level</p>
              <p>{filteredData.attenuation_level}</p>
            </div>
            <p className="description">{filteredData.description}</p>
            <button>
              <Link to="/allbeers">
                <img src="../../../public/Back.png" alt="back" />
              </Link>
            </button>{" "}
          </article>
        </div>
      ) : (
        <p> Loading...</p>
      )}
      <Footer />
    </section>
  );
};

export default Detailpage;
