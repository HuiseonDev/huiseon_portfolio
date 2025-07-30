export type AnalysisItem = {
  issue: string;
  subDetails?: string[];
};

export type IssueType = {
  title: string;
  imgBefore?: string;
  imgAfter?: string;
  objective: string[];
  problem: string[];
  analysis: AnalysisItem[];
  solution: string[] | string;
  outcome: string[] | string;
};
