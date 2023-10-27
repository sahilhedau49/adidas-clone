import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const { SignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      await SignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="min-h-[20rem] flex place-items-center place-content-center">
      <div>
        <GoogleButton onClick={handleLogIn} />
      </div>
    </div>
  );
};

export default Login;
