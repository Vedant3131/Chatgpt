import React from "react";
import { logo } from "../assets/icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Auth() {
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
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginLeft: 0,
              marginTop: "30px",
            }}
          >
            <img
              src={`https://images.openai.com/blob/8d14e8f0-e267-4b8b-a9f2-a79120808f5a/chatgpt.jpg?trim=0%2C0%2C0%2C0`}
              alt="Logo"
              style={{
                width: "500px",
                height: "450px",
                marginRight: "150px",
                filter:
                  "brightness(80%) contrast(120%) drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
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
                Codex - Coding AI
              </h1>
              <p
                style={{
                  fontSize: "20px",
                  color: "#ff8bff",
                  maxWidth: "400px",
                  lineHeight: "1.5",
                  marginTop: "20px",
                  marginBottom: "40px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.


                Revolutionize the way you write code with Codex - the AI powered
                coding assistant. Try it now for free!
              </p>
              <div
                className="same_line"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#193718"
                }}
              >
                <Link
                  to="/login"
                  style={{
                    fontSize: "20px",
                    outline: "none",
                    border: "none",
                    backgroundColor: "#ff8bff",
                    color: "white",
                    padding: "12px 20px",
                    marginRight: "15px",
                    textDecoration: "none",
                    marginBottom: "20px",
                    borderRadius: "20px",
                    textAlign: "center",
                    height: "20px",
                    width: "150px",
                    fontWeight: "bold"
                  }}
                >
                  Get Started
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div style={{
        alignContent: "center",
        overflow: "auto",
        backgroundColor: "white",
        color: "black",
        padding: "20px",
        marginTop: "50px"
      }}>
        <p style={{
          fontSize: "20px",
          textAlign: "center",
          marginTop: "0",
          marginBottom: "20px",
          fontWeight: "20px"
        }}>
          We’ve trained a model called ChatGPT which interacts in a conversational way. However, it has some limitations:
        </p>
        <ul style={{
          paddingLeft: "20px",
          marginBottom: "0",
          marginTop: "0",
          marginLeft: "100px"
        }}>
          <li style={{ marginTop: "10px" }}>
            ChatGPT may not always provide accurate answers as it relies on the data it has been trained on, which may not be comprehensive or up-to-date.
          </li>
          <li style={{ marginTop: "10px" }}>
            ChatGPT may struggle with understanding the context or nuances of certain questions, leading to irrelevant or incorrect responses.
          </li>
          <li style={{ marginTop: "10px" }}>
            ChatGPT may not be able to handle complex or specialized technical queries that require deep domain knowledge.
          </li>
          <li style={{ marginTop: "10px" }}>
            ChatGPT may generate biased or inappropriate responses based on the biases present in its training data.
          </li>
        </ul>
      </div>
      <div style={{ height: "50px", backgroundColor: "white" }}></div>
      <div style={{ backgroundColor: "white" }}>
        <h2 style={{ color: "black", textAlign: "center" }}>Sample Working Of Codex</h2>
        <div style={{
          backgroundColor: "#4c4e52",
          border: "1px solid #ccc",
          overflow: "hidden",
          margin: "20px auto",
          width: "80%",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
        }}>
          <div style={{ padding: "20px" }}>
            <div style={{ marginBottom: "5px" }}>
              <div style={{ float: "left", backgroundColor: "black", color: "#fff", padding: "10px 20px", width: "90%" }}>
                Codex - Hello, how can I assist you today?
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div style={{ marginBottom: "5px" }}>
              <div style={{ float: "left", backgroundColor: "#3d3d3d", color: "#fff", padding: "10px 20px", width: "90%" }}>
                Human - I'm interested in learning more about Codex. What is it?
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div style={{ marginBottom: "5px" }}>
              <div style={{ float: "left", backgroundColor: "black", color: "#fff", padding: "10px 20px", width: "90%" }}>
                Codex - Codex is a large language model trained by OpenAI based on the GPT architecture. It can understand and generate human-like text, allowing it to engage in conversations with people on a wide range of topics.
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div style={{ marginBottom: "5px" }}>
              <div style={{ float: "left", backgroundColor: "#3d3d3d", color: "#fff", padding: "10px 20px", width: "90%" }}>
                Human - That's really interesting! How does Codex actually work?
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div style={{ marginBottom: "5px" }}>
              <div style={{ float: "left", backgroundColor: "black", color: "#fff", padding: "10px 20px", width: "90%", marginBottom: "25px" }}>
                Codex - Codex uses deep learning algorithms to analyze and understand natural language. It can process large amounts of text data and learn from it, allowing it to generate responses to new text inputs. When you ask a question or make a statement to ChatGPT, it uses its understanding of language and knowledge of the world to generate a response that it thinks best fits the context of the conversation.
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "30px" }}></div>
      </div>

    </div>
  );
}



