const initialState = {
  members: {
    228: {
      firstName: 'Petr',
      secondName: 'Ivanov',
      participateInProjects: [2077, 2000],
    },
    512: {
      firstName: 'Ivan',
      secondName: 'Smirnov',
      participateInProjects: [2000],
    },
  },
  idNumbersMembers: [],
};

export const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
