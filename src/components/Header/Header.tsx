/** @jsxImportSource @emotion/react */
import { breakPoints, mqMax } from "@/styles/BreakPoint";
import { TypoTitleXsR } from "@/styles/Common";
import variables from "@/styles/Variables";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const Header = () => {
  const navList = ["Home", "AboutMe", "Skills", "ProjectList", "Blog"];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  return (
    <HeaderStyle>
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

const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: ${variables.layoutPadding} 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  ${TypoTitleXsR}

  .header-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 var(--layoutPadding);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const logoStyle = css`
  display: flex;
  gap: 0.8rem;
  font-weight: 800;

  img {
    width: 2.4rem;
    height: 2.4rem;
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
    ? variables.colors.gray800
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
