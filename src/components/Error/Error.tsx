/** @jsxImportSource @emotion/react */

import { TypoCapSmR, TypoTitleMdSb } from "@/styles/Common";
import variables from "@/styles/Variables";
import { css } from "@emotion/react";

import { useNavigate, useRouteError } from "react-router-dom";
import BasicButton from "../Button/BasicButton";

const Error = () => {
  const error = useRouteError();
  if (error) console.error(error);
  const navigate = useNavigate();

  return (
    <section css={errorWr}>
      <div css={titleBox}>
        <h1 css={TypoTitleMdSb}>ERROR</h1>
        <div css={errorImgWr}>
          <img src="/img/Error.webp" alt="에러 이미지" />
        </div>
      </div>

      {navigate && (
        <div css={btnBox}>
          <BasicButton
            variant="black"
            onClick={() => navigate(-1)}
            size="small"
            width="fit"
            text="Go Back"
          />
        </div>
      )}
    </section>
  );
};

export default Error;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
  font-size: ${TypoCapSmR};
  color: ${variables.colors.gray700};
`;

const errorWr = css`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 ${variables.layoutPadding};
  text-align: center;

  h1 {
    padding-bottom: 4rem;
    ${Montserrat}
  }
`;

const titleBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const errorImgWr = css`
  width: 40%;
  margin: 0 auto;
`;

const btnBox = css`
  margin: 10rem auto 0 auto;
`;
