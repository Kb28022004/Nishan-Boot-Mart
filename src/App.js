import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Cart from "./components/Card";
import Men from "./components/Man";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Alerts from "./components/Alerts";
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./components/AdminRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Alerts alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/men" element={<Men />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
          <Route
            path="/register"
            element={<Register showAlert={showAlert} />}
          />
          <Route
            exact
            path="/AdminLogin"
            element={<AdminLogin showAlert={showAlert} />}
          />
          <Route
            exact
            path="/AdminRegister"
            element={<AdminRegister showAlert={showAlert} />}
          />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
