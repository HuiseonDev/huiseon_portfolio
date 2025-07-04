/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Wish = () => {
  return <div css={developStyle}>개발 진행중입니다!</div>;
};

export default Wish;

const developStyle = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
