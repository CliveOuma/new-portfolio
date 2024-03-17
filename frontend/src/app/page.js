import Hero from './components/Hero'
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievement from './components/Achievement';
import Skill from './components/Skill';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar/>
      <div className='container mt-24 mx-auto py-4 px-12'>
      <Hero/>
      <Achievement/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
    </main>
  );
}
