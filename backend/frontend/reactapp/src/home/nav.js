import { useState } from "react";

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
          Home Content
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "profile" ? "show active" : ""
          }`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          Profile Content
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "contact" ? "show active" : ""
          }`}
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          Contact Content
        </div>
      </div>
    </div>
  );
}

export default Home;
