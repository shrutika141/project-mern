import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LoginFunc
} from "../../Services/UserService";
import {
  useNavigate
} from "react-router-dom";

const Login = () => {
let navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onSubmitHandler = (e) => {
      e.preventDefault();
      const data = { email, password }
      console.log(data)
      LoginFunc(data)
      .then(() => navigate('/dashboard'))
      .catch(() => console.log('got err'))
    }

  return (
    <div className="container border mt-5 p-3 rounded">
    <h3 className="text-center">Login Page</h3>
    <hr />
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Email address</label>
          <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Link to="signup">Go to Signup</Link>
    </div>
  );
};

export default Login;
