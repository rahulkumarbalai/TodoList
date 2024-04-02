import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <AssignmentIcon
              size="large"
              edge="start"
              color="inherit"
              aria-label="todo"
              sx={{ mr: 1 }}
            ></AssignmentIcon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TodoList
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit" sx={{ mr: 2 }}>
                  <AddTaskIcon sx={{ mr: 1 }} />
                  Add Task
                </Button>
              </Link>
              <Link
                to="/TasksList"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">
                  <ListAltIcon sx={{ mr: 1 }} />
                  View Tasks
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <BottomNavigation
        showLabels
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { md: "none" },
        }}
      >
        <BottomNavigationAction
          label="Add Task"
          icon={
            <Link to="/">
              <AddTaskIcon fontSize="medium" />
            </Link>
          }
        />
        <BottomNavigationAction
          label="View Task"
          icon={
            <Link to="/TasksList">
              <AssignmentIcon fontSize="medium" />
            </Link>
          }
        />
      </BottomNavigation>
    </>
  );
};

export default Navbar;
