// Board.js
import React, { useState } from "react";
import "./board.css";

const Board = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "React로 게시판 만들기",
      author: "John Doe",
      date: "2025-01-07",
      content: "리액트로 간단한 게시판을 만들어 봅시다!",
    },
    {
      id: 2,
      title: "CSS 디자인 기본",
      author: "Jane Smith",
      date: "2025-01-06",
      content: "웹 디자인을 위한 기본적인 CSS 기법을 알아보자.",
    },
    // 추가 게시글들...
  ]);

  return (
    <div className="board-container">
      <h1 className="board-title">게시판</h1>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-meta">
              <span className="post-author">작성자: {post.author}</span>
              <span className="post-date">작성일: {post.date}</span>
            </div>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>
      <button className="new-post-btn">새 게시글 작성</button>
    </div>
  );
};

export default Board;
