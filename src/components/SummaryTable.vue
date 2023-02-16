<template>
  <div class="q-ma-md">
    <q-table
      title="Treats"
      :rows="s_store.getRows"
      :columns="s_store.getColumns"
      row-key="name"
      selection="multiple"
      v-model:selected="selected"
      separator="cell"
    >
      <template v-slot:top="props">
        <div class="column">
          <div class="flex items-baseline">
            <p class="text-h6 q-ma-none" :props="props">Raport testów</p>
            <q-btn
              label="Generate PDF"
              icon-right="download"
              square
              dense
              flat
              color="primary"
              class="q-mx-sm"
              @click="dodo(selected)"
              :disable="!selected.length"
            />
          </div>
        </div>
      </template>
      <template #body-cell-oralVocabulary="props">
        <q-td :props="props" :style="props.row.style">
          <q-select
            :options="['A', 'B', 'C']"
            v-model="props.row.oralVocabulary"
            borderless
          />
        </q-td>
      </template>
      <template #body-cell-oralInteraction="props">
        <q-td :props="props" :style="props.row.style">
          <q-select
            :options="['A', 'B', 'C']"
            v-model="props.row.oralInteraction"
            borderless
          >
          </q-select>
        </q-td>
      </template>
    </q-table>
    <p>Selected: {{ opis.length }}</p>
  </div>
</template>

<script setup lang="ts">
//libraries
import { ref } from 'vue';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { pdfVfs } from 'src/components/PDFVfs/vfs_fonts';
//utils
import { generatePDFData } from 'src/utils/summaryRapportPdf';
//stores
import { summaryStore } from 'src/stores/summaryStore';
import { Row } from './models';
//types
/* script */
const s_store = summaryStore();
const selected = ref([]);
const opis =
  'Student robi postępy, poświcęca dużo czasu ma naukę. Chetnie używa języka angielskiego do komunikacji z ruwiesnikami i nauczyciele. Tworzy pełne zdania, poprawne stylistycznie i gramatycznie. Jest bardzo zaangażowany w zajęcia. Jestem zadowolony z jego postępów. Jest bardzo zaangażowany w zajęcia. Jestem zadowolony z jego postępów. Jestem zadowolony z jego postępów. &';

function dodo(selected: Row[]) {
  selected.forEach((row) => {
    const fonts = {
      IbmPlexSans: {
        normal: 'ibm-plex-sans.regular.ttf',
        bold: 'ibm-plex-sans.bold.ttf',
      },
    };
    pdfMake
      .createPdf(generatePDFData(row), undefined, fonts, pdfVfs)
      .download('first.pdf');
  });
}
</script>

<style scoped></style>
