import React from 'react';
import { useParams } from 'react-router-dom';
import { AddItemInput } from '../../../../helpers/addItemInput/addItemInput';

import styles from './checkList.scss';

export const CheckList = () => {
  const param = useParams();
  console.log(param);
  return (
    <div className={styles.checkList}>
      <div className="header-checklist">Список задач:</div>
      <div className="content-checklist">
        <div className="wrapper-add-checklist">
          <AddItemInput />
        </div>
      </div>
    </div>
  );
};
