import Button from "@/components/Button/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import gsap from "gsap";
import { describe, expect } from "vitest";

vi.mock("gsap", () => ({
  default: {
    to: vi.fn(),
  },
}));

describe("button component", () => {
  beforeEach(() => {
    render(
      <Button
        buttonText="테스트 버튼"
        fixCirclePosition={{
          top: "0",
          right: "3.2rem",
        }}
        movCirclePosition={{
          top: "0",
          right: "0",
        }}
      />
    );
  });

  it("버튼 텍스트가 정상 렌더링 된다", () => {
    expect(
      screen.getByRole("button", { name: "테스트 버튼" })
    ).toBeInTheDocument();
  });

  it("타이틀이 정상 렌더링 된다.", () => {
    expect(screen.getByText(/테스트 버튼/i)).toBeInTheDocument();
  });

  it("버튼 클릭시 URL이 새 창으로 열린다.", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    const button = screen.getByRole("button", { name: "테스트 버튼" });
    button.click();

    expect(openSpy).toHaveBeenCalledWith(
      "https://github.com/huiseonDev",
      "_blank"
    );
    openSpy.mockRestore();
  });

  it("gsap.to가 hover시 이벤트가 호출된다", async () => {
    const button = screen.getByRole("button", { name: "테스트 버튼" });
    await userEvent.hover(button);
    expect(gsap.to).toHaveBeenCalled();
  });
});
