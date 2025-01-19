import { EmailDataProp } from "@/types/EmailData";
import * as React from "react";

export const ResponseEmail: React.FC<Readonly<EmailDataProp>> = ({
  firstname,
  lastname,
  email,
  mobile,
  street,
  landmark,
  city,
  state,
  pincode,
  Investment_Plan,
  Business_Types
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
      response from, {firstname} {lastname}!
    </h1>
    <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.5" }}>
      Data of customers given below. The responses they build on site.
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
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Mobile:</strong> {mobile}
      </p>
      <p>
        <strong>Address:</strong> {street}, {landmark}, {city}, {state},{" "}
        {pincode}
      </p>
      <p>
        <strong>Investment Plan:</strong> {Investment_Plan}
      </p>
      <p>
        <strong>Business Types:</strong> {Business_Types}
      </p>
    </div>
    <div style={{ textAlign: "center", marginTop: "20px" }} />
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
      © {new Date().getFullYear()} Your Company Name. All rights reserved.
    </footer>
  </div>
);
