import { VerifiedEmailDataProp } from "@/types/EmailData";
import * as React from "react";

export const VerifiedEmail: React.FC<Readonly<VerifiedEmailDataProp>> = ({
  firstname,
  lastname,
  email,
  mobile,
  street,
  landmark,
  city,
  state,
  pincode
  // password
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      margin: "0 auto",
      maxWidth: "600px",
      backgroundColor: "#f9f9f9",
      padding: "20px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px"
    }}
  >
    <h1 style={{ color: "#333", textAlign: "center" }}>
      Welcome, {firstname} {lastname}!
    </h1>
    <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.5" }}>
      Congratulations! Your account has been successfully verified. Below are
      the details you provided during registration:
    </p>
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "15px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        marginTop: "20px"
      }}
    >
      <p>
        <strong>Name:</strong> {firstname} {lastname}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Mobile:</strong> {mobile}
      </p>
      <p>
        <strong>Address:</strong> {street}, {landmark}, {city}, {state},{" "}
        {pincode}
      </p>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a
          href="https://campacolaindustries.com/login"
          style={{
            display: "inline-block",
            backgroundColor: "#007bff",
            color: "#ffffff",
            textDecoration: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold"
          }}
        >
          Log In to Your Account
        </a>
      </div>
    </div>
    {/* <div
      style={{
        backgroundColor: "#ffffff",
        padding: "15px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        marginTop: "20px"
      }}
    > */}
    {/* <p>
        <strong>Your Temporary Password:</strong>{" "}
        <span style={{ color: "#d9534f" }}>{password}</span>
      </p> */}
    {/* </div> */}

    <footer
      style={{
        marginTop: "30px",
        borderTop: "1px solid #e0e0e0",
        paddingTop: "10px",
        fontSize: "12px",
        color: "#888",
        textAlign: "center"
      }}
    >
      © {new Date().getFullYear()} Campa Cola Industries. All rights reserved.
    </footer>
  </div>
);
