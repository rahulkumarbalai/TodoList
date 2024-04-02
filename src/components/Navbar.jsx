import React from "react";
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
              <Button color="inherit" sx={{ mr: 2 }}>
                <AddTaskIcon sx={{ mr: 1 }} />
                Add Task
              </Button>
              <Button color="inherit">
                <ListAltIcon sx={{ mr: 1 }} />
                View Tasks
              </Button>
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
          icon={<AddTaskIcon fontSize="medium" />}
        />
        <BottomNavigationAction
          label="View Task"
          icon={<AssignmentIcon fontSize="medium" />}
        />
      </BottomNavigation>
    </>
  );
};

export default Navbar;
