/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Portfolio = () => {
  return <div css={developStyle}>개발 진행중입니다!</div>;
};

export default Portfolio;

const developStyle = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
