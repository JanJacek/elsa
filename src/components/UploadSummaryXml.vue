<template>
  <div>
    <input type="file" @change="handleFileUpload" class="upload-input" />
    <pre v-if="fileContent" style="with: 500px; height: 500px">{{
      fileContent
    }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
//stores
import { summaryStore } from 'src/stores/summaryStore';
//types
import { Row } from './models';
/* script */
const s_store = summaryStore();
const { rows } = s_store.summaryJson;

const fileContent = ref('');

async function handleFileUpload(event: any) {
  console.log(event.target.files[0]);
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
          username: '', // remove
          lastLogin: '', // remove
          enrolmentDate: '', // remove
          assignmentsCompleted: '',
          assignmentsAvgScore: '',
          assignmentsAvgGrade: '',
          testsCompleted: '', // remove
          testsAvgScore: '',
          testsAvgGrade: '',
          practicesCompleted: '', // remove
          practicesAvgScore: '', // remove
          practicesAvgGrade: '', // remove
          totalTimeOnTask: '', // remove
          oralVocabulary: '',
          oralInteraction: '',
        };
        [...element.children].forEach((row: any, rowIndex) => {
          const { textContent } = row;
          switch (rowIndex) {
            case 0:
              if (textContent !== 'Student') {
                rowy.name = textContent;
                rows.push(rowy);
              }
              break;

            case 1:
              if (textContent !== 'Username') rowy.username = textContent;
              break;

            case 2:
              if (textContent !== 'Last login') rowy.lastLogin = textContent;
              break;

            case 3:
              if (textContent !== 'Enrolment date')
                rowy.enrolmentDate = textContent;
              break;

            case 4:
              if (textContent !== 'Assignments completed')
                rowy.assignmentsCompleted = textContent;
              break;

            case 5:
              if (textContent !== 'Assignments avg score')
                rowy.assignmentsAvgScore = textContent;
              break;

            case 6:
              if (textContent !== 'Assignments avg grade')
                rowy.assignmentsAvgGrade = textContent;
              break;

            case 7:
              if (textContent !== 'Tests completed')
                rowy.testsCompleted = textContent;
              break;

            case 8:
              if (textContent !== 'Tests avg score')
                rowy.testsAvgScore = textContent;
              break;

            case 9:
              if (textContent !== 'Tests avg grade')
                rowy.testsAvgGrade = textContent;
              break;

            case 10:
              if (textContent !== 'Practices completed')
                rowy.practicesCompleted = textContent;
              break;

            case 11:
              if (textContent !== 'Practices avg score')
                rowy.practicesAvgScore = textContent;
              break;

            case 12:
              if (textContent !== 'Practices avg grade')
                rowy.practicesAvgGrade = textContent;
              break;

            case 13:
              if (textContent !== 'Total time on task')
                rowy.totalTimeOnTask = textContent;
              break;
          }
        });
      }
    });
  };
  reader.readAsText(file);
  console.log('summaryJson', s_store.summaryJson);
}
</script>

<style>
.upload-input {
  margin: 10px 15px;
  padding: 10px;
  width: 250px;
  height: 100px;
  border-radius: 5px;
  border: 2px dashed #13489e;
}
input::file-selector-button {
  background-color: #1976d2;
  color: white;
  padding: 0.5em;
  border: none;
  border-radius: 3px;
}
</style>
