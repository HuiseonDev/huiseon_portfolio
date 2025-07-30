/** @jsxImportSource @emotion/react */

import { breakPoints, mqMax } from "@/styles/BreakPoint";
import {
  TypoBodySmM,
  TypoBodySmR,
  TypoBodySmSb,
  TypoTitleSmS,
} from "@/styles/Common";
import variables from "@/styles/Variables";
import { IssueType } from "@/types/types";
import { css } from "@emotion/react";

interface ToucheeseIssuesProps {
  data: IssueType[];
}

const IssueComponent = ({ data }: ToucheeseIssuesProps) => {
  return (
    <div css={wrapper}>
      <h2 className="hidden">Issues</h2>

      {data.map((issue, i) => (
        <article key={i} css={IssuesWrapperStyle}>
          <h3>{issue.title}</h3>

          {issue.objective && (
            <div className="ObjectiveTitle">
              <ul>
                {issue.objective.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {(Array.isArray(issue.problem) || Array.isArray(issue.analysis)) && (
            <div css={IssuesContentStyle}>
              {issue.imgBefore && (
                <img
                  src={issue.imgBefore}
                  alt={`이슈 해결 이전 이미지 ${i + 1}`}
                />
              )}

              <div css={sectionWrapper}>
                {Array.isArray(issue.problem) && (
                  <section>
                    <h4>문제점</h4>
                    <ul>
                      {issue.problem.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {Array.isArray(issue.analysis) && (
                  <section>
                    <h4>분석</h4>
                    <ul>
                      {issue.analysis.map((item, index) => (
                        <li key={index}>
                          {item.issue}
                          {Array.isArray(item.subDetails) && (
                            <ul
                              className="innerUl"
                              css={css`
                                margin-bottom: ${index === 0 ? "2rem" : "0"};
                              `}
                            >
                              {item.subDetails.map((detail, subIndex) => (
                                <li key={subIndex}>{detail}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          )}

          <div css={IssuesContentStyle}>
            {issue.imgAfter && (
              <img src={issue.imgAfter} alt={`이슈 이후 이미지 ${i + 1}`} />
            )}

            <div css={sectionWrapper}>
              <section>
                <h4>개선</h4>
                <ul>
                  {Array.isArray(issue.solution) ? (
                    issue.solution.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>{issue.outcome}</li>
                  )}
                </ul>
              </section>

              <section>
                <h4>결과</h4>
                <ul>
                  {Array.isArray(issue.outcome) ? (
                    issue.outcome.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>{issue.outcome}</li>
                  )}
                </ul>
              </section>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default IssueComponent;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
`;

const wrapper = css`
  margin: 15rem 0 0 0;

  .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
  }
`;

const IssuesWrapperStyle = css`
  ${Montserrat}
  display: flex;
  flex-direction: column;
  margin-bottom: 30rem;

  h3 {
    ${TypoTitleSmS}
    margin: 0 auto;
    position: relative;
    text-align: center;
  }

  .ObjectiveTitle {
    text-align: center;
    color: ${variables.colors.gray900};

    h4 {
      margin: 5rem 0 1rem 0;
      color: ${variables.colors.gray700};
    }

    ul {
      margin: 3rem 0 3rem 0;
      display: inline-block;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      list-style: none;
    }
  }

  ${mqMax(breakPoints.pc)} {
    margin-bottom: 20rem;
  }
`;

const IssuesContentStyle = css`
  background-color: ${variables.colors.white};
  border-radius: 1rem;
  padding: 3rem;
  display: flex;
  gap: 3rem;
  margin: 4rem auto 0 auto;
  width: 100%;

  img {
    width: 50%;
    height: fit-content;
    border: 1px solid ${variables.colors.gray500};
    border-radius: 0.8rem;
  }

  ${mqMax(breakPoints.pc)} {
    flex-direction: column;

    img {
      width: 80%;
      height: fit-content;
      border-radius: 0.4rem;
      margin: 0 auto;
    }
  }

  ${mqMax(breakPoints.moMid)} {
    flex-direction: column;

    img {
      width: 100%;
      height: fit-content;
      border-radius: 0.4rem;
      margin: 0 auto;
    }
  }
`;

const sectionWrapper = css`
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 4rem;

  section h4 {
    ${Montserrat}
    ${TypoBodySmSb}
    margin-bottom: 1rem;
    color: ${variables.colors.gray600};
  }

  ul {
    padding-left: 1.5rem;

    li {
      margin-bottom: 1rem;
      ${TypoBodySmM}
    }
  }

  .innerUl li {
    ${TypoBodySmR}
    margin: 0.4rem 0 2rem 0;
  }
`;
