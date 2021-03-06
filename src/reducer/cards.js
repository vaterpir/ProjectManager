import {
  ADD_CARD,
  DELETE_CARD,
  EDIT_TITLE_CARD,
  ADD_TASK_CARD,
  DELETE_TASK_CARD,
  ADD_COMMENT_CARD,
  DELETE_COMMENT_CARD,
  EDIT_DESCRIPTION_CARD,
} from '../constants/cards';

const initialState = {
  card1: {
    id: 'card1',
    description: 'Подробное описание карточки 1 ... ',
    parent: 'column1',
    title: 'Карточка 1',
    tasks: ['task1', 'task5', 'task6'],
    comments: ['com1', 'com2'],
  },
  card2: {
    id: 'card2',
    description: 'Подробное описание карточки 2 ...',
    parent: 'column2',
    title: 'Карточка 2',
    tasks: ['task2'],
    comments: [],
  },
  card3: {
    id: 'card3',
    description: 'Подробное описание карточки 3 ...',
    parent: 'column1',
    title: 'Карточка 3',
    tasks: ['task3'],
    comments: [],
  },

  card4: {
    id: 'card4',
    description: 'Подробное описание карточки 4...  ',
    parent: 'column3',
    title: 'Карточка 4',
    tasks: ['task4'],
    comments: [],
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
          description: '...',
          parent,
          tasks: [],
          comments: [],
        },
      };
      return { ...newCards };
    }

    case EDIT_TITLE_CARD: {
      const card = { ...cards[action.id] };
      return { ...cards, [card.id]: { ...card, title: action.title } };
    }

    case DELETE_CARD: {
      const { [action.deleteId]: del, ...newCards } = cards;
      return { ...newCards };
    }
    case ADD_TASK_CARD: {
      const { childID, parentId } = action;
      const card = { ...cards[parentId] };
      const newCards = {
        ...cards,
        [parentId]: { ...card, tasks: [...card.tasks, childID] },
      };
      return { ...newCards };
    }

    case DELETE_TASK_CARD: {
      const { deleteId, parentId } = action;
      const newTasks = cards[parentId].tasks.filter(
        (task) => task !== deleteId,
      );
      const newCards = {
        ...cards,
        [parentId]: {
          ...cards[parentId],
          tasks: newTasks,
        },
      };
      return { ...newCards };
    }

    case ADD_COMMENT_CARD: {
      const { childID, parentId } = action;
      const card = { ...cards[parentId] };
      const newCards = {
        ...cards,
        [parentId]: { ...card, comments: [...card.comments, childID] },
      };
      return { ...newCards };
    }

    case DELETE_COMMENT_CARD: {
      const { deleteId, parentId } = action;

      const newComments = cards[parentId].comments.filter(
        (comment) => comment !== deleteId,
      );

      const newCards = {
        ...cards,
        [parentId]: {
          ...cards[parentId],
          comments: newComments,
        },
      };
      return { ...newCards };
    }

    case EDIT_DESCRIPTION_CARD: {
      const card = { ...cards[action.id] };
      return { ...cards, [card.id]: { ...card, description: action.title } };
    }

    default:
      return cards;
  }
};
