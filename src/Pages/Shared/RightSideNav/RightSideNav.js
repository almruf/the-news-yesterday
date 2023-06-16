import React, { useContext } from "react";
import "./RightSideNev.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate('/');
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <ButtonGroup vertical className="btn-login mb-4">
        <Button
          onClick={handleGoogleSignIn}
          className=" mb-2"
          variant="outline-info"
        >
          {" "}
          <FaGoogle></FaGoogle> login with google
        </Button>

        <Button className="" variant="outline-primary">
          <FaFacebook></FaFacebook> login with facebook
        </Button>
      </ButtonGroup>

      <div className="">
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaYoutube></FaYoutube> youtube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaGoogle></FaGoogle> google
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram></FaInstagram> instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
