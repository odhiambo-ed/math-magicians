import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Home';
import Calculates from './Calculates';
import Quote from './Quote';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculates" element={<Calculates />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}
