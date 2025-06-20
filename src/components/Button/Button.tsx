/** @jsxImportSource @emotion/react */

import { TypoCapSmR } from "@/styles/Common";
import { css } from "@emotion/react";
import gsap from "gsap";
import { useRef } from "react";

type Position = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

type ButtonTextType = {
  buttonText: string;
  fixCirclePosition: Position;
  movCirclePosition: Position;
};

/** gsap animate button
 * 
   * @param buttonText : (필수) 버튼 내부에 들어갈 텍스트
   * @param fixCirclePosition : (일부 필수) 고정되어있는 요소의 위치
   * @param movCirclePosition : (일부 필수) hover시 animate가 적용될 요소의 위치
   * 
   * @example
   *<Button buttonText={"예시 텍스트"}
        fixCirclePosition={{
          top: "0",
          right: "3.2rem",
          bottom: "1rem",
          left: "2rem"
        }}
        movCirclePosition={{
          top: "0",
          right: "0",
        }}
      />
   */

const Button = ({
  buttonText,
  fixCirclePosition,
  movCirclePosition,
}: ButtonTextType) => {
  const movingRef = useRef(null);
  const triggerRef = useRef(null);

  // hover시 우측 이동
  const handleMouseEnter = () => {
    gsap.to(movingRef.current, {
      x: 10,
      rotation: 43,
      duration: 0.8,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const handleClick = () => {
    window.open("https://github.com/huiseonDev", "_blank");
  };

  const handleMouseLeave = () => {
    gsap.to(movingRef.current, {
      x: 0,
      rotation: 0,
      duration: 0.8,
      ease: "elastic.out(0.4, 1)",
    });
  };

  return (
    <div css={circleWrapper}>
      <svg width="0" height="0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 10 -5"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>
      <button
        ref={triggerRef}
        css={fixCircle(fixCirclePosition)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {buttonText}
      </button>
      <button
        ref={movingRef}
        css={movingCircle(movCirclePosition)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img src="/img/arrow-icon.svg" alt="icon" />
      </button>
    </div>
  );
};

export default Button;

const circleWrapper = css`
  display: flex;
  position: relative;
  filter: url(#goo);
  align-items: center;
  justify-content: center;

  button:focus {
    outline: none;
  }

  button:focus-visible {
    outline: none;
  }
`;

const fixCircle = (position: Position) => css`
  background-color: black;
  color: white;
  border-radius: 5rem;
  padding: 1rem 2rem;
  position: absolute;
  height: 1.6rem;
  z-index: 1;
  ${TypoCapSmR}

  ${position.top && `top: ${position.top};`}
  ${position.right && `right: ${position.right};`}
  ${position.bottom && `bottom: ${position.bottom};`}
  ${position.left && `left: ${position.left};`}
`;

const movingCircle = (position: Position) => css`
  background-color: black;
  border-radius: 5rem;
  padding: 1rem;
  height: 1.6rem;
  width: 1.6rem;
  position: absolute;

  ${position.top && `top: ${position.top};`}
  ${position.right && `right: ${position.right};`}
  ${position.bottom && `bottom: ${position.bottom};`}
  ${position.left && `left: ${position.left};`}
`;
