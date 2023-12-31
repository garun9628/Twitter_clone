import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TweetState from "./context/tweets/TweetState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserInfo from "./components/UserInfo";
import { useState } from "react";
import Explore from "./components/Explore";
import MyTweets from "./components/MyTweets";

const App = () => {
  const [alert, setAlert] = useState(null);
  const [info, setInfo] = useState({ name: "", email: "" });

  const showInfo = (name, email) => {
    setInfo({
      name: name,
      email: email,
    });
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <TweetState>
        <Router>
          <Navbar info={info} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home showAlert={showAlert} />}
              ></Route>
              <Route exact path="/explore" element={<Explore />}></Route>
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} showInfo={showInfo} />}
              ></Route>
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              ></Route>
              <Route exact path="/user-info" element={<UserInfo />}></Route>
              <Route
                exact
                path="/mytweets"
                element={<MyTweets showAlert={showAlert} />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </TweetState>
    </>
  );
};

export default App;
