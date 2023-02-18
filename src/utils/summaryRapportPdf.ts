import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import { Row } from 'src/stores/storesModels/summaryStoreModels';

const yellow = '#f2e697';
const pink = '#f9aed9';
const blue = '#aef9f7';
const purple = '#a7b3f7';

export function generatePDFData(student: Row): TDocumentDefinitions {
  console.log('czy działa', student);
  //Object that later is pushed into document definition
  const objectData: Content = [
    {
      // sekcja pierwsza
      columns: [
        {
          columns: [
            {
              width: 110,
              table: {
                widths: [100],
                heights: [40, 4, 40, 4],
                body: [
                  [
                    {
                      border: [false, false, false, false],
                      fillColor: yellow,
                      text: 'semester',
                      margin: [0, 12],
                      alignment: 'center',
                    },
                  ],
                  [
                    {
                      border: [false, false, false, false],
                      text: '',
                    },
                  ],
                  [
                    {
                      border: [false, false, false, false],
                      fillColor: pink,
                      text: 'poziom',
                      margin: [0, 12],
                      alignment: 'center',
                    },
                  ],
                  [
                    {
                      border: [false, false, false, false],
                      text: '',
                    },
                  ],
                ],
              },
            },
            {
              width: 120,
              table: {
                widths: [120],
                heights: [40, 4, 40, 4],
                body: [
                  [
                    {
                      border: [true, true, true, true],
                      fillColor: null,
                      text: 'I 2022/23',
                      margin: [10, 12, 0, 0],
                      alignment: 'left',
                    },
                  ],
                  [
                    {
                      border: [false, false, false, false],
                      text: '',
                    },
                  ],
                  [
                    {
                      border: [true, true, true, true],
                      fillColor: null,
                      text: 'BE 2+',
                      margin: [10, 12, 0, 0],
                      alignment: 'left',
                    },
                  ],
                  [
                    {
                      border: [false, false, false, false],
                      text: '',
                    },
                  ],
                ],
              },
            },
            {
              width: '100%',
              table: {
                widths: [270],
                heights: [40, 4, 40, 4],
                body: [
                  [
                    {
                      border: [false, false, false, false],
                      text: 'obrazek',
                      margin: [0, 12],
                      alignment: 'right',
                    },
                  ],
                  [
                    {
                      border: [false, false, false, false],
                      text: '',
                    },
                  ],
                  [
                    {
                      border: [false, false, false, false],
                      text: 'podsumowanie wyników',
                      margin: [0, 5],
                      fontSize: 20,
                      alignment: 'right',
                    },
                  ],
                  [
                    {
                      border: [false, false, false, false],
                      text: '',
                    },
                  ],
                ],
              },
            },
          ],
        },
      ],
      columnGap: 10,
    },
    {
      columns: [
        {
          width: 110,
          table: {
            widths: [100],
            heights: [40],
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: blue,
                  text: 'imię i nazwisko',
                  margin: [0, 12],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
        {
          width: 400,
          table: {
            widths: [400],
            heights: [40],
            body: [
              [
                {
                  border: [true, true, true, true],
                  fillColor: null,
                  text: student.name.replace(',', ''),
                  margin: [10, 10, 0, 0],
                  fontSize: 15,
                  // bold: true,
                  alignment: 'left',
                },
              ],
            ],
          },
        },
      ],
      columnGap: 10,
    },
    {
      text: '\n\n',
    },
    {
      // sekcja druga
      columns: [
        // kolumna 1
        {
          width: 110,
          table: {
            widths: [100],
            heights: [40, 4, 80, 4, 94, 4, 94],
            body: [
              [
                {
                  border: [false, false, false, false],
                  text: '',
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: yellow,
                  text: 'test pisemny',
                  alignment: 'center',
                  margin: [0, 35, 0, 0],
                  fontSize: 10,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: pink,
                  text: 'test ustny',
                  margin: [0, 40, 0, 0],
                  alignment: 'center',
                  fontSize: 10,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: blue,
                  text: 'praca domowa\n online',
                  alignment: 'center',
                  margin: [0, 30, 0, 0],
                  fontSize: 10,
                },
              ],
            ],
          },
        },
        // kolumna 2
        {
          width: 130,
          table: {
            widths: [120],
            heights: [40, 4, 80, 4, 40, 4, 40, 4, 40, 4, 40],
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: purple,
                  text: 'kategorie',
                  margin: [0, 13, 0, 0],
                  fontSize: 10,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: yellow,
                  text: 'test pisemny',
                  margin: [0, 35, 0, 0],
                  fontSize: 10,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: pink,
                  text: 'poprawność\n i znajomość słownictwa',
                  margin: [0, 7, 0, 0],
                  fontSize: 10,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: pink,
                  text: 'wykonanie zadania i poziom interakcji',
                  margin: [0, 7, 0, 0],
                  fontSize: 10,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: blue,
                  text: 'liczba wykonanych\n zadań',
                  margin: [0, 7, 0, 0],
                  fontSize: 10,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: blue,
                  text: 'wynik',
                  margin: [0, 13, 0, 0],
                  fontSize: 10,
                },
              ],
            ],
          },
        },
        // kolumna 3
        {
          width: 130,
          table: {
            widths: [120],
            heights: [40, 4, 80, 4, 40, 4, 40, 4, 40, 4, 40],
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: purple,
                  text: 'ocena/wynik',
                  margin: [0, 13, 0, 0],
                  alignment: 'center',
                  fontSize: 10,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [true, true, true, true],
                  fillColor: null,
                  text: `${student.testsAvgScore}`,
                  alignment: 'center',
                  margin: [0, 30, 0, 0],
                  fontSize: 15,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [true, true, true, true],
                  fillColor: null,
                  text: `${student.oralVocabulary}`,
                  alignment: 'center',
                  margin: [0, 10, 0, 0],
                  fontSize: 15,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [true, true, true, true],
                  fillColor: null,
                  text: `${student.oralInteraction}`,
                  alignment: 'center',
                  margin: [0, 10, 0, 0],
                  fontSize: 15,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [true, true, true, true],
                  fillColor: null,
                  text: `${student.assignmentsCompleted}`,
                  alignment: 'center',
                  margin: [0, 10, 0, 0],
                  fontSize: 15,
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  border: [true, true, true, true],
                  fillColor: null,
                  text: `${student.assignmentsAvgGrade}`,
                  alignment: 'center',
                  margin: [0, 10, 0, 0],
                  fontSize: 15,
                },
              ],
            ],
          },
        },
        // kolumna 4
        {
          width: 130,
          table: {
            widths: [120],
            heights: [40, 4, 40, 4, 134, 4, 94],
            body: [
              [
                {
                  border: [false, false, false, false],
                  text: '',
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  text: '',
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: purple,
                  text: 'skala ocen',
                  margin: [0, 13, 0, 0],
                  alignment: 'center',
                  fontSize: 10,
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  text: '',
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: purple,
                  margin: [0, 28, 0, 0],
                  text: 'A=100-90%\nB=89-75%\nC=74-60%\nD=59-45%\nE=44-30%\nF=29-0%',
                  alignment: 'center',
                  fontSize: 10,
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  text: '',
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  fillColor: purple,
                  text: 'nauczyciel:',
                  alignment: 'center',
                  margin: [0, 70, 0, 0],
                  fontSize: 10,
                },
              ],
            ],
          },
        },
      ],
      columnGap: 10,
    },
    {
      text: '\n\n',
    },
    {
      columns: [
        {
          width: 110,
          table: {
            widths: [100],
            heights: [80],
            body: [
              [
                {
                  border: [true, true, true, true],
                  fillColor: null,
                  text: 'Informacje\n dodatkowe i rekomendacje',
                  margin: [0, 18, 0, 0],
                  alignment: 'center',
                  fontSize: 10,
                },
              ],
            ],
          },
        },
        {
          width: 400,
          table: {
            widths: [400],
            heights: [80],
            body: [
              [
                {
                  border: [true, true, true, true],
                  fillColor: null,
                  text: '',
                  margin: [0, 10, 0, 0],
                  fontSize: 10,
                },
              ],
            ],
          },
        },
      ],
      columnGap: 10,
    },
    {
      text: '\n',
      // sekcja 4
    },
    {
      columns: [
        {
          width: 110,
          table: {
            widths: [100],
            heights: [30],
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: yellow,
                  text: 'poziom CEFR',
                  margin: [0, 7, 0, 0],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
        {
          width: 60,
          table: {
            widths: [50],
            heights: [30],
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: yellow,
                  text: 'A1',
                  margin: [0, 7, 0, 0],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
        {
          width: 60,
          table: {
            widths: [50],
            heights: [30],
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: yellow,
                  text: 'A2',
                  margin: [0, 7, 0, 0],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
        {
          width: 60,
          table: {
            widths: [50],
            heights: [30],
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: yellow,
                  text: 'B1',
                  margin: [0, 7, 0, 0],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
        {
          width: 60,
          table: {
            widths: [50],
            heights: [30],
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: pink,
                  text: 'B2',
                  margin: [0, 7, 0, 0],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
        {
          width: 60,
          table: {
            widths: [50],
            heights: [30],
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: yellow,
                  text: 'C1',
                  margin: [0, 7, 0, 0],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
        {
          width: 60,
          table: {
            widths: [50],
            heights: [30],
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: yellow,
                  text: 'C2',
                  margin: [0, 7, 0, 0],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
      ],
      columnGap: 10,
    },
    {
      text: '\n',
    },
    {
      table: {
        widths: [520],
        heights: [30],
        body: [
          [
            {
              border: [false, false, false, false],
              fillColor: purple,
              text: 'Życzymy dalszych postepów!',
              margin: [0, 7, 0, 0],
              alignment: 'center',
            },
          ],
        ],
      },
    },
    {
      text: 'wwww.elsangielski.pl',
      alignment: 'center',
    },
  ];

  //Creates definition for PDF document itself - adds header and footer
  const pdfData: TDocumentDefinitions = {
    //left top right down
    pageMargins: [30, 30, 30, 30],
    pageSize: 'A4',
    content: { stack: objectData },
    defaultStyle: {
      font: 'IbmPlexSans',
    },
    // Metadata
    info: {
      title: 'summaryRapport',
    },
  };

  return pdfData;
}

// return '#f9aed9';
// return '#f2e697';
