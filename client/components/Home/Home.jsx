import React from 'react';
import LoginContainer from '../Login/LoginContainer.jsx';
import SignupContainer from '../Signup/SignupContainer.jsx';

import Jumbo from './Jumbo.jsx';
import Benefits from './Benefits.jsx';
import { Demo1, Demo2 } from './Demo.jsx';
import Developers from './Developers.jsx';
import GetStarted from './GetStarted.jsx';
import Footer from './Footer.jsx';

const Home = props => (
  <div>
    <Jumbo {...props} />
    <Benefits />
    <Demo1 />
    <Demo2 />
    <Developers />
    <GetStarted />
    <Footer />

    <LoginContainer />
    <SignupContainer />
  </div>
);

export default Home;
