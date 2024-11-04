import React from "react";

const LearningObjectives = () => {
  return (
    <div style={{ background: "transparent", marginTop: "5rem" }}>
      <div style={{ background: "transparent"}}>
        <p
          style={{
            background: "transparent",
            fontFamily: "Nunito",
            fontSize: "2.4rem",
            fontWeight: "bold",
            color: "#707070",
            textAlign: "center",
            marginBottom: "2rem"  
          }}>
          Explore Scratch blocks
        </p>
        <p
          style={{
            background: "transparent",
            fontFamily: "Nunito",
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#707070",
           textAlign: "center",
           marginBottom: "2rem"             
          }}>
          Learn the basic function of some basic scratch blocks such as “say,”
          “wait,” “go to” and “hide.”
        </p>
      </div>
      <div style={{ background: "transparent", display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
      <div style={{background: "transparent"}}>
        <p style={{background: "transparent", fontFamily: "Nunito", fontWeight: "bold", fontSize: "18px", padding: "10px", color: "#707070"}}>Look Blocks</p>
        <div style={{background: "transparent", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap:"2rem"}}>
         <img src="/images/projects/Project01-obj1.png" alt="projectPhoto1" height="468" width="201"/>
         <img src="/images/projects/Project01-obj2.png" alt="projectPhoto2" height="147" width="195" />
        </div>
      </div>
      <div style={{background: "transparent"}}>
        <p style={{background: "transparent", fontFamily: "Nunito", fontWeight: "bold", fontSize: "18px", padding: "10px", color: "#707070"}}>Control Blocks</p>
        <div style={{background: "transparent", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap:"2rem"}}>
         <img src="/images/projects/Project01-obj3.png" alt="projectPhoto3" height="468" width="201"/>
         <img src="/images/projects/Project01-obj4.png" alt="projectPhoto4" height="60" width="195" />
        </div>
      </div>
      <div style={{background: "transparent"}}>
        <p style={{background: "transparent", fontFamily: "Nunito", fontWeight: "bold", fontSize: "18px", padding: "10px", color: "#707070"}}>Motion Blocks</p>
        <div style={{background: "transparent", display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap:"2rem"}}>
         <img src="/images/projects/Project01-obj5.png" alt="projectPhoto5" height="468" width="201"/>
         <img src="/images/projects/Project01-obj6.png" alt="projectPhoto6" height="147" width="195" />
        </div>
      </div>

      </div>
    </div>
  );
};

export default LearningObjectives;
