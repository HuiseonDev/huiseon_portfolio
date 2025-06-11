import Header from "@/components/Header/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  test("네비게이션에 Home 버튼이 있어야 한다", () => {
    render(<Header />);
    const homeButton = screen.getByRole("button", { name: /home/i });
    expect(homeButton).toBeInTheDocument();
  });
});
