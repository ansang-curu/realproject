import React, { useState, useEffect } from "react";
import "./wakeUp.css";

function WakeUp() {
  // 상태 관리: 기상 시간들을 저장할 배열
  const [wakeUpTimes, setWakeUpTimes] = useState([]);

  // 기상 시간을 기록하는 함수
  function recordWakeUpTime() {
    const now = new Date();
    const wakeUpTime = now.toISOString(); // 현재 시간을 ISO 형식으로 기록

    // 로컬 스토리지에서 기존에 저장된 기상 시간들을 불러오기
    const savedWakeUpTimes =
      JSON.parse(localStorage.getItem("wakeUpTimes")) || [];

    // 새로운 기상 시간을 배열에 추가
    savedWakeUpTimes.push(wakeUpTime);

    // 로컬 스토리지에 갱신된 기상 시간 배열 저장
    localStorage.setItem("wakeUpTimes", JSON.stringify(savedWakeUpTimes));

    // 상태 업데이트: 기상 시간 리스트를 최신화
    setWakeUpTimes(savedWakeUpTimes);
  }

  // 페이지 로드 시 로컬 스토리지에서 기록된 기상 시간들을 불러오기
  useEffect(() => {
    const savedWakeUpTimes =
      JSON.parse(localStorage.getItem("wakeUpTimes")) || [];
    setWakeUpTimes(savedWakeUpTimes);
  }, []); // 빈 배열을 넣어서 처음 로드 시 한 번만 실행

  return (
    <div>
      <div className="widget-container">
        <h2>기상 시간 기록</h2>

        {/* 기상 시간을 기록하는 버튼 */}
        <button onClick={recordWakeUpTime}>기상 시간 기록</button>

        {/* 기록된 기상 시간들을 표시 */}
        <h3>기록된 기상 시간들:</h3>
        <ul>
          {wakeUpTimes.length > 0 ? (
            wakeUpTimes.map((time, index) => (
              <li key={index}>기상 시간: {time}</li>
            ))
          ) : (
            <li>기록된 기상 시간이 없습니다.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default WakeUp;
