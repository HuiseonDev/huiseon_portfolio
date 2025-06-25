import Button from "@/components/Button/Button";
import { fireEvent, render, screen } from "@testing-library/react";
import gsap from "gsap";
import { describe, expect } from "vitest";

const renderComponent = (isMo: boolean) => {
  const handleClick = () => {
    if (isMo) {
      setTimeout(() => {
        window.open("https://github.com/huiseonDev", "_blank");
      }, 400);
    } else {
      window.open("https://github.com/huiseonDev", "_blank");
    }
  };

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
      handleClick={handleClick}
    />
  );
};

describe("button component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("PC 환경에서 클릭 즉시 window.open 호출", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    renderComponent(false);

    const button = screen.getByRole("button", { name: "테스트 버튼" });
    button.click();
    expect(openSpy).toHaveBeenCalledWith(
      "https://github.com/huiseonDev",
      "_blank"
    );
  });

  it("Mobile 환경에서 클릭시 setTimeout 후 window.open 호출", () => {
    vi.useFakeTimers();
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    renderComponent(true);

    const button = screen.getByRole("button", { name: "테스트 버튼" });
    button.click();

    expect(openSpy).not.toHaveBeenCalled();
    vi.runAllTimers();
    expect(openSpy).toHaveBeenCalledWith(
      "https://github.com/huiseonDev",
      "_blank"
    );

    vi.useFakeTimers();
  });

  it("버튼 텍스트가 정상 렌더링 된다", () => {
    renderComponent(false);
    expect(
      screen.getByRole("button", { name: "테스트 버튼" })
    ).toBeInTheDocument();
  });

  vi.mock("gsap", () => ({
    default: {
      to: vi.fn(),
    },
  }));

  it("gsap.to가 hover시 이벤트가 호출된다", async () => {
    renderComponent(false);

    const button = screen.getByRole("button", { name: "테스트 버튼" });
    fireEvent.mouseEnter(button);
    expect(gsap.to).toHaveBeenCalled();
  });
});
