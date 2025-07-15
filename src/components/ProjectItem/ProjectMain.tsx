/** @jsxImportSource @emotion/react */
import { projects } from "@/data/projects";
import { css } from "@emotion/react";
import { useLocation } from "react-router-dom";
import Tags from "../Tag/Tags";
import { breakPoints, mqMax } from "@/styles/BreakPoint";
import { useEffect, useRef, useState } from "react";
import { TypoBodySmM } from "@/styles/Common";
import variables from "@/styles/Variables";

const ProjectMain = () => {
  const { pathname } = useLocation();

  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [objectPosY, setObjectPosY] = useState(50);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const newPos = 60 - entry.intersectionRatio * 60;
        setObjectPosY(newPos);
      },
      {
        root: null,
        rootMargin: "-200px 0px 0px 0px",
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div css={contentWrapperStyle}>
        {projects.map(
          (project, idx) =>
            pathname.includes(`${project.title.toLowerCase()}`) && (
              <>
                <div key={idx} css={imgContentStyle} ref={containerRef}>
                  <h1>{project.title.toUpperCase()}</h1>
                  <div className="mainImgCover">
                    <Tags tags={project.tags} />
                    <img
                      ref={imgRef}
                      css={imgStyle(objectPosY)}
                      src={`${project.subImg}`}
                      alt={`${project.title}`}
                    />
                  </div>
                </div>
                <section css={descWrapperStyle}>
                  <dl className="infoData">
                    <div className="pair pair-1">
                      <dt>INVOLVEMENT</dt>
                      <dd>
                        {Array.isArray(project.involvement)
                          ? project.involvement.join("\n")
                          : project.involvement}
                      </dd>
                    </div>
                    <div className="pair pair-2">
                      <dt>DELIVERABLES</dt>
                      <dd>{project.deliverables}</dd>
                    </div>
                    <div className="pair pair-3">
                      <dt>TEAM</dt>
                      <dd>{project.team}</dd>
                    </div>
                  </dl>
                  <dl className="resultData">
                    <dt>RESULT</dt>
                    <dd>{project.result}</dd>
                  </dl>
                </section>
              </>
            )
        )}
      </div>
    </>
  );
};

export default ProjectMain;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
`;

const contentWrapperStyle = css`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10rem;

  ${mqMax(breakPoints.pc)} {
    gap: 6rem;
  }
`;

const imgContentStyle = css`
  display: flex;
  margin-top: 10rem;
  gap: 4rem;
  align-items: flex-end;

  h1 {
    ${Montserrat}
    font-size: 10rem;
    font-weight: 400;
    display: inline-block;
    white-space: nowrap;
  }

  .mainImgCover {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ${mqMax(breakPoints.pc)} {
    flex-direction: column-reverse;
    align-items: start;
    margin-top: 3rem;

    h1 {
      ${Montserrat}
      font-size: 6rem;
      font-weight: 500;
      display: inline-block;
      white-space: nowrap;
    }

    .mainImgCover {
      width: 100%;
      gap: 2rem;
    }
  }
`;

const imgStyle = (posY: number) => css`
  width: 100%;
  height: 13rem;
  object-fit: cover;
  object-position: center ${posY}%;
  border-radius: 2rem;
  transition: object-position 0.1s ease-out;
`;

const descWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  white-space: pre-line;

  .infoData {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 50rem;
    gap: 3rem;
  }

  .pair {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .pair-1 {
    grid-column: 1 / 3;
  }

  dt {
    ${Montserrat}
    ${TypoBodySmM}
  }

  dd {
    ${Montserrat}
    color: ${variables.colors.gray700};
  }

  .resultData {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    max-width: 55rem;

    dd {
      line-height: 2.2rem;
    }
  }

  ${mqMax(breakPoints.pc)} {
    flex-direction: column;

    .infoData {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 10rem;

      min-width: unset;
    }

    .pair-1 {
      grid-column: unset;
    }

    .resultData {
      max-width: unset;
      flex-direction: row;
      gap: 6rem;
    }
  }
`;
