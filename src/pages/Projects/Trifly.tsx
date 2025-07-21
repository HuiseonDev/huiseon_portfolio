/** @jsxImportSource @emotion/react */

import Button from "@/components/Button/Button";
import IssueComponent from "@/components/Issues/IssueComponent";
import ProjectMain from "@/components/ProjectItem/ProjectMain";
import LineTag from "@/components/Tag/LineTag";
import { IssuesTrifly } from "@/data/issues";
import { projects } from "@/data/projects";
import { breakPoints } from "@/styles/BreakPoint";
import { DividerStyle } from "@/styles/Common";
import { css } from "@emotion/react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const Trifly = () => {
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
    <div>
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
          src="/img/trifly-mock-pt03.webp"
          alt="img-1"
        />

        <div className="left-stack">
          <img
            className="ptimg img-2"
            src="/img/trifly-mock-pt01.webp"
            alt="img-2"
          />
          <div className="tag-box">
            <LineTag tags={projects[1].stacks} />
          </div>
        </div>

        <img
          className="ptimg img-3"
          src="/img/trifly-mock-pt02.webp"
          alt="img-3"
        />
      </div>
      <div css={[dividerOption, DividerStyle]} />
      <IssueComponent data={IssuesTrifly} />
    </div>
  );
};

export default Trifly;

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
  margin-bottom: 20rem;

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
