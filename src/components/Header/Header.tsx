/** @jsxImportSource @emotion/react */
import { breakPoints, mqMax } from "@/styles/BreakPoint";
import { TypoTitleXsR } from "@/styles/Common";
import variables from "@/styles/Variables";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

type HeaderStyleProps = {
  headerType: boolean;
};

const Header = ({ isScrolled }: { isScrolled: boolean }) => {
  const navList = ["Home", "AboutMe", "Skills", "ProjectList", "Blog"];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [selectedTheme, setSelectedTheme] = useState<boolean>(true);

  const handleClick = () => {
    setSelectedTheme((prev) => !prev);
  };
  return (
    <HeaderStyle headerType={isScrolled}>
      <header className="header-inner">
        <div css={logoStyle}>
          <img src="/img/logo.svg" alt="포트폴리오 로고" />
          <p css={merriweatherStyle}>Portfolio</p>
        </div>

        <nav css={[navBarStyle, merriweatherStyle]}>
          {navList.map((menu, idx) => (
            <button
              key={menu}
              css={[navItemStyle(idx === selectedIndex), Montserrat]}
              onClick={() => setSelectedIndex(idx)}
            >
              {menu}
            </button>
          ))}
        </nav>

        <button onClick={handleClick} css={themeStyle(isScrolled)}>
          <img
            src={selectedTheme ? "/img/light-icon.svg" : "/img/dark-icon.svg"}
            alt={selectedTheme ? "Light Mode" : "Dark Mode"}
            width={24}
            height={24}
          />
        </button>
      </header>
    </HeaderStyle>
  );
};

export default Header;

const merriweatherStyle = css`
  font-family: "Merriweather", serif;
`;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
`;

export const HeaderStyle = styled.div<HeaderStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: ${variables.layoutPadding} 0;
  width: 100%;
  border: 0.8px solid ${variables.colors.gray200};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  ${TypoTitleXsR}

  transition:
    margin-top 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    width 10s ease;

  .header-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 var(--layoutPadding);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${({ headerType }) =>
    headerType
      ? css`
          max-width: 80%;
          background-color: black;
          left: 50%;
          margin-top: 1rem;
          transform: translateX(-50%);
          border-radius: 5rem;
          background-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0px 4px 6px rgba(153, 153, 153, 0.04);
        `
      : css`
          background-color: ${variables.colors.white};
          color: ${variables.colors.black};
        `}
`;

const logoStyle = css`
  display: flex;
  gap: 0.8rem;
  font-weight: 800;

  img {
    width: 2.4rem;
    height: 2.4rem;
    margin: auto 0;

    ${mqMax(breakPoints.pc)} {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

const navBarStyle = css`
  display: flex;
  gap: 0.4rem;
  background-color: ${variables.colors.white};
  padding: 0.4rem 0.6rem;
  border-radius: 5rem;
  margin: 0 auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);

  ${mqMax(breakPoints.pc)} {
    display: none;
  }
`;

const navItemStyle = (selected: boolean) => css`
  background-color: ${selected
    ? variables.colors.gray900
    : variables.colors.white};
  color: ${selected
    ? `${variables.colors.white}`
    : `${variables.colors.gray800}`};
  font-weight: ${selected ? 400 : 300};
  border-radius: 6rem;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 2rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;

  outline: none;
  box-shadow: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const themeStyle = (headerType: boolean) => css`
  outline: none;
  box-shadow: none;
  margin-right: ${headerType ? "2rem" : "0"};

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
