import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Cart from "./components/Card";
import Men from "./components/Man";
import Women from "./components/Women";
import Kids from "./components/Kids";
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./components/AdminRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/user.js/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

import AdminProducts from "./components/AdminProducts";
import Profile from "./components/Profile";
import './App.css'
// import { loaduser } from "./action/userActions";
// import store from "./store";
import AccountSettings from "./components/AccountSettings";
import ForgotPassword from "./components/ForgotPassword";
import ErrorPage from "./ErrorPage";
import BrandProducts from "./components/BrandProducts";


function App() {


  // useEffect(() => {
  // store.dispatch(loaduser())
  // }, [])
  
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
 

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/men" element={<Men />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          {<Login/> &&   <Route
            exact
            path="/profile/:activepage"
            element={< Profile />}
          /> }
          <Route path="/login" element={<Login  />} />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            exact
            path="/AdminLogin"
            element={<AdminLogin  />}
          />
          <Route
            exact
            path="/AdminRegister"
            element={<AdminRegister  />}
          />
           
           <Route
            exact
            path="/adminproduct"
            element={< AdminProducts />}
          />
           <Route
            exact
            path="/profile:accountsettings"
            element={< AccountSettings />}
          />
            <Route
            exact
            path="/forgotpassword"
            element={<ForgotPassword/>}
          />
          <Route
            exact
            path="*"
            element={<ErrorPage/>}
          />
           <Route
            exact
            path=""
            element={<BrandProducts/>}
          />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
