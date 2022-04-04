import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import "../sass/style.scss";
import signin from "../images/young-woman.png";
import { Grid } from "@mui/material/";
import { Form } from "react-bootstrap";

const RegistrerPage = () => {
  // ===================== Block 0 - Variables de estado =============================

  const [dialogVisible, setDialogVisible] = useState(true);
  const [userDataRegistrer, setUserDataRegistrer] = useState([]);

  // =================================================================================

  // ===================== Block 1 - Metodos y Funciones =============================

  const handleChange = (e) => {
    setUserDataRegistrer({
      ...userDataRegistrer,
      [e.target.name]: e.target.value,
    });
  };

  const handleCickOpen = () => {
    setDialogVisible(!dialogVisible);
  };

  // =================================================================================

  return (
    <>
      <Dialog className="dialogLogin" open={false} onClose={handleCickOpen}>
        <Grid container>
          <Card className="dialogLogin" sx={{ maxWidth: 372 }}>
            {/*<div>
            <p className="headLogin"> Sign in </p>
  </div>*/}
            <CardMedia
              className="headLogin"
              component="img"
              alt="Sing In"
              image={signin}
            />
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
                    id="userName"
                    label="User"
                    type="email"
                    defaultValue=""
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Password"
                    defaultValue=""
                    type="password"
                    onChange={handleChange}
                  />

                  <Button
                    className="container "
                    id="buttonLog"
                    variant="contained"
                    onClick={() => {}}
                  >
                    Login
                  </Button>
                </Grid>

                <a href="/" style={{ float: "right", fontSize: "13px" }}>
                  Se te olvidó la contraseña?
                </a>
              </Box>
            </CardContent>
            <CardActions>
              <Button onClick={handleCickOpen}>Cancel</Button>
              <Button onClick={handleCickOpen}>Subscribe</Button>
            </CardActions>
          </Card>
        </Grid>
      </Dialog>
    </>
  );
};

export default RegistrerPage;
