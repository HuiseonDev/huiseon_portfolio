import ProjectItem from "@/components/ProjectList/ProjectItem";
import { projects } from "@/data/projects";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe } from "vitest";

/** 테스트 항목
 * 1. 프로젝트 아이템 렌더링 여부
 * 2. hover 시 태그 컴포넌트 렌더링 여부
 * 3. 프로젝트 아이템 선택시 navigate 경로로 이동 확인
 * 4. 각 프로젝트의 thumbnail 이미지가 올바른 src와 alt 속성으로 렌더링되는지 확인
 * 5. 태그 컴포넌트가 각 프로젝트의 tags 배열을 받아 전달하는지 확인
 * 6. 반응형 적용시 그리드 스타일이 잘 적용되는지 확인
 */
const mockedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    navigate: () => mockedNavigate,
  };
});

describe("project component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ProjectItem />
      </BrowserRouter>
    );
  });

  it("프로젝트 아이템이 정상 렌더링 된다", () => {
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(project.team.replace(/\s+/g, "\\s+")))
      ).toBeInTheDocument();
    });
  });

  it("프로젝트 이미지가 올바른 src, alt로 렌더링된다", () => {
    projects.forEach((project) => {
      const img = screen.getByAltText(project.title) as HTMLImageElement;
      expect(img).toBeInTheDocument();
      expect(img.src).toContain(project.thumbnail);
    });
  });
});
