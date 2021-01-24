import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CustomInputTitle } from 'helpers/titleInput';
import { addChildBoard, deleteBoard, editTitleBoard } from 'actions/boards';
import { Column } from './column';
import styles from './board.scss';
import { AddItemInput } from '../../../helpers/addItemInput/addItemInput';
import { addColumn } from '../../../actions/columns';

export const Board = () => {
  const { boardId } = useParams();
  const board = useSelector((state) => state.boards[boardId]);

  return board ? (
    <div className={styles.board}>
      <div className="header">
        <CustomInputTitle
          element={board}
          actionEdit={editTitleBoard}
          actionDelete={deleteBoard}
          url="/home"
        />
      </div>
      <div className="content">
        {board.childs?.map((child) => (
          <Column key={child} id={child} />
        ))}
        <div className="newColumn">
          <div className="newTitle">
            <AddItemInput
              element={board}
              actionAddChild={addChildBoard}
              actionAddItem={addColumn}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h2 className={styles.error}>ERROR: the page is missing</h2>
  );
};
