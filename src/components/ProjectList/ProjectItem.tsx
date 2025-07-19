/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { projects } from "@/data/projects";
import { breakPoints, mqMax } from "@/styles/BreakPoint";
import { TypoBodySmM, TypoTitleSmS } from "@/styles/Common";
import variables from "@/styles/Variables";
import { useNavigate } from "react-router-dom";
import Tags from "../Tag/Tags";

const ProjectItem = () => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div css={gridContainerStyle}>
        {projects.map((item, idx) => (
          <div
            key={idx}
            data-testid={`project-card-${item.id}`}
            onClick={() => handleClick(item.navigate)}
          >
            <div css={itemBoxStyle}>
              <img css={imgStyle} src={`${item.thumbnail}`} alt={item.title} />
              <div css={hoverBoxStyle} className="hoverBox">
                <Tags tags={item.tags} />
              </div>
            </div>
            <div css={subTitleWrapperStyle}>
              <p data-testid={`project-duration-${item.id}`}>
                {item.durationStart} - {item.durationEnd}
              </p>
              <p>•</p>
              <p>{item.team}</p>
            </div>
            <div css={titleWrapperStyle}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectItem;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
  font-size: ${TypoTitleSmS};
`;

const gridContainerStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 1rem;
  overflow: hidden;

  cursor:
    url("/img/cursor.svg") 4 4,
    pointer;

  ${mqMax(breakPoints.moMid)} {
    grid-template-columns: repeat(1, 1fr);
  }

  & > div {
    margin: 1rem 0 10rem 0;
  }
`;

const titleWrapperStyle = css`
  display: flex;
  gap: 1rem;
  align-items: center;

  h2 {
    ${Montserrat}
  }

  p {
    ${TypoBodySmM}
  }
`;

const subTitleWrapperStyle = css`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  align-items: center;
  color: ${variables.colors.gray700};

  p {
    ${TypoBodySmM}
  }
`;

const itemBoxStyle = css`
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  aspect-ratio: 16 / 9;

  &:hover .hoverBox {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover img {
    transform: scale(1.1);
  }

  ${mqMax(breakPoints.moMax)} {
    &:hover .hoverBox {
      opacity: 0;
    }

    &:hover img {
      transform: unset;
    }
  }
`;

const imgStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 2rem;
  transition: transform 0.3s ease;
`;

const hoverBoxStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%);
  width: fit-content;
  background-color: ${variables.colors.gray100};
  padding: 0 2rem 1rem 2rem;
  color: ${variables.colors.gray800};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  pointer-events: none;
  border-radius: 0 0 0 2rem;

  ::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -1rem;
    width: 1rem;
    height: 1rem;
    background-image: url("img/border-re.svg");
    background-size: contain;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1rem;
    width: 1rem;
    height: 1rem;
    background-image: url("img/border-re.svg");
    background-size: contain;
  }
`;
