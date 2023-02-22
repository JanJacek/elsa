export interface Row {
  name: string;
  username?: string;
  lastLogin?: string;
  enrolmentDate?: string;
  assignmentsCompleted: string;
  assignmentsAvgScore: string;
  assignmentsAvgGrade: string;
  testsCompleted?: string;
  testsAvgScore: string;
  testsAvgGrade: string;
  practicesCompleted?: string;
  practicesAvgScore?: string;
  practicesAvgGrade?: string;
  totalTimeOnTask?: string;
  oralVocabulary: string;
  oralInteraction: string;
  description: string;
  id: string;
}

export interface TableColumn {
  name: string;
  label: string;
  field: ((row: Row) => string) | string;
}
