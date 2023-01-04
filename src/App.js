import React from 'react';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Tora from './components/Tora';
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

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="main__text">
            <div className="main__start">
              <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/tora/beresheet" element={<Beresheet />} />
                <Route path="/tora/beresheet/:id" element={<Beresheet />} />
                <Route path="/tora/schmot" element={<Shmot />} />
                <Route path="/tora/vaikra" element={<Vaikra />} />
                <Route path="/tora/bemitbar" element={<Bemitbar />} />
                <Route path="/tora/dvarim" element={<Dvarim />} />
              </Routes>
            </div>
          </div>
        </div>
        <BackToUp />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
