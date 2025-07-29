/** @jsxImportSource @emotion/react */
import MotionButton from "@/components/Button/MotionButton";
import ProjectMain from "@/components/ProjectItem/ProjectMain";
import { projects } from "@/data/projects";
import { breakPoints } from "@/styles/BreakPoint";
import { css } from "@emotion/react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
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
        <MotionButton
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
    </>
  );
};

export default Portfolio;

const projectWrapperStyle = css`
  margin-bottom: 10rem;
`;

const buttonWrapper = css`
  margin-bottom: 10rem;
`;
