/** @jsxImportSource @emotion/react */
import { breakPoints, mqMax } from "@/styles/BreakPoint";
import { css } from "@emotion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { FESkills, shuffledSkills } from "./Skills";
import { TypoCapXsR, TypoTitleXsR } from "@/styles/Common";
import variables from "@/styles/Variables";

gsap.registerPlugin(ScrollTrigger);

const SkillAnimater = () => {
  const isMo = useMediaQuery({ maxWidth: breakPoints.moMax });
  const topBoxRef = useRef<HTMLDivElement | null>(null);
  const bottomBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!topBoxRef.current || !bottomBoxRef.current) return;

    const markers = process.env.NODE_ENV === "development";

    const animateBox = (ref: HTMLDivElement, fromX: number | string) => {
      gsap.fromTo(
        ref,
        { xPercent: fromX },
        {
          xPercent: 0,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
            markers,
          },
        }
      );
    };

    animateBox(topBoxRef.current, -90);
    animateBox(bottomBoxRef.current, 90);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMo]);

  return (
    <div css={AnimationWrapperStyle}>
      <p ref={topBoxRef} css={topBoxStyle}>
        {FESkills.reduce((acc, cur, idx) =>
          idx === 0 ? cur : `${acc} • ${cur}`
        )}
      </p>
      <p ref={bottomBoxRef} css={bottomBoxStyle}>
        {shuffledSkills
          .slice()
          .reverse()
          .reduce((acc, cur, idx) => (idx === 0 ? cur : `${acc} • ${cur}`))}
      </p>
    </div>
  );
};

export default SkillAnimater;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
  font-size: ${TypoTitleXsR};

  ${mqMax(breakPoints.pc)} {
    ${TypoCapXsR}
  }
`;

const AnimationWrapperStyle = css`
  overflow: hidden;
  width: 100vw;
  max-width: unset;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 0 20rem 0;

  ${mqMax(breakPoints.pc)} {
    padding: 0 0 10rem 0;
  }
`;

const topBoxStyle = css`
  width: fit-content;
  border-top: 1px solid ${variables.colors.gray600};
  border-bottom: 1px solid ${variables.colors.gray600};
  white-space: nowrap;
  ${Montserrat}
  padding: 0.4rem 2rem;
  color: ${variables.colors.gray600};
`;

const bottomBoxStyle = css`
  width: fit-content;
  transform-origin: right center;
  border-top: 1px solid ${variables.colors.gray600};
  border-bottom: 1px solid ${variables.colors.gray600};
  white-space: nowrap;
  ${Montserrat}
  padding: 0.4rem 2rem;
  color: ${variables.colors.gray600};
`;
