import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function LoginPage() {
  const API_URL = process.env.REACT_APP_API_URL;
  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(`${API_URL}/auth/callback`, {
        credential: credentialResponse.credential,
      });
      alert(`Welcome ${res.data.email}! Login successful`);
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  const handleError = () => {
    alert("Google Login failed");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>WELCOME TO LOOKBOOK AI</h2>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        size="large"
        width="300"
      />
    </div>
  );
}
