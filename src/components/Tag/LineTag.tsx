/** @jsxImportSource @emotion/react */
import { TypoCapSmR } from "@/styles/Common";
import variables from "@/styles/Variables";
import { css } from "@emotion/react";

const LineTag = ({ tags }: { tags: string[] }) => (
  <div css={tagsWrapperStyle}>
    {tags.map((tag, i) => (
      <span css={tagStyle} key={i}>
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
  gap: 0.4rem;
`;

const tagStyle = css`
  border: 1px solid ${variables.colors.gray700};
  ${Montserrat}
  padding: 0.6rem 1rem;
  border-radius: 5rem;
`;
