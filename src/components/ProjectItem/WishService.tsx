/** @jsxImportSource @emotion/react */
import { WishServiceContent } from "@/data/issues";
import { TypoBodyMdR, TypoTitleSmS } from "@/styles/Common";
import variables from "@/styles/Variables";
import styled from "@emotion/styled";

const WishService = () => {
  return (
    <ArticleStyle>
      {WishServiceContent.map((item, idx) => (
        <div>
          <h4>{item.title}</h4>
          <div className="ArrayContent">
            {Array.isArray(item.content) ? (
              item.content.map((content, idx) => <p key={idx}>{content}</p>)
            ) : (
              <p>{item.content}</p>
            )}
          </div>
          <img
            className="flowchartImg"
            src={item.img}
            alt={`wish 프로젝트 플로우차트 이미지 ${idx + 1}`}
          />
        </div>
      ))}
    </ArticleStyle>
  );
};

export default WishService;

const ArticleStyle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 23rem;
  align-items: center;
  margin-bottom: 20rem;

  h4 {
    color: ${variables.colors.black};
    ${TypoTitleSmS}
    text-align: center;
    margin-bottom: 3rem;
  }

  .ArrayContent {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 90rem;
    margin: 0 auto 8rem auto;

    p {
      color: ${variables.colors.gray900};
      text-align: center;
      ${TypoBodyMdR}
    }
  }

  .flowchartImg {
    height: fit-content;
  }
`;
