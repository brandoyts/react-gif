import React, { useRef } from "react";
import "./Card.css";

const btnStyles = {
    marginTop: "2rem",
    backgroundColor: "slateblue",
    color: "white",
    outline: "none"
};

const imgStyle = {
    height: "180px",
    maxWidth: "100%"
};

function Card(props) {
    const hiddenInput = useRef(null);

    const onSetCopy = () => {
        props.onModal();
        hiddenInput.current.select();
        document.execCommand("copy");
    };

    return (
        <div className="card">
            <img
                src={props.url}
                className="card-img-top"
                style={imgStyle}
                alt={props.url}
            />
            <div className="card-body">
                <input
                    className="p-1"
                    readOnly
                    type="text"
                    value={props.url}
                    ref={hiddenInput}
                />
                <button
                    type="button"
                    className="btn"
                    style={btnStyles}
                    onClick={onSetCopy}
                >
                    Copy Link
                </button>
            </div>
        </div>
    );
}

export default Card;
