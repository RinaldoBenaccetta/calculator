export const layout = [
    // result
    {
        tag: 'div',
        class: 'calculator__result',
        id: 'result',
        parentId: 'main',
        text: '',
    },
    // containers
    {
        tag: 'div',
        class: 'calculator__top-buttons',
        id: 'top-buttons',
        parentId: 'main',
        text: '',
    },
    {
        tag: 'div',
        class: 'calculator__main-buttons',
        id: 'main-buttons',
        parentId: 'main',
        text: '',
    },
    {
        tag: 'div',
        class: 'calculator__operators',
        id: 'operator-buttons',
        parentId: 'main',
        text: '',
    },
    // top buttons
    {
        tag: 'button',
        class: 'calculator__top-buttons__open-parenthesis',
        id: 'open-parenthesis',
        parentId: 'top-buttons',
        text: '(',
    },
    {
        tag: 'button',
        class: 'calculator__top-buttons__closing-parenthesis',
        id: 'closing-parenthesis',
        parentId: 'top-buttons',
        text: ')',
    },
    {
        tag: 'button',
        class: 'calculator__top-buttons__percent',
        id: 'percent',
        parentId: 'top-buttons',
        text: '%',
    },
    {
        tag: 'button',
        class: 'calculator__top-buttons__ac',
        id: 'ac',
        parentId: 'top-buttons',
        text: 'AC',
    },
    // main buttons
    {
        tag: 'button',
        class: 'calculator__main__buttons__9',
        id: '9',
        parentId: 'main-buttons',
        text: '9',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__8',
        id: '8',
        parentId: 'main-buttons',
        text: '8',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__7',
        id: '7',
        parentId: 'main-buttons',
        text: '7',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__6',
        id: '6',
        parentId: 'main-buttons',
        text: '6',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__5',
        id: '5',
        parentId: 'main-buttons',
        text: '5',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__4',
        id: '4',
        parentId: 'main-buttons',
        text: '4',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__3',
        id: '3',
        parentId: 'main-buttons',
        text: '3',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__2',
        id: '2',
        parentId: 'main-buttons',
        text: '2',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__1',
        id: '1',
        parentId: 'main-buttons',
        text: '1',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__0',
        id: '0',
        parentId: 'main-buttons',
        text: '0',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__dot',
        id: 'dot',
        parentId: 'main-buttons',
        text: '.',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__equal',
        id: 'equal',
        parentId: 'main-buttons',
        text: '=',
    },
    // operators
    {
        tag: 'button',
        class: 'calculator__main__buttons__divide',
        id: 'divide',
        parentId: 'operator-buttons',
        text: '÷',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__multiply',
        id: 'multiply',
        parentId: 'operator-buttons',
        text: 'x',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__substract',
        id: 'substract',
        parentId: 'operator-buttons',
        text: '-',
    },
    {
        tag: 'button',
        class: 'calculator__main__buttons__add',
        id: 'add',
        parentId: 'operator-buttons',
        text: '+',
    },
];
