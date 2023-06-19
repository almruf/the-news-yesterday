import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useTitle from "../../../createhook/useTitle";

const Register = () => {
  useTitle('register')
  const [error, setError] = useState();
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.name?.value;
    const photoURL = form?.photoURL?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate("/");
        handleUpdateUserProfile(name, photoURL)
        handleEmailVerification()
        toast.success('confirm your email verification')
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleEmailVerification = () => {
      verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error))
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error))
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>your name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>photo</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter photo url"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Text className="text-danger mb-2"> {error}</Form.Text>
      <br />
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleAccepted}
          label={
            <>
              Accept <Link to="/terms">terms condition</Link>
            </>
          }
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="mt-4 mb-4"
        disabled={!accepted}
      >
        Register
      </Button>
    </Form>
  );
};

export default Register;
