import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { AppContext } from "./lib/contextLib";
import Links from "./Routes";
import './App.css';
import {NameTag} from './components/About/Nametag';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  const nav = useNavigate();
  const [isLoggedIn, userHasLoggedIn] = useState(false);

  function handleLogout() {
    userHasLoggedIn(false);
    nav('/login');
  }

  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" className="mb-3">
          <Navbar.Brand href="/" className="font-weight-bold">
            <NameTag/>
          </Navbar.Brand>
        <Navbar.Toggle />
        {
        isLoggedIn ? (
          <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
              <Nav.Link href="/teamFormPage">Create A Team</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav> 
          </Navbar.Collapse>
          ) : (
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
              <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        )}
      </Navbar>
      <ErrorBoundary>
        <AppContext.Provider value={{ isLoggedIn, userHasLoggedIn }}>
          <Links />
        </AppContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
