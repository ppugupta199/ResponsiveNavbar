import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KeyFeature from './pages/KeyFeature';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Demo from './pages/Demo';
import Navbar from './navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/feature' Component={KeyFeature} />
          <Route path='/pricing' Component={Pricing} />
          <Route path='/testimonials' Component={Testimonials} />
          <Route path='/demo' Component={Demo} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
