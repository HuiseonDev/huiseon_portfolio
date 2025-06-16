/** @jsxImportSource @emotion/react */
import Profile from "@/components/Profile/Profile";
import VideoClip from "@/components/videoClip/VideoClip";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <MainContentsStyle>
      <p css={subTitleStyle}>●&nbsp;&nbsp;&nbsp;안녕하세요! 👋</p>
      <VideoClip />
      <Profile />
    </MainContentsStyle>
  );
};

export default Home;

const MainContentsStyle = styled.div`
  height: 2000px;
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
