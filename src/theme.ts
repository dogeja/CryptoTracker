import { DefaultTheme } from "styled-components";

// ts로 변수 뒤에 자료형 정해주기
// 자료형은 d.ts파일에서 이전에 선언해줄것.
export const darkTheme: DefaultTheme = {
  textColor: "whitesmoke",
  bgColor: "#111",
  btnColor: "indigo",
};
export const lightTheme: DefaultTheme = {
  textColor: "#111",
  bgColor: "whitesmoke",
  btnColor: "tomato",
};
