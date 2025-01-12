import React from "react";
import Image from "next/image";
import "./login.css";
import nikeLogo from "../../../../public/images/logo2.png";

const page = () => {



  
  return (
    <div className="login_container">
      <div className="logo_heading_div">
        <Image src={nikeLogo} alt="nike logo"></Image>
        <h2>YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
      </div>

      <div className="login_input_div">
        <input
          type="email"
          placeholder="Email address"
          className="login_input"
        />
        <input type="password" placeholder="Password" className="login_input" />
      </div>

      <div className="login_checkbox_forgot_div">
        <p
          style={{
            fontSize: "12px",
            fontWeight: 400,
            display: "flex",
            columnGap: "10px",
            color: "#8D8D8D",
          }}
        >
          <input type="checkbox" name="" id="" style={{width:"20px" ,accentColor:"white"}} />
          Keep me signed in
        </p>
        <button style={{ fontSize: "12px", fontWeight: 400, color: "#BCBCBC",  }}>
          Forgot your password?
        </button>
      </div>
      <p
        style={{
          fontSize: "12px",
          fontWeight: 400,
          color: "#8D8D8D",
          width: "80%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        By logging in, you agree to Nike's{" "}
        <span style={{ textDecoration: "underline" }}> Privacy Policy</span> and{" "}
        <span style={{ textDecoration: "underline" }}> Terms of Use. </span>
      </p>
      <button className="login_btn">SIGN IN</button>
      <p className="login_join_us">
        Not a Memeber? <span>Join US</span>
      </p>
    </div>
  );
};

export default page;
