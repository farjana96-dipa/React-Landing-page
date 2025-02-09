import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './components/header.js';
import Hero from './components/hero.js';


function App() {
  return (
    <div className='App'>
      <header>
        <Header></Header>
      </header>
        <main>
          <Hero></Hero>
        </main>

    </div>
  );
}

export default App;
