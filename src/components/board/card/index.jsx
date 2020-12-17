import React from 'react';

export const Card = ({ title = '', cardId = '' }) => (
  <div className="cards" key={cardId}>
    <input type="text" name="" id="" value={title} />
  </div>
);
