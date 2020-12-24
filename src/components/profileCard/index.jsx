import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import colorLabel from 'styles';
import styles from './profileCard';

export const ProfileCard = ({ match: { params = {} } = {} }) => {
  const { id: cardId = 'card 1' } = params;
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
                  sd
                </div>
              ))}
          </div>
          <div className="date">{String(date)}</div>
        </div>

        <div className="description">
          <div className="description-title">Description:</div>
          <div className="description-text">{description}</div>
        </div>

        <div className="wrapper-addChecklist">
          <div className="addChecklist-input">
            <input type="text" name="" id="" />
          </div>
          <button type="button" className="addChecklist-button">
            Добавить ч/л
          </button>
        </div>
      </div>
    </div>
  );
};
