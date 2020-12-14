import { ADD_PROJECT } from '../../constants';
import { getID } from '../../helpers';

const initialState = {
  projects: {
    2077: {
      title: 'first project',
      creationDate: new Date(),
      members: {
        228: ['task 1', 'task 2'],
      },
    },
    2000: {
      title: 'second project',
      creationDate: new Date(),
      members: {
        228: ['task 1'],
        512: ['task 1', 'task 2', 'task 3'],
      },
    },
  },
  idNumbersProjects: [2077, 2000],
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT: {
      const date = new Date();
      const [minutes, hours, month, day, year] = [
        date.getMinutes(),
        date.getHours(),
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
      ];
      return {
        ...state,
        projects: {
          ...state.projects,
          [getID()]: {
            title: action.title,
            creationDate: {
              minutes: String(minutes).length === 1 ? `0${minutes}` : minutes,
              hour: String(hours).length === 1 ? `0${hours}` : hours,
              month: String(month).length === 1 ? `0${month}` : month,
              day: String(day).length === 1 ? `0${day}` : day,
              year: String(year).length === 1 ? `0${year}` : year,
              date,
            },
            members: {},
          },
        },
      };
    }
    default:
      return state;
  }
};
