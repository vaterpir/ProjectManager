import React from 'react';

export const Checklist = ({ title = 'no title' }) => {
  const c = 1;

  return (
    <div className="checklist">
      <h2>{title}</h2>
    </div>
  );
};
