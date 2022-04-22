import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../../login/sass/style.scss";
import { countrys } from "../infrastructure/_countries";
import imgPerfilM from "../../../../assets/img/naranja1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
  // ===================== Block 0 - Variables de estado =============================
  let urlImage = "https://i.ibb.co/Dz63LdG/naranja1.png";
  const [userDataregister, setUserDataregister] = useState([]);
  const [srcImg, setSrcImg] = useState(urlImage);

  // ===================== Block 1 - Variables y constantes ==========================

  // =================================================================================

  // ===================== Block 2 - Metodos y Funciones =============================

  const handleChange = (e) => {
    setUserDataregister({
      ...userDataregister,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpLoadImg = (e) => {
    const fileImg = new FileReader();
    fileImg.onload = () => {
      if (fileImg.readyState === 2) {
        setSrcImg(fileImg.result);
      }
    };
    fileImg.readAsDataURL(e.target.files[0]);
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
            <div className="box-file" role="button" tabIndex="0">
              <input
                id="add-photo"
                type="file"
                accept="image/*"
                name="image[]"
                style={{ display: "none" }}
                onChange={handleUpLoadImg}
              />
              <label htmlFor="add-photo">
                <FontAwesomeIcon
                  className="img-edit-reg"
                  icon={faPenToSquare}
                />
              </label>
            </div>
            <img className="reg-img" src={srcImg} alt="Img-Perfil" />
          </div>

          <div className="register-content">
            <h1 className="register-title">Register</h1>
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
              <label className="name-input">Full Name</label>
              <input
                type="text"
                name="full-name"
                placeholder="Full Name"
                className="form-control-reg reg-input-field center"
                autoComplete="off"
                onChange={handleChange}
              />

              <label className="name-input">Number Phone</label>
              <div className="numberPhone">
                <select
                  className="form-control-reg cod-input-field"
                  name="code-country"
                  placeholder="Código"
                  onChange={handleChange}
                >
                  <option>Code</option>
                  {countrys.map((country) => (
                    <option key={country.code} value={country.phone}>
                      {`${country.code}(+${country.phone})`}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="phone-num"
                  placeholder="Phone"
                  className="form-control-reg num-input-field"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>

              <label className="name-input">Title Perfil</label>
              <input
                type="text"
                name="title-perfil"
                placeholder="Title Perfil"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <label className="name-input">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="ejemplo@ejemplo.com"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <label className="name-input">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control-reg reg-input-field"
                autoComplete="off"
                onChange={handleChange}
              />

              <label className="name-input">Category</label>
              <select
                className="form-control-reg reg-input-field"
                name="category"
                placeholder="Code and Country"
                onChange={handleChange}
              >
                <option>Select a category</option>
                <option value="teekers">Seekers</option>
                <option value="teamers">Teamers</option>
              </select>

              <label className="name-input">Country</label>
              <select
                className="form-control-reg reg-input-field"
                name="country"
                placeholder="Code and Country"
                onChange={handleChange}
              >
                <option>Select a Country</option>
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
              /*onClick={handleRegister}*/
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
