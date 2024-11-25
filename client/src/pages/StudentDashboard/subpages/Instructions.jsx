import React from "react";

const Instructions = () => {
  return (
    <div style={{ background: "transparent", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "3rem", margin: "0 10%", padding: "2%"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "2rem"
        }}>
        <h2
          style={{
            background: "transparent",
            fontFamily: "Nunito",
            fontWeight: "bold",
            fontSize: "25px",
            color: "#6C6C6C",
          }}>
          1. JOIN SCRATCH
        </h2>
        <p
          style={{
            background: "transparent",
            fontFamily: "Open sans",
            fontWeight: "semiBold",
            fontSize: "16px",
            color: "#707070",
          }}>
          If you haven’t used Scratch before, you will need to join Scratch
          first.{" "}
        </p>
        <p
          style={{
            background: "transparent",
            fontFamily: "Open sans",
            fontWeight: "semiBold",
            fontSize: "16px",
            color: "#707070",
          }}>
          Go to https://scratch.mit.edu. Click on{" "}
          <span style={{ color: "#F91C85" }}>Join Scratch.</span>
        </p>
      </div>
      <img
        src="/images/projects/Project01-instructions.png"
        alt="instructions"
        width="1026"
        height="269"
      />
      <p
        style={{
          background: "transparent",
          fontFamily: "Open sans",
          fontWeight: "semiBold",
          fontSize: "16px",
          color: "#707070",
        }}>
        Follow the instructions to join. You will need a username and a password
        that you will remember. If possible, you should also verify your email
        address so that you can Share projects later. Ask your teacher to help
        with this step if you don’t have an email address, or if you are not
        sure what to do.
      </p>
    </div>
  );
};

export default Instructions;
