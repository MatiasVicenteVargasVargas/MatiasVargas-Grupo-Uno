import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col text-left">
            <ul className="list-unstyled"></ul>
          </div>
          <div className="col text-center"></div>
        </div>
        <hr />
        <div className="row">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Tienda Outlet |
            <a href="#" className="link">
              {" "}
              Política de Privacidad
            </a>{" "}
            |
            <a href="#" className="link">
              {" "}
              Política de cookies
            </a>{" "}
            |
            <a href="#" className="link">
              {" "}
              Aviso Legal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
