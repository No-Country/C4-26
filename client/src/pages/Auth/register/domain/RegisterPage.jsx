import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../../login/sass/style.scss";
import { countrys } from "../infrastructure/_countries";

import imgPerfilM from "../../../../assets/img/naranja1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
  // ===================== Block 0 - Variables de estado =============================

  const [userDataregister, setUserDataregister] = useState([]);

  // ===================== Block 1 - Variables y constantes ==========================

  // =================================================================================

  // ===================== Block 2 - Metodos y Funciones =============================

  const handleChange = (e) => {
    setUserDataregister({
      ...userDataregister,
      [e.target.name]: e.target.value,
    });
  };

  const handleImg = () => {
    console.log("Cargar img");
  };

  const handleRegister = () => {
    console.log(userDataregister);
  };

  useEffect(() => {}, []);

  // =================================================================================

  return (
    <>
      <div className="register-wrapper">
        <div className="register-box">
          <div className="register-content">
            <h1 className="register-title-jobs text-center">JobsMarket</h1>
          </div>

          <div className="register-content img-perfil">
            <img
              onClick={handleImg}
              className="reg-img"
              src={imgPerfilM}
              alt="Img-Perfil"
            />
          </div>

          <div className="register-content">
            <h1 className="register-title">Registrarme</h1>
          </div>
          <div className="content-hr center">
            <div className="separator">
              <hr />
              <span className="next-login">
                <div className="icon-reg">
                  <FontAwesomeIcon className="icon-reg" icon={faUserPlus} />
                </div>
              </span>
              <hr />
            </div>
          </div>

          <form className="">
            <div className="content-hr center">
              <label className="name-input">Nombre Completo</label>
              <input
                type="text"
                name="full-name"
                placeholder="Nombre Completo"
                className="form-control-reg reg-input-field center"
                autoComplete="off"
                onChange={handleChange}
              />

              <label className="name-input">Número de contacto</label>
              <div className="numberPhone">
                <select
                  className="form-control-reg cod-input-field"
                  name="code-country"
                  placeholder="Código"
                  onChange={handleChange}
                >
                  <option>Codigo</option>
                  {countrys.map((country) => (
                    <option key={country.code} value={country.phone}>
                      {`${country.code}(+${country.phone})`}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="phone-num"
                  placeholder="Teléfono"
                  className="form-control-reg num-input-field"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>

              <label className="name-input">Perfil profesional</label>
              <input
                type="text"
                name="title-perfil"
                placeholder="Perfil profesional"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <label className="name-input">Correo electrónico</label>
              <input
                type="email"
                name="email"
                placeholder="ejemplo@ejemplo.com"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <label className="name-input">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <label className="name-input">Categoría</label>
              <select
                className="form-control-reg reg-input-field"
                name="category"
                placeholder="Codigo y Pais"
                onChange={handleChange}
              >
                <option>Seleccionar una categoria</option>
                <option value="teekers">Seekers</option>
                <option value="teamers">Teamers</option>
              </select>

              <label className="name-input">Pais de Residencia</label>
              <select
                className="form-control-reg reg-input-field"
                name="country"
                placeholder="Codigo y Pais"
                onChange={handleChange}
              >
                <option>Seleccionar país</option>
                {countrys.map((country) => (
                  <option key={country.code} value={country.label}>
                    {`${country.label} (+${country.phone})`}
                  </option>
                ))}
              </select>
            </div>
          </form>

          <div className="container-button">
            <Button
              size="lg"
              className="button-ctr mt-3 text-center btn btn-danger btn-block register-btn"
              onClick={handleRegister}
            >
              Registrarme
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
