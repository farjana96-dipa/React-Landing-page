import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './components/header.js';
import Hero from './components/hero.js';
import About from './components/about.js'
import Services  from './components/services.js';
import Gallery from  './components/gallery.js'
import Team from './components/team.js'
import Price from './components/price.js'
import Contact from './components/contact.js'
import Footer from './components/footer.js'

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

        <section>
          <Team />
        </section>

        <section>
          <Price />
        </section>

        <section>
          <Contact />
        </section>

        <footer>
          <Footer />
        </footer>

    </div>
  );
}

export default App;
