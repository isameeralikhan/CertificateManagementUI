import { createContext, useEffect, useState, React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateUser from "./Components/CreateUser";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import CertificateCreation from "./Components/CertificateCreation";
import { isTokenExists } from "./Utils/token";
import DisplayCertificates from "./Components/DisplayCertificates";
import Renewal from "./Components/Renewal";
import { isRoleExists } from "./Utils/role";

export const store = createContext();
const App = () => {
  const [jwtToken, SetjwtToken] = useState("");

  const [role, Setrole] = useState("");

  useEffect(() => {
    const token = isTokenExists();
    //console.log(token);
    SetjwtToken(token);
    const role = isRoleExists();
    Setrole(role);
  }, []);

  return (
    <div className="App">
      <store.Provider value={[jwtToken, SetjwtToken, role, Setrole]}>
        <Navigation />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/createCertificate" element={<CertificateCreation />} />
          <Route
            path="/displayCertificates"
            element={<DisplayCertificates />}
          />
          <Route path="/Renewal/:id" element={<Renewal />} />
        </Routes>
      </store.Provider>
    </div>
  );
};

export default App;
