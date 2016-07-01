import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../redux/store';

// Dispatched actions
import { loginUser, closeLoginModal } from '../../redux/actionCreators/login-actions';

import LoginModal from './LoginModal.jsx';

export const LoginContainer = props => (
  <LoginModal {...props} />
);

const mapStateToProps = state => {
  const { auth, modal } = state;
  const { isAuthenticated, errorMessage } = auth;
  const { isLoginOpen, isSignupOpen } = modal;

  return {
    isLoginOpen,
    isSignupOpen,
    isAuthenticated,
    errorMessage,
  };
};

const mapDispatchToProps = dispatch => ({
  hideLogin() {
    dispatch(closeLoginModal());
  },

  sendLogin(creds) {
    dispatch(loginUser(creds));
  },

  routeToMain() {
    history.push('/main');
    dispatch(closeLoginModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
