/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../Button/Button";
import variables from "@/styles/Variables";
import { TypoBodyMdB } from "@/styles/Common";
import { breakPoints, mqMax } from "@/styles/BreakPoint";

const Profile = () => {
  return (
    <>
      <p css={subTitleStyle}>●&nbsp;&nbsp;&nbsp; Who am I ?</p>
      <div css={contentsWrapper}>
        <section css={leftContentWrapper}>
          <span>
            디자인 전공의 통찰력으로 문제를 정의하고
            <br />
            개발로 실행 가능한 해답을 만듭니다.
          </span>
          <h2>
            두 영역을 유기적으로 연결하는, 프론트엔드 개발자 전희선입니다.
          </h2>
        </section>
        <span css={rightContentWrapper}>
          UI/UX 에 대한 깊은 이해를 바탕으로 사용자 중심의 사고를 개발에
          녹여내면서, 실제 사용성 테스트를 통해 프로젝트를 계속해서
          개선해왔습니다. 이처럼 디자인과 개발을 동시에 이해할 수 있다는 점이
          저만의 강점이라고 생각하며 사용자 니즈를 반영한 인터랙티브한 웹 경험을
          만드는 데 흥미를 가지고 꾸준히 성장하고 있습니다. 또한 컴포넌트
          설계부터 유지보수까지 신경 쓰며 반응형 웹과 웹 접근성을 고려한 UI
          개발에도 집중하고 있습니다. 다양한 환경에서 누구나 편리하게 사용할 수
          있는 웹 서비스를 만드는 것이 제 목표입니다.
        </span>
      </div>
      <Button
        buttonText={"github"}
        fixCirclePosition={{
          top: "0",
          right: "3.2rem",
        }}
        movCirclePosition={{
          top: "0",
          right: "0",
        }}
      />
    </>
  );
};

export default Profile;

const contentsWrapper = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${variables.colors.gray500};
  padding-bottom: 6rem;
  margin: 2rem 0 3rem 0;

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
