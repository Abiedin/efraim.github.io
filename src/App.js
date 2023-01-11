import React, { useState, useEffect } from 'react';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Shmot from './components/books-tora/Shmot';
import Start from './components/Start';
import Beresheet from './components/books-tora/Beresheet';
import Vaikra from './components/books-tora/Vaikra';
import Bemitbar from './components/books-tora/Bemitbar';
import Dvarim from './components/books-tora/Dvarim';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BackToUp from './components/scroll-to-top-text/BackToUp';
import Sidebar from './components/SideBar/Sidebar';
import { styled, ThemeProvider } from '@mui/system';
import { theme } from './theme/theme';

const Books = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  [theme.breakpoints.down('tablet')]: {},
  [theme.breakpoints.down('laptop')]: {},
}));

const MainStart = styled('div')(({ theme }) => ({
  width: '80%',
  [theme.breakpoints.down('desktop')]: {},
  [theme.breakpoints.down('laptop')]: {
    
  },
  [theme.breakpoints.down('tablet')]: {
    width: '100%',
   
  },
}));

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <Header />
          <div className="main">
            <Sidebar />
            <Books>
                <MainStart>
                  <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/tora/beresheet" element={<Beresheet />} />
                    <Route path="/tora/beresheet/:id" element={<Beresheet />} />
                    <Route path="/tora/schmot" element={<Shmot />} />
                    <Route path="/tora/vaikra" element={<Vaikra />} />
                    <Route path="/tora/bemitbar" element={<Bemitbar />} />
                    <Route path="/tora/dvarim" element={<Dvarim />} />
                  </Routes>
                </MainStart>
            </Books>
          </div>
          <BackToUp />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
