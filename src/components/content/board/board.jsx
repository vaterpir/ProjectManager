import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { CustomInputTitle } from 'helpers/titleInput';
import { addChildBoard, deleteBoard, editTitleBoard } from 'actions/boards';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { Column } from './column';
import { AddItemInput } from '../../../helpers/addItemInput/addItemInput';
import { addColumn } from '../../../actions/columns';
import styles from './board.scss';

export const Board = () => {
  const { boardId } = useParams();
  const board = useSelector((state) => state.boards[boardId]);
  const history = useHistory();

  const handleBack = () => {
    history.push('/ProjectManager');
  };
  return board ? (
    <div className={styles.board}>
      <div className="header">
        <button type="button" className="btn-back" onClick={handleBack}>
          <ArrowBackRoundedIcon />
        </button>
        <CustomInputTitle
          element={board}
          actionEdit={editTitleBoard}
          actionDelete={deleteBoard}
          url="/ProjectManager"
        />
      </div>
      <div className="content">
        {board.childs?.map((child) => (
          <Column key={child} id={child} />
        ))}
        <div className="wrapper-newColumn">
          <div className="newColumn">
            <AddItemInput
              element={board}
              actionAddChild={addChildBoard}
              actionAddItem={addColumn}
              placeholder="Добавить колонку"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h2 className={styles.error}>ERROR: the page is missing</h2>
  );
};
