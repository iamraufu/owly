import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Programs from './Pages/Programs/Programs';
import ProgramDetails from './Pages/ProgramDetails/ProgramDetails';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/program-details/:id" element={<ProgramDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
