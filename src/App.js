import './App.scss';
import './Reset.scss';
import Header from './comp/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <Home />
    </>
  );
}

export default App;
