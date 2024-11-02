import React from "react";

const LearningObjectives = () => {
  return (
    <div style={{ background: "transparent", margin: "0 auto" }}>
      <div style={{ background: "transparent", margin: "0 auto" }}>
        <span
          style={{
            background: "transparent",
            fontFamily: "Nunito",
            fontSize: "2.4rem",
            fontWeight: "bold",
            color: "#707070",
          }}>
          Explore Scratch blocks
        </span>
        <p
          style={{
            background: "transparent",
            fontFamily: "Nunito",
            fontSize: "1.6rem",
            color: "#707070",
          }}>
          Learn the basic function of some basic scratch blocks such as “say,”
          “wait,” “go to” and “hide.”
        </p>
      </div>
      <div style={{ background: "transparent", display: "gird", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
      <div style={{background: "transparent"}}>
        <p style={{background: "transparent", fontFamily: "Nunito", fontWeight: "1.8rem", padding: "1rem", color: "#707070"}}>Look Blocks</p>
        <div style={{background: "transparent", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap:"1rem"}}>
         <img src="/images/projects/Project01-obj1.png" alt="projectPhoto1" height="46.8rem" width="20.1rem"/>
         <img src="/images/projects/Project01-obj2.png" alt="projectPhoto2" height="14.7rem" width="19.8rem" />
        </div>
      </div>
      <div style={{background: "transparent"}}>
        <p style={{background: "transparent", fontFamily: "Nunito", fontWeight: "1.8rem", padding: "1rem", color: "#707070"}}>Control Blocks</p>
        <div style={{background: "transparent", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap:"1rem"}}>
         <img src="/images/projects/Project01-obj3.png" alt="projectPhoto3" height="46.8rem" width="20.1rem"/>
         <img src="/images/projects/Project01-obj4.png" alt="projectPhoto4" height="14.7rem" width="19.8rem" />
        </div>
      </div>
      <div style={{background: "transparent"}}>
        <p style={{background: "transparent", fontFamily: "Nunito", fontWeight: "1.8rem", padding: "1rem", color: "#707070"}}>Motion Blocks</p>
        <div style={{background: "transparent", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap:"1rem"}}>
         <img src="/images/projects/Project01-obj5.png" alt="projectPhoto5" height="46.8rem" width="20.1rem"/>
         <img src="/images/projects/Project01-obj6.png" alt="projectPhoto6" height="14.7rem" width="19.8rem" />
        </div>
      </div>

      </div>
    </div>
  );
};

export default LearningObjectives;
