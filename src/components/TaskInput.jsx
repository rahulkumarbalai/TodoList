import React from "react";
import { TextField, Grid, Container, Button } from "@mui/material";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: "40px",
          marginBottom: "20px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: "10px",
          marginBottom: "10px",
        },
      },
    },
  },
});

const TaskInput = ({
  title,
  setTitle,
  addItem,
  editItem,
  edit,
  error,
  setError,
}) => {
  const handleChange = (event) => {
    const title = event.target.value;

    setTitle(title);
    if (title.length === 0) {
      setError("Please enter title");
    } else {
      setError("");
    }
  };

  const handleClick = () => {
    if (title.length === 0) {
      setError("Please enter title");
      return;
    }
    if (edit) {
      editItem();
    } else {
      addItem();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          marginRight="200px"
        >
          <Grid
            item
            md={12}
            sx={{
              mr: { xs: "20px" },
            }}
          >
            <TextField
              value={title}
              onChange={handleChange}
              error={!!error}
              helperText={error}
              id="outlined-basic"
              fullWidth
              label="Enter Title"
              multiline
              variant="outlined"
            />
          </Grid>
          <Grid item sx={{ width: "auto" }}>
            <Button variant="contained" color="primary" onClick={handleClick}>
              {edit ? "Edit" : "Add"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.title,
    edit: state.edit,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(actionTypes.setTitle(title)),
    setError: (error) => dispatch(actionTypes.setError(error)),
    addItem: () => dispatch(actionTypes.addItem()),
    editItem: () => dispatch(actionTypes.editItem()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);
