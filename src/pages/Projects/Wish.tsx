/** @jsxImportSource @emotion/react */

import Button from "@/components/Button/Button";
import IssueComponent from "@/components/Issues/IssueComponent";
import ProjectMain from "@/components/ProjectItem/ProjectMain";
import WishService from "@/components/ProjectItem/WishService";
import LineTag from "@/components/Tag/LineTag";
import { IssuesWish } from "@/data/issues";
import { projects } from "@/data/projects";
import { breakPoints } from "@/styles/BreakPoint";
import { DividerStyle, TypoTitleSmS } from "@/styles/Common";
import variables from "@/styles/Variables";
import { css } from "@emotion/react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const Wish = () => {
  const isMoMid = useMediaQuery({
    maxWidth: breakPoints.moMid,
  });

  const isMoSm = useMediaQuery({
    maxWidth: breakPoints.moSm,
  });
  const { pathname } = useLocation();

  const handleClick = () => {
    if (isMoMid || isMoSm) {
      setTimeout(() => {
        projects.forEach((project) => {
          if (pathname.includes(project.title.toLowerCase())) {
            window.open(project.web, "_blank");
          }
        });
      }, 400);
    } else {
      projects.forEach((project) => {
        if (pathname.includes(project.title.toLowerCase())) {
          window.open(project.web, "_blank");
        }
      });
    }
  };

  return (
    <>
      <div css={projectWrapperStyle}>
        <ProjectMain />
      </div>
      <div css={buttonWrapper}>
        <Button
          buttonText={"Visit Website"}
          handleClick={handleClick}
          fixCirclePosition={{
            bottom: "0",
            right: "0",
          }}
          movCirclePosition={{
            bottom: "0",
          }}
          fix={true}
        />
      </div>
      <div css={imgcoverStyle}>
        <img
          className="ptimg img-1"
          src="/img/wish-mock-pt01.webp"
          alt="img-1"
        />

        <div className="left-stack">
          <img className="ptimg img-2" src="/img/wish-kdt.webp" alt="img-2" />
          <div className="tag-box">
            <LineTag tags={projects[2].stacks} />
          </div>
        </div>

        <img
          className="ptimg img-3"
          src="/img/wish-mock-pt02.webp"
          alt="img-3"
        />
      </div>

      <h4 css={WishMiniTitle}>해커톤 프로젝트의 시스템 설계 및 개발 전략</h4>
      <WishService />
      <div css={[dividerOption, DividerStyle]} />
      <IssueComponent data={IssuesWish} />
    </>
  );
};

export default Wish;

const projectWrapperStyle = css`
  margin-bottom: 10rem;
`;

const buttonWrapper = css`
  margin-bottom: 20rem;
`;

const imgcoverStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 10rem;

  .ptimg {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
    display: block;
  }

  .img-1 {
    grid-column: 1 / 3;
  }

  .left-stack {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .tag-box {
    border-radius: 1rem;
    padding: 1rem;
    height: 100%;
  }

  .img-3 {
    grid-row: span 2;
    height: 100%;
    object-fit: cover;
  }
`;

const dividerOption = css`
  min-width: 100vw;
  margin-left: calc(-50vw + 50%);
  width: 100%;
`;

const WishMiniTitle = css`
  ${TypoTitleSmS}
  color:${variables.colors.gray600};
  text-align: center;
  margin: 30rem auto 10rem auto;
  padding: 0 5rem;
  width: fit-content;
  border-left: 2px solid ${variables.colors.gray600};
  border-right: 2px solid ${variables.colors.gray600};
`;
