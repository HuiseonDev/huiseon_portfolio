/** @jsxImportSource @emotion/react */
import Profile from "@/components/Profile/Profile";
import VideoClip from "@/components/videoClip/VideoClip";
import { css } from "@emotion/react";

const Home = () => {
  return (
    <div css={test}>
      <p css={subTitleStyle}>●&nbsp;&nbsp;&nbsp;안녕하세요! 👋</p>
      <VideoClip />
      <Profile />
    </div>
  );
};

export default Home;

const test = css`
  height: 1000px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

const subTitleStyle = css`
  position: absolute;
  left: 8%;
  top: 0;
  width: 30rem;
  height: 4rem;
  padding-left: 3rem;
`;
