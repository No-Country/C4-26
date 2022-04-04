import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../sass/style.scss";
import signin from "../images/young-woman.png";
import iconGoogle from "../images/GoogleIcon.png";
import { Form } from "react-bootstrap";

const LoginPage = () => {
  // ===================== Block 0 - Variables de estado =============================

  const [userData, setUserData] = useState([]);

  // =================================================================================

  // ===================== Block 1 - Metodos y Funciones =============================

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // =================================================================================

  return (
    <>
      <div className="login-wrapper">
        <div className="image-box">
          <img src={signin} alt="img-backgroud" />
        </div>

        <div className="form-box">
          <div className="content">
            <h1 className="title text-center">JobsMarket</h1>
            <p className="subTitle text-center">
              El lugar donde desarrollar es una diversión
            </p>

            <div className="signup-link">
              Estas registrado?{" "}
              <a href="/" title="Registrarme ahora">
                Registrarme ahora
              </a>
            </div>

            <Form>
              <div className="form-group">
                <input
                  type="email"
                  name="userName"
                  placeholder="Ingrese el usuario"
                  className="form-control input-field"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="form-control input-field"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <div className="recover-pass">
                  <a
                    href="/"
                    className="pass-link"
                    title="Recuperar Contraseña"
                  >
                    Recuperar contraseña
                  </a>
                </div>
                <div className="d-grid gap-2">
                  <Button
                    size="lg"
                    className=" text-center btn btn-danger btn-block signin-btn"
                  >
                    Ingresar
                  </Button>
                </div>
              </div>
            </Form>

            <div className="separator">
              <hr />
              <span className="next-login">Registrarme con:</span>
              <hr />
            </div>

            <div className="icon-box">
              <span className="icon">
                <img src={iconGoogle} alt="Google" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
