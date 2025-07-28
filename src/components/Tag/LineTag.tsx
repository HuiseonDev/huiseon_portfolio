/** @jsxImportSource @emotion/react */
import { breakPoints, mqMax } from "@/styles/BreakPoint";
import { TypoCapSmR } from "@/styles/Common";
import variables from "@/styles/Variables";
import { css } from "@emotion/react";

const LineTag = ({ tags }: { tags: string[] }) => (
  <div css={tagsWrapperStyle}>
    {tags.map((tag, i) => (
      <span key={i} css={tagStyle}>
        {tag}
      </span>
    ))}
  </div>
);

export default LineTag;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
  font-size: ${TypoCapSmR};
`;

const tagsWrapperStyle = css`
  color: ${variables.colors.gray900};
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.8rem;

  ${mqMax(breakPoints.pc)} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 0.4rem;
  }
`;

const tagStyle = css`
  display: inline-block;
  padding: 0.6rem 1rem;
  border: 1px solid ${variables.colors.gray700};
  border-radius: 10rem;
  text-align: end;
  ${Montserrat}
`;
