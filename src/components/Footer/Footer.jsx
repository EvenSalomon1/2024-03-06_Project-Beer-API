import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="/">
          <img src="../../../public/bier 1.jpg" alt="beer" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
