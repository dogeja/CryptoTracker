import { DefaultTheme } from "styled-components";

// ts로 변수 뒤에 자료형 정해주기
// 자료형은 d.ts파일에서 이전에 선언해줄것.

export const darkTheme: DefaultTheme = {
  textColor: "#192a56",
  bgColor: "#353b48",
  accentColor: "#e1b12c",
  ListColor: "white",
};
export const lightTheme: DefaultTheme = {
  textColor: "black",
  bgColor: "whitesmoke",
  accentColor: "#192a56",
  ListColor: "#e1b12c",
};
