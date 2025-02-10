import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './components/header.js';
import Hero from './components/hero.js';
import About from './components/about.js'
import Services  from './components/services.js';
import Gallery from  './components/gallery.js'


function App() {
  return (
    <div className='App'>
      <header>
        <Header />
      </header>
        <main>
          <Hero />
        </main>

        <section>
          <About />
        </section>

        <section>
          <Services />
        </section>

        <section>
          <Gallery />
        </section>

    </div>
  );
}

export default App;
