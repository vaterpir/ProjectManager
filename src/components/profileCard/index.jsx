import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import colorLabel from 'styles';
import styles from './profileCard';
import { AddChecklist } from './addChecklist';
import { Checklist } from './checklist';

export const ProfileCard = ({ match: { params = {} } = {} }) => {
  const { id: cardId = 'card 1' } = params;
  const checklists = useSelector((state) => state.checklists);
  const cards = useSelector((state) => state.cards);
  const card = cards.filter(({ id }) => id === cardId)[0];
  const labelsAll = useSelector((state) => state.labels);
  const {
    title, description, date, labels,
  } = card;

  return (
    <div className={styles.profile}>
      <div className="content">
        <div className="wrapper-title">
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
          ))}
      </div>
    </div>
  );
};
