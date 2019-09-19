type subject =
  | "korean"
  | "math"
  | "social"
  | "science"
  | "english"
  | "history"
  | "tech_home";

export const subjectList: subject[] = [
  "korean",
  "math",
  "social",
  "science",
  "english",
  "history",
  "tech_home"
];

export const subjectScoresList = [];

export function returnSubjectScoresList(): Array<{
  semester: number;
  subject:
    | "korean"
    | "math"
    | "social"
    | "science"
    | "english"
    | "history"
    | "tech_home";
  score: string;
}> {
  for (const subject of subjectList) {
    for (let semester = 1; semester <= 5; semester += 1) {
      subjectScoresList.push({
        semester,
        subject,
        score: "A"
      });
    }
  }

  return subjectScoresList;
}