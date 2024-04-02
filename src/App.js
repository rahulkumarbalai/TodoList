import { Provider } from "react-redux";
import reducer from "./store/reducers/index";
import { createStore } from "redux";
import Navbar from "./components/Navbar";
import TaskInput from "./components/TaskInput";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TasksList from "./components/TasksList";

function App() {
  const store = createStore(reducer);
  return (
    <Router>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<TaskInput />} />
        </Routes>
        <TasksList />
      </Provider>
    </Router>
  );
}

export default App;
