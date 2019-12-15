import React from "react";

const styles = {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    background: "linear-gradient(90deg, #642b73 0%,#c6426e 100% )",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0"
};

export default function Modal() {
    return (
        <div className="Modal" style={styles}>
            <h1>COPIED!</h1>
        </div>
    );
}
