import React from "react";
import "../Styles/DataCollect.css";
import { useState } from "react";
import axios from "axios";
import logoImg from "./logo.jpeg";

function DataCollect() {
  //All Form inputs
  const [userdata, setData] = useState({
    email: "",
    queTitle: "",
    queTopic: "",
    queLink: "",
    queCategory: "",
  });

  //handling onchange of inputBox
  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...userdata, [name]: value });
  };

  //handling onclick of submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, queTitle, queTopic, queLink, queCategory } = userdata;
      //"" : url goes here
      const res = await axios.post("", {
        email: email,
        queTitle: queTitle,
        queTopic: queTopic,
        queLink: queLink,
        queCategory: queCategory,
      });
      console.log(res.userdata);
    } catch (error) {
      console.log(error.response);
    }

    //set all fields to empty after onclick of submit
    setData({
      email: "",
      queTitle: "",
      queTopic: "",
      queLink: "",
      queCategory: "",
    });
  };

  return (
    <div className="container">
      <img src={logoImg} alt="LogoHere" className="logo" />
      <h2 className="heading">CWC Question Bank</h2>
      <form method="POST">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Email : </span>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={userdata.email}
              onChange={handleData}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Question Title :</span>
            <input
              type="text"
              placeholder="Enter Question Title"
              name="queTitle"
              value={userdata.queTitle}
              onChange={handleData}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Topic :</span>
            <input
              type="text"
              placeholder="Enter Topic"
              name="queTopic"
              value={userdata.queTopic}
              onChange={handleData}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Question Link :</span>
            <input
              type="text"
              placeholder="Link of question"
              name="queLink"
              value={userdata.queLink}
              onChange={handleData}
              required
            />
          </div>
          <div className="input-box">
            <span className="details2">Difficulty Level : </span>
            <div className="radio-group">
              <input
                type="radio"
                id="option-one"
                name="queCategory"
                value="Hard"
                onChange={handleData}
              />
              <label for="option-one">Hard</label>
              <input
                type="radio"
                id="option-two"
                name="queCategory"
                value="Medium"
                onChange={handleData}
              />
              <label for="option-two">Medium</label>
              <input
                type="radio"
                id="option-three"
                name="queCategory"
                value="Easy"
                onChange={handleData}
              />
              <label for="option-three">Easy</label>
            </div>
          </div>

          <div className="input-box2">
            <input
              type="submit"
              value="Submit"
              name="sendData"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default DataCollect;
