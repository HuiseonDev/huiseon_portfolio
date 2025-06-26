/** @jsxImportSource @emotion/react */
import Profile from "@/components/Profile/Profile";
import ScrollAnimater from "@/components/ScrollAnimater/ScrollAnimater";
import VideoClip from "@/components/videoClip/VideoClip";
import { breakPoints, mqMax } from "@/styles/BreakPoint";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <MainContentsStyle>
      <p css={subTitleStyle}>●&nbsp;&nbsp;&nbsp;안녕하세요! 👋</p>
      <VideoClip />
      <Profile />
      <ScrollAnimater />
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

  ${mqMax(breakPoints.pc)} {
    left: -2rem;
  }
`;
