import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import NavBars from './components/navbar/NavBars';
import Features from './Pages/features/Features';
import Home from './Pages/home/Home';
import PricingPage from './Pages/pricing/PricingPage';

function App() {
  return (
    <Router>
<NavBars/>
<Routes>
<Route path="pricing" element={<PricingPage/>}/>
<Route path="/" element={<Features/>}/>
<Route path="projects" element={<PricingPage/>}/>
<Route path="pricing" element={<PricingPage/>}/>


</Routes>


<Footer/>
      </Router>
  );
}

export default App;
