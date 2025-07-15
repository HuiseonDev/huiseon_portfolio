/** @jsxImportSource @emotion/react */

import { IssuesToucheese } from "@/data/issues";
import {
  TypoBodySmM,
  TypoBodySmR,
  TypoBodySmSb,
  TypoTitleSmS,
} from "@/styles/Common";
import variables from "@/styles/Variables";
import { css } from "@emotion/react";

const ToucheeseIssues = () => {
  return (
    <div css={wrapper}>
      <h2 className="hidden">Issues</h2>
      <article css={IssuesWrapperStyle}>
        <h3>React 렌더링 사이클을 고려한 비동기 상태 업데이트 최적화</h3>
        <div className="ObjectiveTitle">
          {/* <h4>Objective</h4> */}
          <ul>
            {IssuesToucheese.objective.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div css={IssuesContentStyle}>
          <img src={IssuesToucheese.imgBefore} />

          <div css={sectionWrapper}>
            <section>
              <h4>문제점</h4>
              <ul>
                {IssuesToucheese.problem.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h4>분석</h4>
              <ul>
                {IssuesToucheese.analysis.map((item, index) => (
                  <li key={index}>
                    {item.issue}
                    {item.subDetails && (
                      <ul
                        className="innerUl"
                        css={css`
                          margin-bottom: ${index === 0 ? "2rem" : "2rem"};
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
          </div>
        </div>

        <div css={IssuesContentStyle}>
          <img src={IssuesToucheese.imgAfter} />

          <div css={sectionWrapper}>
            <section>
              <h4>개선</h4>
              <ul>
                <li>{IssuesToucheese.solution}</li>
              </ul>
            </section>

            <section>
              <h4>결과</h4>
              <ul>
                {IssuesToucheese.outcome.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ToucheeseIssues;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
`;

const wrapper = css`
  margin: 15rem 0;

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

  h3 {
    ${TypoTitleSmS}
    margin: 0 auto;
    position: relative;
  }

  .ObjectiveTitle {
    margin: 0 auto 4rem auto;
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
`;

const IssuesContentStyle = css`
  background-color: ${variables.colors.white};
  border-radius: 1rem;
  padding: 3rem;
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;

  img {
    width: 50%;
    height: fit-content;
    border: 1px solid ${variables.colors.gray500};
    border-radius: 0.8rem;
  }
`;

const sectionWrapper = css`
  display: flex;
  justify-content: end;
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
