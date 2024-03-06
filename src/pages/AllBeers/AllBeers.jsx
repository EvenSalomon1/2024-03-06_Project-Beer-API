import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllBeers.css";
import Footer from "../../components/Footer/Footer";

const AllBeers = () => {
  const [allBeers, setAllBeers] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setAllBeers(data))
      .catch((error) => console.log("Fehler", error));
  }, []);

  console.log(allBeers);
  return (
    <>
      <section className="allbeers">
        {allBeers ? (
          allBeers.map((item, index) => (
            <div key={index}>
              <img src={item.image_url} alt="" />
              <div>
                <h1>{item.name}</h1>
                <h3>{item.tagline}</h3>
                <p>Created by {item.name}</p>
                <button>
                  <Link to={`/allbeers/${item._id}`}>Details</Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p> Loading... </p>
        )}
        <Footer />
      </section>
    </>
  );
};

export default AllBeers;
