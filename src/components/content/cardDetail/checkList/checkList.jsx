import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addTask, deleteTask, editTitleTask } from 'actions/tasks';
import { sortByDate } from 'helpers/sortByDate';
import { CustomInputTitle } from 'helpers/titleInput/titleInput';
import { AddItemInput } from 'helpers/addItemInput/addItemInput';
import { addTaskCard, deleteTaskCard } from 'actions/cards';
import { CheckButton } from './checkButton';
import styles from './checkList.scss';

export const CheckList = () => {
  const { cardId } = useParams();
  const card = useSelector((state) => state.cards[cardId]);
  const tasksAll = useSelector((state) => state.tasks);
  const { tasks } = card;
  const checklist = sortByDate(tasks.map((task) => tasksAll[task]));

  return (
    <div className={styles.checkList}>
      <div className="header-checklist">Список задач:</div>
      <div className="content-checklist">
        <div className="wrapper-add-checklist">
          <AddItemInput
            element={card}
            actionAddItem={addTask}
            actionAddChild={addTaskCard}
          />
        </div>
        {checklist.length ? (
          <div className="wrapper-list-tasks">
            <ul className="list-tasks">
              {checklist.map((task) => (
                <li key={task.id} className="task-checklist">
                  <CheckButton checked={task.checked} id={task.id} />
                  <CustomInputTitle
                    element={task}
                    actionEdit={editTitleTask}
                    actionDelete={deleteTask}
                    actiondeleteChild={deleteTaskCard}
                    url="#"
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
