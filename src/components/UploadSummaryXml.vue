<template>
  <div>
    <div>
      <input type="file" @change="handleFileUpload" />
      <pre v-if="fileContent" style="max-with: 500px">{{ fileContent }}</pre>
    </div>
    <q-table title="Treats" :rows="rows" :columns="columns" row-key="name" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface Row {
  name: string;
  username: string;
  lastLogin: string;
  enrolmentDate: string;
  assignmentsCompleted: string;
  assignmentsAvgScore: string;
  assignmentsAvgGrade: string;
  testsCompleted: string;
  testsAvgScore: string;
  testsAvgGrade: string;
  practicesCompleted: string;
  practicesAvgScore: string;
  practicesAvgGrade: string;
  totalTimeOnTask: string;
}

interface Column {
  name: string;
  label: string;
  field: ((row: Row) => string) | string;
}

const fileContent = ref('');
const columModel: { [key: string]: keyof Row } = {
  name: 'name',
  username: 'username',
  lastLogin: 'lastLogin',
  enrolmentDate: 'enrolmentDate',
  assignmentsCompleted: 'assignmentsCompleted',
  assignmentsAvgScore: 'assignmentsAvgScore',
  assignmentsAvgGrade: 'assignmentsAvgGrade',
  testsCompleted: 'testsCompleted',
  testsAvgScore: 'testsAvgScore',
  testsAvgGrade: 'testsAvgGrade',
  practicesCompleted: 'practicesCompleted',
  practicesAvgScore: 'practicesAvgScore',
  practicesAvgGrade: 'practicesAvgGrade',
  totalTimeOnTask: 'totalTimeOnTask',
};

async function handleFileUpload(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  const parser = new DOMParser();

  reader.onload = (e: any) => {
    const xml = parser.parseFromString(e.target.result, 'application/xml');
    const table = [...xml.getElementsByTagName('Table')[0].children];
    table.forEach((element: any) => {
      if (element.tagName === 'Row') {
        const rowy: Row = {
          name: '',
          username: '',
          lastLogin: '',
          enrolmentDate: '',
          assignmentsCompleted: '',
          assignmentsAvgScore: '',
          assignmentsAvgGrade: '',
          testsCompleted: '',
          testsAvgScore: '',
          testsAvgGrade: '',
          practicesCompleted: '',
          practicesAvgScore: '',
          practicesAvgGrade: '',
          totalTimeOnTask: '',
        };
        [...element.children].forEach((row: any, rowIndex) => {
          const { textContent } = row;
          switch (rowIndex) {
            case 0:
              if (textContent === 'Student')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: (row) => row.name,
                });
              else rowy.name = textContent;
              break;

            case 1:
              if (textContent === 'Username')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.username,
                });
              else rowy.username = textContent;
              break;

            case 2:
              if (textContent === 'Last login')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.lastLogin,
                });
              else rowy.lastLogin = textContent;
              break;

            case 3:
              if (textContent === 'Enrolment date')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.enrolmentDate,
                });
              else rowy.enrolmentDate = textContent;
              break;

            case 4:
              if (textContent === 'Assignments completed')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.assignmentsCompleted,
                });
              else rowy.assignmentsCompleted = textContent;
              break;

            case 5:
              if (textContent === 'Assignments avg score')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.assignmentsAvgScore,
                });
              else rowy.assignmentsAvgScore = textContent;
              break;

            case 6:
              if (textContent === 'Assignments avg grade')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.assignmentsAvgGrade,
                });
              else rowy.assignmentsAvgGrade = textContent;
              break;

            case 7:
              if (textContent === 'Tests completed')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.testsCompleted,
                });
              else rowy.testsCompleted = textContent;
              break;

            case 8:
              if (textContent === 'Tests avg score')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.testsAvgScore,
                });
              else rowy.testsAvgScore = textContent;
              break;

            case 9:
              if (textContent === 'Tests avg grade')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.testsAvgGrade,
                });
              else rowy.testsAvgGrade = textContent;
              break;

            case 10:
              if (textContent === 'Practices completed')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.practicesCompleted,
                });
              else rowy.practicesCompleted = textContent;
              break;

            case 11:
              if (textContent === 'Practices avg score')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.practicesAvgScore,
                });
              else rowy.practicesAvgScore = textContent;
              break;

            case 12:
              if (textContent === 'Practices avg grade')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.practicesAvgGrade,
                });
              else rowy.practicesAvgGrade = textContent;
              break;

            case 13:
              if (textContent === 'Total time on task')
                columns.value.push({
                  name: textContent,
                  label: textContent,
                  field: columModel.totalTimeOnTask,
                });
              else rowy.totalTimeOnTask = textContent;
              break;
          }
        });
        rows.value.push(rowy);
        summaryJson.rows.push(rowy);
      }
    });
  };
  reader.readAsText(file);
  console.log('summaryJson', summaryJson);
}
const columns = ref<Column[]>([]);

const rows = ref<Row[]>([]);

interface SummaryJson {
  columns: Row;
  rows: Row[];
}

const summaryJson: SummaryJson = {
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
};
</script>
