/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import variables from "@/styles/Variables";
import { TypoBodyMdB } from "@/styles/Common";
import { breakPoints, mqMax } from "@/styles/BreakPoint";
import { useMediaQuery } from "react-responsive";
import { profile } from "@/data/profile";
import MotionButton from "../Button/MotionButton";

const Profile = () => {
  const isMo = useMediaQuery({ maxWidth: breakPoints.moMax });

  const handleClick = () => {
    if (isMo) {
      setTimeout(() => {
        window.open("https://github.com/huiseonDev", "_blank");
      }, 400);
    } else {
      window.open("https://github.com/huiseonDev", "_blank");
    }
  };
  return (
    <div css={profileWrapperStyle}>
      <p css={subTitleStyle}>●&nbsp;&nbsp;&nbsp; Who am I ?</p>
      <div css={contentsWrapper}>
        <section css={leftContentWrapper}>
          <span>
            {profile.subTitleTop}
            <br />
            {profile.subTitleBottom}
          </span>
          <h2>{profile.title}</h2>
        </section>
        <span css={rightContentWrapper}>{profile.description}</span>
      </div>
      <MotionButton
        buttonText={"github"}
        handleClick={handleClick}
        fixCirclePosition={{
          top: "0",
          right: "7rem",
        }}
        movCirclePosition={{
          top: "0",
          right: "0rem",
        }}
        fix={false}
      />
    </div>
  );
};

export default Profile;

const profileWrapperStyle = css`
  padding-bottom: 20rem;

  ${mqMax(breakPoints.pc)} {
    padding-bottom: 10rem;
  }
`;

const contentsWrapper = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${variables.colors.gray500};
  padding-bottom: 6rem;
  margin: 2rem 0 2rem 0;

  ${mqMax(breakPoints.pc)} {
    flex-direction: column;
  }
`;

const leftContentWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    ${TypoBodyMdB}

    ${mqMax(breakPoints.pc)} {
      font-weight: 700;
    }
  }
`;

const rightContentWrapper = css`
  max-width: 66rem;
  color: ${variables.colors.gray900};
  padding-top: 7rem;
  line-height: 2.3rem;

  ${mqMax(breakPoints.pc)} {
    padding-top: 4rem;
  }
`;

const subTitleStyle = css`
  width: 30rem;
  height: 4rem;
  margin-top: 12rem;
`;
