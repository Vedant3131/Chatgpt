import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ChatGPt 2.0.gif";

export default function Navbar() {
    return (
        <nav
            style={{
                backgroundColor: "#FFFFFF",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                height: "12vh",
                justifyContent: "space-between",
            }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
                <img
                    src={logo}
                    alt="App logo"
                    style={{ height: "65px", width: "90px", marginRight: "20px", marginLeft: "10px" }}
                />
                <h1 style={{ margin: "0", fontSize: "35px", color: "#ff8bff" }}>Codex - Coding AI</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="/" style={{ marginRight: "20px" }}>
                    Home
                </Link>
                <Link to="/about" style={{ marginRight: "20px" }}>
                    About
                </Link>
            </div>
        </nav>
    );
}
