import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from './index.module.scss';
import Todolist from './pages/Todolist';
// import "./reset.module.scss"

class App extends Component {
  // constructor (props) {
  //   super(props);
  //   this.handleLoginClick = this.handleLoginClick.bind(this);
  //   this.handleLogoutClick = this.handleLogoutClick.bind(this);
  //   this.state = { isLoggedIn: false };
  // }

  // handleLoginClick () {
  //   this.setState({ isLoggedIn: true });
  // }

  // handleLogoutClick () {
  //   this.setState({ isLoggedIn: false });
  // }

  render () {
    return (
      <>
        <BrowserRouter>
          {/* <nav>
            <ul>
              {window.location.pathname === '/' ? (
                <li
                  onClick={this.handleLogoutClick}
                  className={styles.position}
                >
                  <Link className={styles.sign} to='/sign-up'>
                    Signup
                  </Link>
                </li>
              ) : (
                <li onClick={this.handleLoginClick} className={styles.position}>
                  <Link className={styles.sign} to='/'>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={SignInPage} />
          </Switch> */}
          <Route path='/' component={Todolist} />
        </BrowserRouter>
      </>
    );
  }
}
export default App;
