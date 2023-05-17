import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div style={{ backgroundColor: "#193718", overflow: "auto" }}>
            <Navbar />

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "88vh",
                    overflow: "auto",
                }}
            >
                <div
                    className="buttons"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "40px",
                            color: "#ff8bff",
                            fontFamily: "Montserrat, sans-serif",
                            marginTop: "50px",
                        }}
                    >
                        About Codex - Coding AI
                    </h1>
                    <p
                        style={{
                            fontSize: "20px",
                            color: "#ff8bff",
                            maxWidth: "700px",
                            lineHeight: "1.5",
                            marginTop: "20px",
                            marginBottom: "40px",
                            fontFamily: "Roboto, sans-serif",
                            textAlign: "justify",
                        }}
                    >

                        Welcome to Codex! We are a team of passionate developers and artificial intelligence enthusiasts who believe that technology can change the world. Our mission is to empower coders of all levels to create more efficiently and effectively with the help of our AI-powered coding assistant.

                        At Codex, we believe that everyone should have access to the tools they need to turn their ideas into reality. That's why we've built a platform that makes coding more intuitive and accessible than ever before. With our chat-based interface and state-of-the-art language models, you can write code faster and more accurately than ever before.

                        Whether you're a seasoned developer or just starting out, we're here to help you take your coding skills to the next level. Join us on our mission to democratize programming and create a better future for all.
                    </p>
                </div>
            </div>
        </div>
    );
}
