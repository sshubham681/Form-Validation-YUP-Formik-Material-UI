import React from "react";
import { Button, Grid, Paper, TextField, Link } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: "35vw",
    margin: "150px auto",
    borderRadius: "10px",
  };
  const btnStyle = {
    padding: "2vh 3vw",
    width: "10vw",
  };
  const inputStyle = {
    marginTop: "2vh",
  };
  const lowerGridStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2vh",
  };
  const upperGridStyle = {
    height: 100,
    margin: 0,
    backgroundColor: "#5780d9",
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("please enter valid email").required("Required"),
    password: Yup.string().min(6).required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    props.resetForm();
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid style={upperGridStyle}></Grid>
        <h2>Login</h2>
        <p>Use your credentials to login below.</p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                id="outlined-basic"
                label="Email"
                name="email"
                placeholder="Enter email"
                variant="outlined"
                type="email"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
                style={inputStyle}
              />
              <Field
                as={TextField}
                id="outlined-basic"
                label="Password"
                name="password"
                placeholder="enter password"
                type="password"
                variant="outlined"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
                style={inputStyle}
              />
              <Grid style={lowerGridStyle}>
                <Link href="#" underline="none" style={{ color: "black" }}>
                  Forgot Password?
                </Link>

                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnStyle}
                >
                  Login
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
        <form></form>
      </Paper>
    </Grid>
  );
};

export default Login;
