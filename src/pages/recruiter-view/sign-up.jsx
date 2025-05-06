import React from "react";
import Navbar from "../../components/recruiter-view/navbar.jsx";
import SignUpComponent from "../../components/recruiter-view/sign-up/index.jsx";

const SignUp = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <SignUpComponent />
    </div>
  );
};

export default SignUp;
