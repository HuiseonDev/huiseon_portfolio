import ProjectItem from "@/components/ProjectList/ProjectItem";
import { projects } from "@/data/projects";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe } from "vitest";

const mockedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

describe("project component", () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
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
      expect(
        screen.getByTestId(`project-duration-${project.id}`)
      ).toHaveTextContent(`${project.durationStart} - ${project.durationEnd}`);
    });
  });

  it("프로젝트 이미지가 올바른 src, alt로 렌더링된다", () => {
    projects.forEach((project) => {
      const img = screen.getByAltText(project.title) as HTMLImageElement;
      expect(img).toBeInTheDocument();
      expect(img.src).toContain(project.thumbnail);
    });
  });

  it("프로젝트 아이템 클릭시 navigate가 호출된다", () => {
    projects.forEach((project) => {
      fireEvent.click(screen.getByTestId(`project-card-${project.id}`));
      expect(mockedNavigate).toHaveBeenCalledWith(project.navigate);
    });
  });

  it("프로젝트 hoverBox가 DOM에 존재하지만 opacity가 0이다", () => {
    const hoverBox = document.querySelectorAll(".hoverBox");
    hoverBox.forEach((box) => {
      expect(box).toHaveStyle("opacity: 0");
    });
  });

  test.each(projects.flatMap((p) => p.tags))(
    "태그 '%s'가 렌더링되는지 확인한다",
    (tag) => {
      expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
    }
  );
});
