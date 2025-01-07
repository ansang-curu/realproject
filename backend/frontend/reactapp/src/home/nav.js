import { useState } from "react";
import SignUp from "../sign/signUp";
import Board from "../board/board";
import Chat from "../chat/chat";
import WakeUp from "./wakeUp";

function Home() {
  // 상태 관리: 현재 활성화된 탭
  const [activeTab, setActiveTab] = useState("home");

  // 탭 클릭 시 활성화된 탭을 변경하는 함수
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* 네비게이션 탭 */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "home" ? "active" : ""}`}
            id="home-tab"
            type="button"
            onClick={() => handleTabClick("home")}
            role="tab"
            aria-controls="home"
            aria-selected={activeTab === "home"}
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
            id="profile-tab"
            type="button"
            onClick={() => handleTabClick("profile")}
            role="tab"
            aria-controls="profile"
            aria-selected={activeTab === "profile"}
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
            id="contact-tab"
            type="button"
            onClick={() => handleTabClick("contact")}
            role="tab"
            aria-controls="contact"
            aria-selected={activeTab === "contact"}
          >
            Contact
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "wake" ? "active" : ""}`}
            id="wake-tab"
            type="button"
            onClick={() => handleTabClick("wake")}
            role="tab"
            aria-controls="wake"
            aria-selected={activeTab === "wake"}
          >
            Wake
          </button>
        </li>
      </ul>

      {/* 탭 콘텐츠 */}
      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade ${
            activeTab === "home" ? "show active" : ""
          }`}
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Board></Board>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "profile" ? "show active" : ""
          }`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <SignUp></SignUp>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "contact" ? "show active" : ""
          }`}
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <Chat></Chat>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "wake" ? "show active" : ""
          }`}
          id="wake"
          role="tabpanel"
          aria-labelledby="wake-tab"
        >
          <WakeUp></WakeUp>
        </div>
      </div>
    </div>
  );
}

export default Home;
