import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useTitle from "../../../createhook/useTitle";






const Login = () => {
 useTitle('login')
  const [error, setError] = useState('');
  const { signIn ,setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location)
  
  const from = location?.state?.from?.pathname || '/';
  //  console.log(from)

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        form.reset();
        setError('');
        if(user.emailVerified){
          navigate(from, {replace: true})
        }
        else{
          toast.error('pleas confirm your email verification');
        }
        
      })
      .catch(error => {
        console.error(error)
        setError(error.message)        
      })
      .finally(()=>{
        setLoading(false)
      })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Text className="text-danger mb-2">{error}</Form.Text>
      <br/>
      <Button variant="primary" type="submit" className="mb-4">
        Login
      </Button>     
    </Form>
  );
};

export default Login;
