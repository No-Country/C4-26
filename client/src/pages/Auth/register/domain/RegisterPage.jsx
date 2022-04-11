import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../../login/sass/style.scss";

import imgPerfilM from "../../../../assets/img/naranja1.png";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
  // ===================== Block 0 - Variables de estado =============================

  const [dialogVisible, setDialogVisible] = useState(true);
  const [userDataregister, setUserDataregister] = useState([]);

  // =================================================================================

  // ===================== Block 1 - Metodos y Funciones =============================

  const handleChange = (e) => {
    setUserDataregister({
      ...userDataregister,
      [e.target.name]: e.target.value,
    });
  };

  const handleCickOpen = () => {
    setDialogVisible(!dialogVisible);
  };

  // =================================================================================

  return (
    <>
      <div className="register-wrapper">
        <div className="register-box">
          <div className="register-content">
            <h1 className="register-title-jobs text-center">JobsMarket</h1>
          </div>

          <div className="register-content img-perfil">
            <img className="reg-img" src={imgPerfilM} alt="Img-Perfil" />
          </div>

          <div className="register-content">
            <h1 className="register-title">Registrarme</h1>
          </div>
          <div className="content-hr center">
            <div className="separator">
              <hr />
              <span className="next-login">
                <div className="icon-reg">
                  {/*<FontAwesomeIcon className="icon-reg" icon={faUserPlus} />*/}
                </div>
              </span>
              <hr />
            </div>
          </div>

          <form className="">
            <div className="content-hr center">
              <input
                type="text"
                name="full-name"
                placeholder="Nombre Completo"
                className="form-control-reg reg-input-field center"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="number"
                name="phone-num"
                placeholder="Teléfono"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="text"
                name="title-perfil"
                placeholder="Perfil profesional"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Correo Electónico"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="text"
                name="category"
                placeholder="Categoria"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="text"
                name="code-country"
                placeholder="Codigo del País"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="text"
                name="country-name"
                placeholder="País de Residencia"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="file"
                name="photo-perfil"
                placeholder="Agregha una foto del perfil"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </form>

          <div className="container-button">
            <Button
              size="lg"
              className="button-ctr mt-3 text-center btn btn-danger btn-block register-btn"
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
