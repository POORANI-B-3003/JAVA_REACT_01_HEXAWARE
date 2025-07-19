// src/Post.js
import React from "react";
import "./App.css"; // Optional for styling

// Destructuring props: id, title, body
const Post = ({ id, title, body }) => {
  return (
    <div className="cont">
      <h2>{id}. {title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
