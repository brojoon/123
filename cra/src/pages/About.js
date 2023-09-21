import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/", { replace: true });

  return (
    <>
      <h1>소개 페이지</h1>
      <button onClick={handleClick}>Go back Main</button>
      <Navigate to="/home" replace />
    </>
  );
};

export default About;
