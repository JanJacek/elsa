//libraries
import { defineStore } from 'pinia';
// types
import {
  SummaryJson,
  Row,
  TableColumn,
} from './storesModels/summaryStoreModels';

export const summaryStore = defineStore('summaryStore', {
  state: (): {
    summaryJson: SummaryJson;
  } => ({
    summaryJson: {
      columns: {
        name: 'Name',
        username: 'Username',
        lastLogin: 'last Login',
        enrolmentDate: 'Enrolment Date',
        assignmentsCompleted: 'Assignments Completed',
        assignmentsAvgScore: 'Assignments Avg Score',
        assignmentsAvgGrade: 'Assignments Avg Grade',
        testsCompleted: 'Tests Completed',
        testsAvgScore: 'Tests Avg Score',
        testsAvgGrade: 'Tests Avg Grade',
        practicesCompleted: 'Practices Completed',
        practicesAvgScore: 'Practices Avg Score',
        practicesAvgGrade: 'Practices Avg Grade',
        totalTimeOnTask: 'Total Time On Task',
      },
      rows: [],
    },
  }),
  getters: {
    getColumns(): TableColumn[] {
      const columnsForTable: TableColumn[] = [];
      for (const [key, val] of Object.entries(this.summaryJson.columns)) {
        columnsForTable.push({
          name: key,
          label: val,
          field: key,
        });
      }
      return columnsForTable;
    },
    getRows(): Row[] {
      const rowsForTable: Row[] = [];
      for (const row of this.summaryJson.rows) {
        rowsForTable.push({
          name: row.name,
          username: row.username,
          lastLogin: row.lastLogin,
          enrolmentDate: row.enrolmentDate,
          assignmentsCompleted: row.assignmentsCompleted,
          assignmentsAvgScore: row.assignmentsAvgScore,
          assignmentsAvgGrade: row.assignmentsAvgGrade,
          testsCompleted: row.testsCompleted,
          testsAvgScore: row.testsAvgScore,
          testsAvgGrade: row.testsAvgGrade,
          practicesCompleted: row.practicesCompleted,
          practicesAvgScore: row.practicesAvgScore,
          practicesAvgGrade: row.practicesAvgGrade,
          totalTimeOnTask: row.totalTimeOnTask,
        });
      }
      return rowsForTable;
    },
  },
  actions: {},
});
