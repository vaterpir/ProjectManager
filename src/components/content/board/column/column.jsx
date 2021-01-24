import React from 'react';
import { useSelector } from 'react-redux';
import { CustomInputTitle } from 'helpers/titleInput/titleInput';
import { deleteColumn, editTitleColumn, addChildColumn } from 'actions/columns';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { deleteChildBoard } from 'actions/boards';
import { AddItemInput } from 'helpers/addItemInput/addItemInput';
import { addCard } from 'actions/cards';
import { useHistory } from 'react-router-dom';
import { Card } from './card';
import styles from './column.scss';

export const Column = ({ id = '' }) => {
  const column = useSelector((state) => state.columns[id]);

  const history = useHistory();

  const handleDetail = (cardId = '') => () => {
    history.push(`/boards/${column.parent}/${column.id}/${cardId}`);
  };

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
            <Card id={card} />
            <button
              type="button"
              className="btn-more"
              onClick={handleDetail(card)}
            >
              <ExitToAppOutlinedIcon />
            </button>
          </div>
        ))}
        <AddItemInput
          element={column}
          actionAddChild={addChildColumn}
          actionAddItem={addCard}
        />
      </div>
    </div>
  );
};
