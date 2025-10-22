import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPage from "./LoginPage";
import axios from "axios";

export default function App() {
  const [clientId, setClientId] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch client ID dynamically from backend
    axios.get(`${API_URL}/config`)
      .then((res) => {
        setClientId(res.data.google_client_id);
      })
      .catch((err) => {
        console.error("Failed to fetch Google Client ID:", err);
      });
  }, []);

  if (!clientId) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <LoginPage />
    </GoogleOAuthProvider>
  );
}
