import moment from 'moment';
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_TITLE_COMMENT,
} from '../constants/comments';

const initialState = {
  com1: {
    id: 'com1',
    parent: 'card1',
    title: 'Комментарий номер 1',
    date: '0',
  },
  com2: {
    id: 'com2',
    parent: 'card1',
    title: 'Комментарий номер 2',
    checked: false,
    date: '1',
  },
};

export const commentsReducer = (comments = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const { newId, title, parent } = action;
      const newComments = {
        ...comments,
        [newId]: {
          id: newId,
          title,
          parent,
          date: moment().lang('ru').format('DD.MM.YYYY, h:mm a'),
        },
      };
      return { ...newComments };
    }

    case EDIT_TITLE_COMMENT: {
      const comment = { ...comments[action.id] };
      return { ...comments, [comment.id]: { ...comment, title: action.title } };
    }

    case DELETE_COMMENT: {
      const { [action.deleteId]: del, ...newComments } = comments;
      return { ...newComments };
    }

    default:
      return { ...comments };
  }
};
