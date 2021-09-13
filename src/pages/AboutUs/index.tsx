import { Link } from "react-router-dom";
import NavBar from "../../components/GlobalHeader";

const AboutUs = () => {

  return (
    <div>
      <NavBar>
        <Link to='/'>Home</Link>
      </NavBar>
    </div>
  );
};

export default AboutUs;