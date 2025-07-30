/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { css } from "@emotion/react";
import variables from "@/styles/Variables";
import { breakPoints, mqMax } from "@/styles/BreakPoint";

gsap.registerPlugin(ScrollTrigger);

const cardImg = [
  "/img/toucheese-mock.svg",
  "/img/pillmate-mock.svg",
  "/img/trifly-mock.svg",
  "/img/wish-mock.svg",
];

const StackedCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLDivElement>(".card");
    const markers = process.env.NODE_ENV === "development";
    const randomRotations = cards.map(() => (Math.random() - 0.5) * 20);

    cards.forEach((card, index) => {
      card.style.zIndex = String(cardImg.length + index);

      gsap.to(card, {
        scale: () => 1 - (cards.length - index) * 0.025,
        rotate: randomRotations[index],
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "bottom top",
          scrub: 0.8,
          markers: markers && {
            startColor: "orange",
            endColor: "blue",
          },
        },
        ease: "none",
      });
    });
  }, []);

  return (
    <div css={CardwrapperStyle} ref={containerRef}>
      {cardImg.map((img, index) => (
        <div className="card" css={cardStyle} key={index}>
          <img src={img} alt={`card-${index}`} css={cardImgStyle} />
        </div>
      ))}
    </div>
  );
};

export default StackedCards;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
`;

const CardwrapperStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  height: fit-content;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  padding: 20rem 0;
  background-color: ${variables.colors.gray400};

  ${mqMax(breakPoints.pc)} {
    gap: 1rem;
    padding: 10rem 0;
  }

  ::before {
    content: "Preview";
    position: absolute;
    top: 0;
    ${Montserrat}
    font-size: 25rem;
    font-weight: 600;
    color: ${variables.colors.gray500};

    ${mqMax(breakPoints.pc)} {
      font-size: 10rem;
      font-weight: 600;
    }
  }
`;

const cardStyle = css`
  position: sticky;
  top: 10rem;
  width: 70%;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 40px;
  overflow: hidden;
  border-top: 0.4px solid ${variables.colors.gray100};
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.1);

  ${mqMax(breakPoints.pc)} {
    width: calc(90% - ${variables.layoutPadding} * 2);
  }
`;

const cardImgStyle = css`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;
