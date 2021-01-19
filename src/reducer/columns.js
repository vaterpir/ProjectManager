const initialState = {
  column1: {
    id: 'column1',
    title: 'column1',
    childs: ['card1', 'card3'],
  },
  column2: {
    id: 'column2',
    title: 'column2',
    childs: ['card2'],
  },
  column3: {
    id: 'column3',
    title: 'column3',
    childs: ['card4'],
  },
};

export const columnsReducer = (columns = initialState, action) => {
  switch (action.type) {
    default:
      return columns;
  }
};
