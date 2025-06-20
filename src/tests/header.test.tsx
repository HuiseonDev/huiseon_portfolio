import Header from "@/components/Header/Header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  beforeEach(() => {
    render(<Header isScrolled={false} />);
  });

  it("화면에 정상 렌더링 된다.", () => {
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("portfolio 타이틀이 정상 렌더링 된다.", () => {
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
  });

  it("네비게이션에 Home 버튼이 있어야 한다", () => {
    expect(screen.getByRole("button", { name: /Home/i })).toBeInTheDocument();
  });
});
