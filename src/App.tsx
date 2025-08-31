import {
  Contact,
  FloatingButton,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from './components';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='flex-grow'>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;
