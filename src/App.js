import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cartel from "./Cartel"; // Importamos el componente Cartel

const App = () => {
  const cards = [
    {
      title: "Web primero",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      imgSrc: "https://via.placeholder.com/150", // Sustituir por el logo de C++
      buttonText: "Ir a la página",
      bgColor: "#f8f9fa",
    },
    {
      title: "Web Segundo",
      text: "Distinctio voluptatem deleniti quo molestias.",
      imgSrc: "https://via.placeholder.com/150", // Sustituir por el logo de JavaScript
      buttonText: "Ir a la página",
      bgColor: "#ffffcc",
    },
    {
      title: "Web tercero",
      text: "Sit architecto excepturi aut maiores.",
      imgSrc: "https://via.placeholder.com/150", // Sustituir por el logo de Python
      buttonText: "Ir a la página",
      bgColor: "#f8f9fa",
    },
  ];

  return (
    <div
      className="container mt-5"
      style={{ backgroundColor: "#002050", color: "white", padding: "20px" }}
    >
      <h1 className="text-center mb-4">Carteles con React</h1>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Cartel {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
