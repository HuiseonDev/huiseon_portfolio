/** @jsxImportSource @emotion/react */
import { breakPoints, mqMax } from "@/styles/BreakPoint";
import {
  TypoBodyMdM,
  TypoCapSmR,
  TypoCapXsR,
  TypoTitleXsM,
} from "@/styles/Common";
import variables from "@/styles/Variables";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-inner">
        <section css={footerTitleWrapperStyle}>
          <div css={footerTitleStyle}>
            <img src="/img/footer-icon.svg" alt="푸터 이미지" />
            <p css={Montserrat}>Lets Connect there</p>
          </div>
          <button css={postButtonStyle}>
            <p css={Montserrat}>Email</p>
            <img src="/img/arrow-icon.svg" alt="이메일 전송 아이콘" />
          </button>
        </section>

        <section css={contactSectionStyle}>
          <div css={contactStyle}>
            <div>
              <h1 css={contactHeadingStyle}>"함께할 팀을 찾고있어요"</h1>
              <p>
                새로운 기회나 프로젝트 제안이 있다면 편하게 연락해주세요.
                <br />
                프론트엔드 개발자로서 함께 성장하고 싶습니다.
              </p>
            </div>
            <address>designh2sun@gmail.com</address>
          </div>

          <div css={footerNavStyle}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">AboutMe</a>
              </li>
              <li>
                <a href="/projects">Skills</a>
              </li>
              <li>
                <a href="/blog">Projects</a>
              </li>
              <li>
                <a href="/contact">Blog</a>
              </li>
            </ul>
          </div>
        </section>

        <div css={contentinfoStyle}>
          <small>
            &copy; {new Date().getFullYear()} Huiseon. All rights reserved.
          </small>
          <small>Designed & Developed by Heesun</small>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
`;

const FooterStyle = styled.div`
  background-color: ${variables.colors.gray500};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 2rem 2rem 0 0;

  .footer-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: ${variables.layoutPadding};
  }
`;

const footerTitleWrapperStyle = css`
  display: flex;
  padding: 4rem 0 3rem 0;
  justify-content: space-between;
`;

const footerTitleStyle = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 3.2rem;
  font-weight: 600;

  img {
    width: 5rem;
  }
`;

const postButtonStyle = css`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 2rem;
  border-radius: 3rem;
  background-color: ${variables.colors.black};
  color: ${variables.colors.white};
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;

  outline: none;
  box-shadow: none;

  font-size: 1.8rem;
  font-weight: 500;

  ${mqMax(breakPoints.pc)} {
    display: none;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const contactSectionStyle = css`
  display: flex;
  justify-content: space-between;
  padding: ${`calc(${variables.layoutPadding} * 2)`} 0;
  color: ${variables.colors.white};
  border-top: 1px solid ${variables.colors.gray300};
  border-bottom: 1px solid ${variables.colors.gray300};
`;

const contactStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${TypoBodyMdM}

  address {
    margin-top: 1rem;
    ${TypoCapSmR}
  }

  div,
  div > p {
    ${TypoCapSmR}
    line-height: 2rem;
  }
`;

const contactHeadingStyle = css`
  ${TypoTitleXsM}
  margin-bottom: 2rem;
`;

const footerNavStyle = css`
  padding-right: 3rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    li,
    li > a {
      ${Montserrat}

      &:hover {
        background-color: transparent;
        color: inherit;
        text-decoration: none;
      }
    }
  }

  ${mqMax(breakPoints.pc)} {
    display: none;
  }
`;

const contentinfoStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  color: ${variables.colors.gray600};
  ${TypoCapXsR}

  small {
    ${Montserrat}
  }
`;
