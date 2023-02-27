import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import { Row } from 'src/stores/storesModels/summaryStoreModels';

const yellow = '#f2e697';
const pink = '#f9aed9';
const blue = '#aef9f7';
const purple = '#a7b3f7';

export function generatePDFData(
  group: {
    label: string;
    value: number;
  } | null,
  semester: string,
  teacher: string,
  student: Row
): TDocumentDefinitions {
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
                      text: semester,
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
                      text: `${group ? group.label : ''}+`,
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
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="793" zoomAndPan="magnify" viewBox="135 180 70 70" height="1122" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><filter x="0%" y="0%" width="100%" height="100%" id="7d498ab2a5"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" color-interpolation-filters="sRGB"/></filter><filter x="0%" y="0%" width="100%" height="100%" id="597a047f03"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0" color-interpolation-filters="sRGB"/></filter><clipPath id="a1fce98c6a"><path d="M 0.015625 0 L 594.984375 0 L 594.984375 841.5 L 0.015625 841.5 Z M 0.015625 0 " clip-rule="nonzero"/></clipPath><clipPath id="0459d8348f"><path d="M 129.023438 31 L 472.507812 31 L 472.507812 374 L 129.023438 374 Z M 129.023438 31 " clip-rule="nonzero"/></clipPath><image x="0" y="0" width="500" xlink:href="data:image/png;base64,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" id="26a732ecf1" height="500" preserveAspectRatio="xMidYMid meet"/><mask id="b0d915da43"><g filter="url(#7d498ab2a5)"><g filter="url(#597a047f03)" transform="matrix(0.686965, 0, 0, 0.686965, 129.024653, 30.968632)"><image x="0" y="0" width="500" xlink:href="data:image/png;base64,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" height="500" preserveAspectRatio="xMidYMid meet"/></g></g></mask><image x="0" y="0" width="500" xlink:href="data:image/png;base64,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" id="05e8503f51" height="500" preserveAspectRatio="xMidYMid meet"/></defs><g clip-path="url(#a1fce98c6a)"><path fill="#ffffff" d="M 0.015625 0 L 595.484375 0 L 595.484375 848.957031 L 0.015625 848.957031 Z M 0.015625 0 " fill-opacity="1" fill-rule="nonzero"/><path fill="#ffffff" d="M 0.015625 0 L 595.484375 0 L 595.484375 842.207031 L 0.015625 842.207031 Z M 0.015625 0 " fill-opacity="1" fill-rule="nonzero"/><path fill="#ffffff" d="M 0.015625 0 L 595.484375 0 L 595.484375 842.207031 L 0.015625 842.207031 Z M 0.015625 0 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#0459d8348f)"><g mask="url(#b0d915da43)"><g transform="matrix(0.686965, 0, 0, 0.686965, 129.024653, 30.968632)"><image x="0" y="0" width="500" xlink:href="data:image/png;base64,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" height="500" preserveAspectRatio="xMidYMid meet"/></g></g></g></svg>',
                      height: 40,
                      width: 270,
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
                      text: 'Podsumowanie wyników',
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
                  text: student.name.split(', ').reverse().join(' '),
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
      text: '',
      margin: [0, 13],
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
                  text: 'znajomość słownictwa,\n podstawy czytania\n i rozumienie ze słuchu',
                  margin: [0, 22, 0, 0],
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
                  border: [true, true, true, true],
                  fillColor: null,
                  text: `${student.oralVocabulary}`,
                  alignment: 'center',
                  margin: [0, 14, 0, 0],
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
                  text: `${student.oralInteraction}`,
                  alignment: 'center',
                  margin: [0, 14, 0, 0],
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
                  text: `${student.assignmentsCompleted}`,
                  alignment: 'center',
                  margin: [0, 14, 0, 0],
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
                  text: `${student.assignmentsAvgGrade}`,
                  alignment: 'center',
                  margin: [0, 14, 0, 0],
                  fontSize: 10,
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
                  margin: [36, 28, 0, 0],
                  text: 'A=100-90%\nB=89-75%\nC=74-60%\nD=59-45%\nE=44-30%\nF=29-0%',
                  alignment: 'left',
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
                  // key text received template string with teacher argument  and
                  text: `${teacher.replace(' ', '\n')}\n\n nauczyciel`,
                  alignment: 'center',
                  margin: [0, 20, 0, 0],
                  fontSize: 12,
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
                  text: `${student.description.substring(0, 370)}`,
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
      svg: '<svg style="color: rgb(223, 1, 143);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M229.7,141.7l-96,96a8.1,8.1,0,0,1-11.4,0l-96-96a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,32,128H72V48A16,16,0,0,1,88,32h80a16,16,0,0,1,16,16v80h40a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,229.7,141.7Z" fill="#f9aed9"></path></svg> ',
      height: 30,
      width: 30,
      margin: [group ? group.value : 0, 10, 0, 0],
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
                  fillColor: yellow,
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
