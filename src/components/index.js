import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProject } from '../../actions/actions';
import styles from './app';

import { noAction, sortByDateProjects } from '../../helpers';
import { Header } from './header';

const mapState = (state) => ({
  projects: state.projectsState.projects,
});

const mapDispatch = (dispatch) => ({
  addProject: bindActionCreators(addProject, dispatch),
});

const App_Connect = ({ projects = {}, addProject = noAction }) => {
  const [projectName, setProjectName] = useState('');


  return (
    <div className={styles.app}>
      <Header />
      <ul>
        {sortByDateProjects(projects).map(([id, content]) => {
          const {
            minutes = '--',
            hour = '--',
            day = '--',
            year = '----',
            month = '--',
          } = content.creationDate;
          return (
            <li key={id}>
              title:{content.title} creation date: {minutes}:{hour}, {day}.
              {month}.{year}
            </li>
          );
        })}
      </ul>
      <input
        value={projectName}
        onChange={({ target }) => setProjectName(target.value)}
      />
      <button onClick={() => addProject(projectName)}>Добавить проект</button>
    </div>
  );
};
export const App = connect(mapState, mapDispatch)(App_Connect);
