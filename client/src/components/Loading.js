import React from "react";
import { Circle } from "better-react-spinkit";
function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "50vh" }}>
      <Circle color="#3CBC28" size={60} />
      <h5 style={{ textAlign: "center" }}>Your informations are gathering, please wait</h5>
    </center>
  );
}

export default Loading;
