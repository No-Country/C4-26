import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { Grid } from "@mui/material/";
import { Form } from "react-bootstrap";
import "../../login/sass/style.scss";
import InputLabel from "@mui/material/InputLabel";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputForm from "../../../../components/Inputs/InputForm";

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
            <h1 className="register-title text-center">Create Account</h1>
            <p className="reg-subTitle text-center">
              Get starter with your free account
            </p>
          </div>
          <Form>
            {/*
            <FormControl className="form-control-reg">
              <InputForm
                classM="input-reg"
                idInput="fullName"
                labelInput="Nombre Completo"
                typeInput="text"
              />
              <InputLabel>Full Name</InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
              */}
            <div className="register-form-group">
              <input
                type="text"
                name="full-name"
                placeholder="Nombre Completo"
                className="form-control reg-input-field mt-3 me-3"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="number"
                name="phone-num"
                placeholder="Teléfono"
                className="form-control reg-input-field mt-3 me-3"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="text"
                name="title-perfil"
                placeholder="Perfil profesional"
                className="form-control reg-input-field mt-3"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Correo Electónico"
                className="form-control reg-input-field mt-3"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="form-control reg-input-field mt-3"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="text"
                name="category"
                placeholder="Categoria"
                className="form-control reg-input-field mt-3"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="text"
                name="code-country"
                placeholder="Codigo del Pais"
                className="form-control reg-input-field mt-3"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="text"
                name="country-name"
                placeholder="Pais de residencia"
                className="form-control reg-input-field mt-3"
                autoComplete="off"
                onChange={handleChange}
              />

              <input
                type="file"
                name="photo-perfil"
                placeholder="Agregha una foto del perfil"
                className="form-control reg-input-field mt-3"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>

            <div className="container-button">
              <Button
                size="lg"
                className="button-ctr mt-3 text-center btn btn-danger btn-block register-btn"
              >
                Registrarme
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <Dialog className="dialogLogin" open={false} onClose={handleCickOpen}>
        <Grid container>
          <Card className="dialogLogin" sx={{ maxWidth: 372 }}>
            {/*<div>
            <p className="headLogin"> Sign in </p>
  </div>*/}
            <CardMedia className="headLogin" component="img" alt="Sing In" />
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "34.5ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Grid className="container">
                  <TextField
                    required
                    autoFocus
                    id="full_name"
                    label="Nombre completo"
                    type="text"
                    defaultValue=""
                    variant="outlined"
                    onChange={handleChange}
                  />

                  <TextField
                    required
                    autoFocus
                    id="user_name"
                    label="User"
                    type="email"
                    defaultValue=""
                    variant="outlined"
                    onChange={handleChange}
                  />

                  <TextField
                    fullWidth
                    required
                    id="password"
                    label="Password"
                    defaultValue=""
                    type="password"
                    onChange={handleChange}
                  />

                  <TextField
                    fullWidth
                    required
                    id="title_profile"
                    label="Password"
                    defaultValue=""
                    type="password"
                    onChange={handleChange}
                  />

                  <TextField
                    fullWidth
                    required
                    id="profesional_profile_description"
                    label="Descripción - Perfil Profesional"
                    defaultValue=""
                    type="text"
                    onChange={handleChange}
                  />
                </Grid>
              </Box>
            </CardContent>
            <CardActions>
              <Button
                size="lg"
                className=" text-center btn btn-danger btn-block signin-btn"
                onClick={() => {}}
              >
                Registrar
              </Button>
              <Button onClick={handleCickOpen}>Subscribe</Button>
            </CardActions>
          </Card>
        </Grid>
      </Dialog>
    </>
  );
};

export default RegisterPage;
