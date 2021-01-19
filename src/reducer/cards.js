const initialState = {
  card1: {
    id: 'card1',
    title: 'card1',
    childs: ['ch1', 'ch3'],
  },
  card2: {
    id: 'card2',
    title: 'card2',
    childs: ['ch2'],
  },
  card3: {
    id: 'card3',
    title: 'card3',
    childs: ['ch4'],
  },

  card4: {
    id: 'card4',
    title: 'card4',
    childs: [],
  },
};

export const cardsReducer = (cards = initialState, action) => {
  switch (action.type) {
    default:
      return cards;
  }
};
