import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import colorLabel from 'styles';
import styles from './cardDetail.scss';
import { AddChecklist } from './addChecklist';
import { Checklist } from './checklist';

export const CardDetail = () => (
  <div className={styles.profile}>
    <div className="content">Detail</div>
  </div>
);

/* <div className="wrapper-title">
          <div className="title">{title}</div>
          <div className="labels">
            {labelsAll
              .filter((label) => labels.indexOf(label.id) !== -1)
              .map((label) => (
                <div
                  className={classNames(colorLabel[label.className], 'label')}
                  key={label.id}
                >
                  {label.text}
                </div>
              ))}
          </div>
          <div className="date">{String(date)}</div>
        </div>

        <div className="description">
          <h2 className="description-title">Description:</h2>
          <div className="description-text">{description}</div>
        </div>

        <AddChecklist cardId={cardId} />

        {checklists
          .filter((checklist) => checklist.parent === cardId)
          .map((checklist) => (
            <Checklist
              key={checklist.id}
              title={checklist.title}
              checklistID={checklist.id}
            />
          ))} */
