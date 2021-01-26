import React from 'react';
import { useSelector } from 'react-redux';
import { CustomInputTitle } from 'helpers/titleInput/titleInput';
import { deleteColumn, editTitleColumn, addChildColumn } from 'actions/columns';
import { deleteChildBoard } from 'actions/boards';
import { AddItemInput } from 'helpers/addItemInput/addItemInput';
import { addCard } from 'actions/cards';
import { Card } from './card';
import styles from './column.scss';

export const Column = ({ id = '' }) => {
  const column = useSelector((state) => state.columns[id]);

  return (
    <div className={styles.column}>
      <div className="header-column">
        <CustomInputTitle
          element={column}
          actionEdit={editTitleColumn}
          actionDelete={deleteColumn}
          actiondeleteChild={deleteChildBoard}
          url={false}
        />
      </div>
      <div className="content-column">
        {column?.childs.map((card) => (
          <div className="cardBox" key={card}>
            <div type="button" className="btn-card">
              <Card id={card} />
            </div>
          </div>
        ))}
        <div className="add-card">
          <AddItemInput
            element={column}
            actionAddChild={addChildColumn}
            actionAddItem={addCard}
            placeholder="Добавить карточку"
          />
        </div>
      </div>
    </div>
  );
};
