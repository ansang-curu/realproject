// server.js
const express = require("express");
const app = express();
const path = require("path");
const port = 5000; // 서버가 실행될 포트 번호

// 기본 라우팅 설정

app.use(express.static(path.join(__dirname, "frontend/reactapp/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/reactapp/build/index.html")); // 기본 루트 경로에 접근하면 "Hello, World!" 응답
});

app.get("/test", (req, res) => {
  res.send("어 테스트성공 즉시반영됨");
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend/reactapp/build/index.html"));
// });

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
