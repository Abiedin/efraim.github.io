import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './navigation/Navigation';
import Tora from './components/Tora';
import Shmot from './components/books-tora/Shmot';
import Tanah from './components/Tanah';
import Start from './components/Start';
import Beresheet from './components/books-tora/Beresheet';
import Vaikra from './components/books-tora/Vaikra';
import Bemitbar from './components/books-tora/Bemitbar';
import Dvarim from './components/books-tora/Dvarim';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BackToTopButton from './components/scroll-to-top-text/BackToTopButton'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="main">
          <Navigation />
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/tora" element={<Tora />} />
            <Route path="/tora/beresheet/:id" element={<Beresheet />} />
            <Route path="/tora/schmot" element={<Shmot />} />
            <Route path="/tora/vaikra" element={<Vaikra />} />
            <Route path="/tora/bemitbar" element={<Bemitbar />} />
            <Route path="/tora/dvarim" element={<Dvarim />} />
            <Route path="/tanah" element={<Tanah />} />
          </Routes>
        </div>
        <BackToTopButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
