import {
  ADD_CARD,
  ADD_CHILD_CARD,
  DELETE_CARD,
  EDIT_TITLE_CARD,
  DELETE_CHILD_CARD,
} from '../constants/cards';

const initialState = {
  card1: {
    id: 'card1',
    description:
      'description1 description4 description4 description4 description4 description4 description4 description4',
    parent: 'column1',
    title: 'card1',
    comments: ['com1', 'com2'],
  },
  card2: {
    id: 'card2',
    description: 'description2',
    parent: 'column2',
    title: 'card2',
    checklist: 'checklist2',
    comments: ['com3'],
  },
  card3: {
    id: 'card3',
    description: 'description3',
    parent: 'column1',
    title: 'card3',
    checklist: 'checklist3',
    comments: ['com4'],
  },

  card4: {
    id: 'card4',
    description:
      'description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 description4 ',
    parent: 'column3',
    title: 'card4',
    checklist: 'checklist4',
    comments: ['com5'],
  },
};

export const cardsReducer = (cards = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      const { newId, title, parent } = action;
      const newCards = {
        ...cards,
        [newId]: {
          id: newId,
          title,
          parent,
          childs: [],
        },
      };
      return { ...newCards };
    }

    case EDIT_TITLE_CARD: {
      const board = { ...cards[action.id] };
      return { ...cards, [board.id]: { ...board, title: action.title } };
    }

    case DELETE_CARD: {
      const { [action.deleteId]: del, ...newCards } = cards;
      return { ...newCards };
    }

    default:
      return cards;
  }
};
