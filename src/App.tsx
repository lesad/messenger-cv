import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Breakpoint } from 'react-socks';

import Header from './components/Header/Header';
import Recent from './containers/Recent/Recent';
import Chat from './containers/Chat/Chat';
import Menu from './components/Menu/Menu';
import Sidebar from './components/Sidebar/Sidebar';
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import Input from './components/Input/Input';
import RecentPinnedSwitch from './containers/Recent/RecentPinnedSwitch';
import Provider from './containers/Provider';
import GlobalStyles from './core/theme/GlobalStyles';
import { darkTheme, lightTheme } from './core/theme/themes';

const Heading = styled.h2`
  margin: 0;
  padding: 0.5rem 1.1rem;
  color: ${({ theme }) => theme.primary};

  font-weight: 700;
  font-size: 32px;
`;

const Grid = styled.main`
  display: grid;
  grid-template-areas:
      "menu title  search"
      "menu recent chat"
      "menu recent input" ;
  grid-template-rows:    4.2rem auto  5rem;
  grid-template-columns: 6rem   17rem auto ;

  box-sizing: border-box;
  height: 100vh;
`;

const App = () => {
  const [isRecent, setIsRecent] = useState(false);
  // TODO theme switcher
  const isDarkmode = false;

  return (
    <Provider>
      <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Breakpoint mobile only>
          <Header isRecent={isRecent} setIsRecent={setIsRecent} />
          <Heading>{isRecent ? 'Recent' : 'Conversation'}</Heading>
          {isRecent ? <Recent /> : <Chat /> }
          <Menu isRecent={isRecent} />
        </Breakpoint>

        <Breakpoint desktop only>
          <Grid>
            <Sidebar />
            <Title />
            <Search />
            <RecentPinnedSwitch />
            <Recent />
            <Chat />
            <Input />
          </Grid>
        </Breakpoint>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
