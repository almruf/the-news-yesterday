import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  // useref another way to usestate  
  const photoURLRef = useRef(user?.photoURL);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
    console.log(name);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly  defaultValue={user.email} type="email" placeholder="Enter email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>full name</Form.Label>
        <Form.Control onChange={handleNameChange}  defaultValue={name}  type="text"  placeholder="Full name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>photoURL</Form.Label>
        <Form.Control ref={photoURLRef} defaultValue={user?.photoURL}  type="text"  placeholder="Photo url"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
