<template>
  <div class="q-ma-md">
    <q-select
      v-model="group"
      :options="s_store.groupLevel"
      label="grupa"
      filled
      class="q-my-md"
    />
    <p>{{ group }}</p>

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
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-checkbox v-model="props.selected" />
          </q-td>
          <!-- regular col -->
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <div
              v-if="
                col.name !== 'description' &&
                col.name !== 'oralVocabulary' &&
                col.name !== 'oralInteraction'
              "
              class="q-mx-sm"
            >
              {{ col.value }}
            </div>
            <div v-if="col.name === 'oralVocabulary'">
              <q-select
                :options="['A', 'B', 'C']"
                :model-value="props.row.oralVocabulary"
                @update:model-value="
                  dictionary[props.row.id].oralVocabulary = $event
                "
                borderless
                class="q-mx-xl"
              />
            </div>
            <div v-if="col.name === 'oralInteraction'">
              <q-select
                :options="['A', 'B', 'C']"
                v-model="props.row.oralInteraction"
                @update:model-value="
                  dictionary[props.row.id].oralInteraction = $event
                "
                borderless
                class="q-mx-xl"
              />
            </div>
            <div v-if="col.name === 'comment'">
              <q-btn
                size="sm"
                color="primary"
                dense
                @click="props.expand = !props.expand"
                :icon="props.expand ? 'remove' : 'add'"
              />
            </div>
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <q-input
              :label="`teacher's comments about: ${props.row.name}.`"
              v-model="props.row.description"
              @update:model-value="
                dictionary[props.row.id].description = $event
                  ? $event.toString()
                  : ''
              "
              type="textarea"
              filled
              class="q-mt-md"
              :rules="[
                (val) =>
                  val.length <= 370 || 'Please use maximum 370 characters',
              ]"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <p>Selected: {{ opis.length }}</p>
    <q-img src="src/assets/logo.svg"></q-img>
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
const { dictionary } = s_store;
const selected = ref([]);
const opis =
  'Student robi postępy, poświcęca dużo czasu ma naukę. Chetnie używa języka angielskiego do komunikacji z ruwiesnikami i nauczyciele. Tworzy pełne zdania, poprawne stylistycznie i gramatycznie. Jest bardzo zaangażowany w zajęcia. Jestem zadowolony z jego postępów. Jest bardzo zaangażowany w zajęcia. Jestem zadowolony z jego postępów. Jestem zadowolony z jego postępów. &';
const group = ref(null);
function dodo(selected: Row[]) {
  selected.forEach((row) => {
    const student = dictionary[row.id];
    const fonts = {
      IbmPlexSans: {
        normal: 'ibm-plex-sans.regular.ttf',
        bold: 'ibm-plex-sans.bold.ttf',
      },
    };
    pdfMake
      .createPdf(
        generatePDFData(student, group.value),
        undefined,
        fonts,
        pdfVfs
      )
      .download('first.pdf');
  });
}
</script>

<style scoped></style>
