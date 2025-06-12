import Footer from "@/components/Footer/Footer";
import { render, screen } from "@testing-library/react";

describe("footer component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("화면에 정상 렌더링 된다.", () => {
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("타이틀이 정상 렌더링 된다.", () => {
    expect(screen.getByText(/Lets Connect there/i)).toBeInTheDocument();
  });

  it("email 전송 버튼이 있어야 한다", () => {
    expect(screen.getByRole("button", { name: /email/i })).toBeInTheDocument();
  });

  it("navigation 링크가 정상 작동한다.", () => {
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  });
});
