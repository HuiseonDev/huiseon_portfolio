/** @jsxImportSource @emotion/react */

import Button from "@/components/Button/Button";
import ProjectMain from "@/components/ProjectItem/ProjectMain";
import LineTag from "@/components/Tag/LineTag";
import { projects } from "@/data/projects";
import { breakPoints } from "@/styles/BreakPoint";
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
          <img
            className="ptimg img-2"
            src="/img/wish-mock-pt04.webp"
            alt="img-2"
          />
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
