import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import { CardDetail } from './cardDetail';
import { Main } from './main';
import { Search } from './search';
import styles from './app.scss';

export const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => setOpenDrawer(open);

  return (
    <Router>
      <div className={styles.app}>
        <nav className="wraper">
          <div className="header">
            <Link to="/">
              <div className="button">
                <HomeIcon />
                Доски
              </div>
            </Link>
            <div className="button" onClick={toggleDrawer(true)}>
              <SearchIcon />
              Search
            </div>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={toggleDrawer(false)}
            >
              <Search />
            </Drawer>
          </div>
        </nav>

        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/card_detail/:id" component={CardDetail} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
};
