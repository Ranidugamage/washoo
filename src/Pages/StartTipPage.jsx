import React from "react";
import StartTips from "../components/StartTips";

export default function StartTipPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StartTips />
    </div>
  );
}
