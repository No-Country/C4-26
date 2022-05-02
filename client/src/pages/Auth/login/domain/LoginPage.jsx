import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../sass/style.scss";
import signin from "../../../../assets/img/login/young-woman.png";
import iconGoogle from "../../../../assets/img/login/GoogleIcon.png";
//import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
              <Link to="/register" title="Registrarme ahora">
                Registrarme ahora
              </Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="email"
                  name="userName"
                  placeholder="Correo electrónico"
                  className="form-control input-field"
                  autoComplete="off"
                  onChange={handleChange}
                  {...register("userName", {
                    required: {
                      value: true,
                      message: "* El campo del correo es requerido",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "* El formato del correo no es el correcto",
                    },
                  })}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="form-control input-field"
                  autoComplete="off"
                  onChange={handleChange}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "* El campo de contraseña es requerido",
                    },
                    minLength: {
                      value: 6,
                      message:
                        "* La contraseña debe contener al menos 6 caracteres",
                    },
                  })}
                />
                {errors.userName && (
                  <span className="errorMessage">
                    {errors.userName.message}
                  </span>
                )}
                {errors.password && (
                  <span className="errorMessage">
                    {errors.password.message}
                  </span>
                )}
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
                    type="submit"
                    value="submit"
                    size="lg"
                    className="text-center btn btn-danger btn-block signin-btn"
                    onSubmit={onSubmit}
                  >
                    Ingresar
                  </Button>
                </div>
              </div>
            </form>

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
