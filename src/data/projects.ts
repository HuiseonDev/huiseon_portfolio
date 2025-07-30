export interface Project {
  id: string;
  title: string;
  durationStart: string;
  durationEnd: string;
  team: string;
  thumbnail: string;
  description: string;
  tags: string[];
  navigate: string;
  subImg: string;
  deliverables: string;
  involvement: string | string[];
  result: string;
  web: string;
  stacks: string[];
}

export const projects: Project[] = [
  {
    id: "Toucheese",
    title: "Toucheese",
    durationStart: "2024.10",
    durationEnd: "2025.01",
    team: "FE6  BE1  DE2  PM1",
    thumbnail: "/img/toucheese-mock.webp",
    subImg: "/img/toucheese-sub-mock.webp",
    description: "프로필 사진 촬영 스튜디오 중개 서비스",
    tags: ["Develop", "Web/App", "Intern"],
    web: "https://toucheese-flash.store/",
    navigate: "project/toucheese",
    deliverables: "Responsive Web App",
    involvement: "FE Develop",
    stacks: [
      "React",
      "TypeScript",
      "Emotion",
      "Zustnad",
      "Vitest",
      "Github Actions",
      "AWS S3",
      "CloudFront",
      "CI/CD",
      "React Testing Library",
      "Figma",
    ],
    result:
      "인턴십 기간 동안 실 서비스 개발에 참여하여, 스튜디오 탐색부터 예약까지 전 과정을 지원하는 웹 서비스를 개발했습니다. 사용자는 원하는 조건(지역, 일정, 태그 등)을 기준으로 스튜디오를 필터링하고 상세 페이지를 통해 가격, 예약 가능 일, 이미지 등 상세 정보를 확인할 수 있으며 직접 예약까지 진행할 수 있습니다. React와 TypeScript를 기반 SPA 구조로, 검색 조건에 따른 동적 필터링, 상태 동기화 및 캐싱을 위해 Zustand와 TanStack Query를 도입하여 사용자 경험을 개선했습니다. \n또한, 예약 내역 확인 기능을 통해 사용자는 자신의 예약 정보를 확인하고, 상태별로 구분하여 쉽게 접근할 수 있도록 UI를 구성했습니다. 현재는 실운영을 위한 투자 유치 단계에 진입한 프로젝트로, 실무에 적용 가능한 기술력과 유저 중심의 기능 설계를 직접 경험할 수 있었던 프로젝트입니다.",
  },
  {
    id: "Trifly",
    title: "Trifly",
    durationStart: "2024.07",
    durationEnd: "2024.08",
    team: "FE3  BE1",
    thumbnail: "/img/trifly-mock.webp",
    subImg: "/img/trifly-sub-mock.webp",
    description: "GDS 서비스를 활용한 항공권 예매 및 커스텀 서비스",
    tags: ["UI/UX Design", "Develop", "Web/App"],
    navigate: "project/trifly",
    deliverables: "Responsive Web App",
    involvement: ["UI/UX Design", "FE Develop"],
    web: "https://trifly.vercel.app/",
    stacks: ["Next.js", "TypeScript", "React", "Recoil", "SCSS", "Figma"],
    result:
      "Amadeus API를 활용한 실시간 항공권 예매 서비스 개발 프로젝트입니다.\n Next.js 프레임워크 기반으로 서버사이드 렌더링(SSR) 및 클라이언트 사이드렌더링(CSR)을 효과적으로 결합하여 사용자 경험과 SEO 최적화를 동시에 달성했습니다. 복잡한 Amadeus API 응답은 최대 6단계 이상의 중첩 구조를 가지므로 TypeScript를 적극 도입하여 타입 안정성을 확보했습니다. 각 중첩 구조에 대해 별도 타입 정의를 분리 및 계층화하여 복잡한 데이터 모델을 명확하게 표현하고 개발 과정에서 발생할 수 있는 오류를 사전에 방지하는 데 주력했습니다.",
  },
  {
    id: "Wish",
    title: "Wish",
    durationStart: "2024.10",
    durationEnd: "2024.11",
    team: "FE5  BE1",
    thumbnail: "/img/wish-mock.webp",
    subImg: "/img/wish-sub-mock.webp",
    description: "난임 부부를 위한 AI 심리케어 서비스",
    tags: ["UI/UX Design", "Develop", "App", "Hackathon"],
    web: "https://wish-test.netlify.app/users/login",
    navigate: "project/wish",
    deliverables: "Mobile-Only Web",
    involvement: ["UI/UX Design", "FE Develop"],
    stacks: [
      "React",
      "TypeScript",
      "Emotion",
      "Zustand",
      "GPT-4o mini",
      "Echart",
      "Figma",
    ],
    result:
      "AI 심리상담과 감정 분석을 통해 난임 부부의 스트레스 완화와 관계 회복을 돕는 웹앱입니다.\n고용노동부 장관상을 수상한 해커톤 프로젝트로 기획, 디자인, 프롬프트 설계, 프론트엔드 개발 전반에 직접 참여했습니다. 사용자는 난임 스트레스 자가 진단을 통해 자신의 스트레스 수준과 감정 분포를 확인할 수 있으며 인지행동치료(CBT) 이론에 기반한 GPT 프롬프팅을 활용해 부정적인 핵심 신념을 추출하고 개인 맞춤형 부부동반 AI 추천 일일 미션을 제안하여 부부심리 회복에 도움을 줍니다.\n 배우자 연동 기능을 통해 서로의 스트레스 리포트를 공유하고 함께 미션을 수행하며 관계 개선을 유도하는 구조로 설계되었습니다.",
  },
  {
    id: "Portfolio",
    title: "Portfolio",
    durationStart: "2025.06",
    durationEnd: "진행중",
    team: "개인",
    thumbnail: "/img/portfolio-mock.webp",
    subImg: "/img/portfolio-sub-mock.webp",
    description: "프론트엔드 개발 및 디자인 웹 포트폴리오",
    tags: ["UI/UX Design", "Develop", "Web/App"],
    web: "https://huiseon-portfolio.site/",
    navigate: "project/portfolio",
    deliverables: "Responsive Web App",
    involvement: ["UI/UX Design", "FE Develop"],
    stacks: [
      "React",
      "TypeScript",
      "Emotion",
      "Gasp",
      "Zustnad",
      "Vitest",
      "Github Actions",
      "AWS S3",
      "CloudFront",
      "CI/CD",
      "Figma",
    ],
    result:
      "React와 TypeScript 기반으로 개발 중인 포트폴리오 웹사이트입니다.\n Emotion을 활용한 스타일링과 반응형 웹 접근성을 고려하여 모바일 최적화 UI를 구현하였습니다. 또한, AWS S3, CloudFront, Route 53을 활용하여 정적 파일을 배포하고, 캐싱 전략과 오류 대응을 적용하며 CI/CD 구성도 적용했습니다.\n 디자인, 기획, 개발 전 과정을 혼자서 수행하며 프론트엔드 전반에 대한 이해도를 높일 수 있었습니다.",
  },
];
