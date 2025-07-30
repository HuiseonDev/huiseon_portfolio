import Loading from "@/components/Loading/Loading";
import { render, screen } from "@testing-library/react";

vi.mock("lottie-react", () => ({
  default: () => <div data-testid="lottie-mock" />,
}));

describe("Loading 컴포넌트 테스트", () => {
  it("기본 렌더링 테스트", () => {
    const phraseText = screen.queryByText(/로딩/i);
    render(<Loading />);
    expect(screen.getByTestId("lottie-mock")).toBeInTheDocument();
    expect(phraseText).not.toBeInTheDocument();
  });

  it("기본 렌더링 사이즈 small 스타일 확인", () => {
    render(<Loading size="small" />);
    const loadingBox = screen.getByTestId("loading-box");
    expect(loadingBox).toHaveStyle("min-height: 50vh");
  });

  it("사이즈가 Big일 때 위치 스타일이 적용되는지 확인", () => {
    render(<Loading size="big" />);
    const loadingBox = screen.getByTestId("loading-box");
    expect(loadingBox).toHaveStyle("top: 50%");
    expect(loadingBox).toHaveStyle("left: 50%");
    expect(loadingBox).toHaveStyle("transform: translate(-50%, -50%)");
  });

  it("phrase가 주어지면 화면에 텍스트가 렌더링 되는지 확인", () => {
    const phrase = "로딩 중입니다...";
    render(<Loading phrase={phrase} />);
    const phraseText = screen.getByText(phrase);
    expect(phraseText).toBeInTheDocument();
  });
});
