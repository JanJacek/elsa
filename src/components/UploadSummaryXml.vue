<template>
  <div>
    <input type="file" @change="handleFileUpload" class="upload-input" />
    <pre v-if="fileContent" style="with: 500px; height: 500px">{{
      fileContent
    }}</pre>
  </div>
</template>

<script setup lang="ts">
//libraries
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';
//stores
import { summaryStore } from 'src/stores/summaryStore';
//types
//utils
import { Student } from 'src/utils/newStudent';
/* script */
const s_store = summaryStore();
const { dictionary } = s_store;
const fileContent = ref('');

async function handleFileUpload(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  const parser = new DOMParser();

  reader.onload = (e: any) => {
    const xml = parser.parseFromString(e.target.result, 'application/xml');
    const table = [...xml.getElementsByTagName('Table')[0].children];
    table.forEach((element: any) => {
      if (element.tagName === 'Row') {
        const uuid = uuidv4();
        const student = new Student();
        [...element.children].forEach((row: any, rowIndex) => {
          const { textContent } = row;
          switch (rowIndex) {
            case 0:
              if (textContent !== 'Student') {
                dictionary[uuid] = student;
                dictionary[uuid].name = textContent;
              }
              break;

            case 1:
              if (textContent !== 'Username')
                dictionary[uuid].username = textContent;
              break;

            case 2:
              if (textContent !== 'Last login')
                dictionary[uuid].lastLogin = textContent;
              break;

            case 3:
              if (textContent !== 'Enrolment date')
                dictionary[uuid].enrolmentDate = textContent;
              break;

            case 4:
              if (textContent !== 'Assignments completed')
                dictionary[uuid].assignmentsCompleted = textContent;
              break;

            case 5:
              if (textContent !== 'Assignments avg score')
                dictionary[uuid].assignmentsAvgScore = textContent;
              break;

            case 6:
              if (textContent !== 'Assignments avg grade')
                dictionary[uuid].assignmentsAvgGrade = textContent;
              break;

            case 7:
              if (textContent !== 'Tests completed')
                dictionary[uuid].testsCompleted = textContent;
              break;

            case 8:
              if (textContent !== 'Tests avg score')
                dictionary[uuid].testsAvgScore = textContent;
              break;

            case 9:
              if (textContent !== 'Tests avg grade')
                dictionary[uuid].testsAvgGrade = textContent;
              break;

            case 10:
              if (textContent !== 'Practices completed')
                dictionary[uuid].practicesCompleted = textContent;
              break;

            case 11:
              if (textContent !== 'Practices avg score')
                dictionary[uuid].practicesAvgScore = textContent;
              break;

            case 12:
              if (textContent !== 'Practices avg grade')
                dictionary[uuid].practicesAvgGrade = textContent;
              break;

            case 13:
              if (textContent !== 'Total time on task')
                dictionary[uuid].totalTimeOnTask = textContent;
              break;
          }
        });
      }
    });
  };
  reader.readAsText(file);
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
