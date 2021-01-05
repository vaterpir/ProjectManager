import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
// import { changeTitleCard, changeInputOnFocus, deleteCard } from 'actions';
import colorLabel from 'styles';
import { TitleInput } from 'helpers/titleInput';
import { useHistory } from 'react-router-dom';
import styles from './card';

export const CardMini = ({ cardId = '', title = '', labels = [] }) => {
  const dispatch = useDispatch();
  const labelsAll = useSelector((state) => state.labels);
  const [titleCard, setTitleCard] = useState(title);

  const history = useHistory();

  const openCard = () => {
    history.push(`/settings/${cardId}`);
  };

  return (
    <div className={styles.card}>
      <div className="wrapper-card">
        <TitleInput
          name={titleCard}
          setTitle={setTitleCard}
          openLink={openCard}
        />
        <button type="button" className="wrapper-colorLabel" onClick={openCard}>
          <span className={classNames('colorLabel')}>text</span>
          {/*           {labelsAll
            .filter((label) => labels.indexOf(label.id) !== -1)
            .map((label) => (
              <span
                className={classNames(
                  colorLabel[label.className],
                  'colorLabel',
                )}
                key={`${label.id}_card_label`}
              >
                {label.text}
              </span>
            ))} */}
        </button>
      </div>
    </div>
  );
};
