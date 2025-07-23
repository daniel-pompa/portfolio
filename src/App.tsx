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
        <section id='hero' className='scroll-mt-32'>
          <Hero />
        </section>
        <section id='skills' className='scroll-mt-32'>
          <Skills />
        </section>
        <section id='projects' className='scroll-mt-32'>
          <Projects />
        </section>
        <section id='contact' className='scroll-mt-32'>
          <Contact />
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;
