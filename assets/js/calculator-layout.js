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
];
