
import { API } from "../lib/api";
const LOGIN = "login/LOGIN";
const LOGOUT = "login/LOGOUT";

export const loginMember = (id,pw) => ({ type: LOGIN , id: id, pw:pw });
export const decrement = () => ({ type: LOGOUT });

const initialState = {
  pk: 0,
  user_id: "",
  name: "",
  nick_name:"",
  tel: "",
  add: [],
  temper: 36.5,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      let user;
      fetch(`${API}/member/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_id: action.id,
          user_pw: action.pw,
        }),
      }).then(async (response) => {
        if (response.status === 200) {
          alert("정상 로그인 되었습니다");
          user = await response.json();
        } else {
          alert("응, 틀렸어~");
        }
      });
      return {...user};
    case LOGOUT:
      return {...state};
    default:
      return state;
  }
};

export default login;
