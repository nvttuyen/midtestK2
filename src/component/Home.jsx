import React from "react";
import "./Style.css";
import Chatmes from "./Chatmes";
import Chatinput from "./Chatinput";

export const data = [
  {
    id: 1,
    avatar:
      "https://media.istockphoto.com/id/517188688/vi/anh/phong-c%E1%BA%A3nh-n%C3%BAi-non.jpg?s=612x612&w=0&k=20&c=WWWaejSo6EWGZMZSK7QK6LCfwd0rL2KB3ImCX2VkW4A=",
    name: "John",
    message: "cool",
    settime: "2024-02-15T12:30:00",
  },
  {
    id: 2,
    avatar:
      "https://media.istockphoto.com/id/517188688/vi/anh/phong-c%E1%BA%A3nh-n%C3%BAi-non.jpg?s=612x612&w=0&k=20&c=WWWaejSo6EWGZMZSK7QK6LCfwd0rL2KB3ImCX2VkW4A=",
    name: "Lyzz",
    message: "I will come at 9",
    settime: "2024-02-17T9:5:00",
  },
  {
    id: 3,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNjRF1Nz3zctGX91PsZdfuywd3qDz0YrVTA&usqp=CAUavatar2.jpg",
    name: "Kang",
    message: "Gud night",
    settime: "Now",
  },
  {
    id: 4,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugfbTqrZ3nMYcHmroA_tXoqLCGD9H_FFFxg&usqp=CAU",
    name: "Lee",
    message: "bye",
    settime: "2024-02-17T17:45:00",
  },
];

export default function Home() {
  const renderData = data.map((item) => {
    return (
      <div key={item.id} className="userchat">
        <img src={item.avatar} alt={item.name} />
        <div className="userInfo">
          <h2>{item.name}</h2>
          <p>{item.message}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="home">
      <div className="container">
        <div className="sidebar">
          <div className="search">
            <div className="searchForm">
              <input type="text" placeholder="find your contact" />
            </div>
          </div>
          <div className="chats">{renderData}</div>
        </div>

        <div className="chat">
          <div className="chatInfo">
            <div className="chatIcon"></div>
            <Chatmes />
            <Chatinput />
          </div>
        </div>
      </div>
    </div>
  );
}
