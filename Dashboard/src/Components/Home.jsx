import React from 'react'
import Dashboard from './Dashboard.jsx';
import Topbar from './Topbar.jsx';
import { useEffect } from "react";
import { ClientServer } from '../ClientServer';

export default function Home() {

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const res = await ClientServer.get("/me");

        console.log("Logged in user:", res.data.user);
      } catch (error) {
        if (error.response?.status === 401) {
          window.location.href = "http://localhost:5173/login";
        }
      }
    };

    getLoggedInUser();
  }, []);
  return (
    <div>
      <Topbar />
      <Dashboard />
    </div>
  )
}
