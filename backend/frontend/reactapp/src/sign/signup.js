import "./signUp.css";

function SignUp() {
  return (
    <div>
      <form>
        <div class="form-row">
          <label for="username">아이디: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="아이디를 입력하세요"
          ></input>
        </div>
        <div class="form-row">
          <label for="password">비밀번호: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
          ></input>
        </div>
        <button type="submit">로그인</button>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUp;
