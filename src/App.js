import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './components/header.js';
import Hero from './components/hero.js';
import About from './components/about.js'


function App() {
  return (
    <div className='App'>
      <header>
        <Header></Header>
      </header>
        <main>
          <Hero></Hero>
        </main>

        <section>
          <About></About>
        </section>

    </div>
  );
}

export default App;
