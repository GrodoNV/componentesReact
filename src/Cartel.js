import React from "react";

const Cartel = ({ title, text, imgSrc, buttonText, bgColor }) => {
  return (
    <div className="card text-center" style={{ backgroundColor: bgColor }}>
      <img
        src={imgSrc}
        className="card-img-top"
        alt={title}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body text-dark">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-outline-dark">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Cartel;
