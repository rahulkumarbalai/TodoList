import React from "react";
import {
  Container,
  Checkbox,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 16,
          textAlign: 'center',
        },
      },
    },
  },
});

function TasksList({ todoList, setTitle, setItem, setEdit, deleteItem }) {

  const handleEdit = (item) => {
    setTitle(item.value);
    setEdit();
    setItem(item);
  };

  const handleDelete = (item) => {
    setItem(item);
    deleteItem();
  };
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        {!todoList.length ? (
          <Typography variant="h6" color="error">
            No Data to display
          </Typography>
        ) : (
          <List>
            {todoList.map((item) => {
              return (
                <ListItem key={item.id} button>
                  <ListItemIcon>
                  <Checkbox color="secondary" />
                  </ListItemIcon>

                  <ListItemText primary={item.value} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => handleEdit(item)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(item)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        )}
      </Container>
    </ThemeProvider>
  );
}
const mapStateToProps = (state) => {
  return {
    todoList: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(actionTypes.setTitle(title)),
    setItem: (item) => dispatch(actionTypes.setItem(item)),
    deleteItem: (item) => dispatch(actionTypes.deleteItem(item)),
    setEdit: () => dispatch(actionTypes.setEdit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
