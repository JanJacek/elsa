//libraries
import { defineStore } from 'pinia';
// types
import { Row, TableColumn } from './storesModels/summaryStoreModels';

export const summaryStore = defineStore('summaryStore', {
  state: (): {
    dictionary: Record<string, Row>;
    groupLevel: {
      label: string;
      value: number;
    }[];
  } => ({
    dictionary: {},
    groupLevel: [
      {
        label: 'BE1',
        value: 110,
      },
      {
        label: 'BE2',
        value: 124,
      },
      {
        label: 'BE3',
        value: 138,
      },
      {
        label: 'BE4',
        value: 165,
      },
      {
        label: 'BE5',
        value: 194,
      },
      {
        label: 'BE6',
        value: 222,
      },
    ],
  }),
  getters: {
    getColumns(): TableColumn[] {
      const columns = {
        name: 'Name',
        comment: 'Comment',
        assignmentsCompleted: 'Assignments Completed',
        assignmentsAvgScore: 'Assignments Avg Score',
        assignmentsAvgGrade: 'Assignments Avg Grade',
        testsAvgScore: 'Tests Avg Score',
        testsAvgGrade: 'Tests Avg Grade',
        oralVocabulary: 'Oral Vocabulary',
        oralInteraction: 'Oral Interaction',
      };
      const columnsForTable: TableColumn[] = [];
      for (const [key, val] of Object.entries(columns)) {
        columnsForTable.push({
          name: key,
          label: val,
          field: key,
          style: 'margin: 0; padding: 0;',
          align: 'center',
        });
      }
      return columnsForTable;
    },
    getRows(): Row[] {
      const rowsForTable: Row[] = [];
      Object.keys(this.dictionary).forEach((key) => {
        rowsForTable.push({
          name: this.dictionary[key].name,
          username: this.dictionary[key].username,
          lastLogin: this.dictionary[key].lastLogin,
          enrolmentDate: this.dictionary[key].enrolmentDate,
          assignmentsCompleted: this.dictionary[key].assignmentsCompleted,
          assignmentsAvgScore: this.dictionary[key].assignmentsAvgScore,
          assignmentsAvgGrade: this.dictionary[key].assignmentsAvgGrade,
          testsCompleted: this.dictionary[key].testsCompleted,
          testsAvgScore: this.dictionary[key].testsAvgScore,
          testsAvgGrade: this.dictionary[key].testsAvgGrade,
          practicesCompleted: this.dictionary[key].practicesCompleted,
          practicesAvgScore: this.dictionary[key].practicesAvgScore,
          practicesAvgGrade: this.dictionary[key].practicesAvgGrade,
          totalTimeOnTask: this.dictionary[key].totalTimeOnTask,
          oralVocabulary: this.dictionary[key].oralVocabulary,
          oralInteraction: this.dictionary[key].oralInteraction,
          description: this.dictionary[key].description,
          id: key,
        });
      });
      return rowsForTable;
    },
  },
  actions: {},
});
