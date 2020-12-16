/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { styled } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import styles from './header';
import { ORANGE_COLOR, RED_COLOR, YELLOW_COLOR } from '../../constants';

const Search = styled(SearchIcon)({
  color: '#442434',
  background: '#acacac',
});

const Menu = styled(MenuIcon)({
  color: '#D27D2C',
  width: '40px',
  height: '40px',
});

const Add = styled(AddIcon)({
  color: '#4e4a4e',
  width: '18px',
  height: '18px',
});

const arrayMark = [
  {
    id: 0,
    color: YELLOW_COLOR,
  },
  {
    id: 1,
    color: RED_COLOR,
  },
  {
    id: 2,
    color: ORANGE_COLOR,
  },
];

export const Header = () => (
  <header className={styles.header}>
    <h1 className="title">32 </h1>
    <div className="search">
      <input placeholder="поиск" />
      {arrayMark.map(({ id }) => (
        <div className="label" key={id}> . </div>
      ))}
      <div className="label">
        <Add />
      </div>
      <Search className="searchIcon" />
    </div>
    <Menu />
  </header>
);
