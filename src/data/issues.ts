type AnalysisItem = {
  issue: string;
  subDetails?: string[];
};

type ToucheeseIssueType = {
  imgBefore: string;
  imgAfter: string;
  objective: string[];
  problem: string[];
  analysis: AnalysisItem[];
  solution: string;
  outcome: string[];
};

export const IssuesToucheese: ToucheeseIssueType = {
  imgBefore: "/img/toucheese-issue-01.webp",
  imgAfter: "/img/toucheese-issue-02.webp",
  objective: [
    "❶ sessionStorage 를 활용하여 본인인증 전후에도 데이터 유지",
    "❷ 회원가입 페이지 이동 후  sessionStorage 에서 불러와 기본값 설정",
    "❸ 본인인증 후 다시  input  입력 페이지로 리다이렉트 되었을 때 사용자 입력값 계속 유지 및 다음 버튼 활성화",
  ],
  problem: [
    "본인인증 후 리다이렉트 시  params 의  success 값을 읽어와 다음 이동 버튼 활성화됨",
    "하지만 이름 및 휴대폰 번호  input 의  defaultValues 가  sessionStorage 값으로 설정되지 않음",
  ],
  analysis: [
    {
      issue: "react-hook-form reset 설정",
      subDetails: [
        "react-hook-form 의 상태를 수동으로 갱신해주는데 만약  reset 을 사용하지 않으면, 외부 데이터가 업데이트 되더라도 폼 값은 그대로 유지가 되는 문제가 발생한다는것을 파악하여 변경하였지만 문제는 해결되지 않음",
      ],
    },
    {
      issue: "리액트 공식 문서를 참고하여 시각적 깜빡임 원인 분석",
      subDetails: [
        "리액트의 순수 함수를 유지하기 위해 부수 효과를 다루는  useEffect 는  render ,  paint  과정 이후에 비동기적으로 실행되어 시각적 깜빡임이 생길 수 밖에 없음 확인",
      ],
    },
  ],
  solution:
    "초기 렌더링 시 상태 업데이트 지연으로 인해 UI가 비정상적으로 표시되는 문제를 확인하고  React  렌더링 사이클을 고려하여 DOM 렌더링 전에 상태를 동기적으로 갱신하여 초기화 흐름 개선",
  outcome: [
    "사용자가 오류로 인식할 수 있는 불편한 시각적 깜빡임을 개선하여 사용자 경험 향상",
    "불필요한 재입력 과정이 줄어 이탈률 감소 및 사용자 경험(UX) 향상",
    "useLayoutEffect 를 활용하여 렌더링 전에  sessionStorage  값을 불러와 적용 → 입력값이 비어있는 오류 방지",
  ],
};
