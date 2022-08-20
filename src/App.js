import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Programs from './Pages/Programs/Programs';
import ProgramDetails from './Pages/ProgramDetails/ProgramDetails';
import Login from './Pages/Login/Login';
import StudentSignUp from './Pages/SignUp/StudentSignUp';
import PartnerSignUp from './Pages/SignUp/PartnerSignUp';
import CollegeSignUp from './Pages/SignUp/CollegeSignUp';
import StudentPanel from './Pages/StudentPanel/StudentPanel';
import InstitutePanel from './Pages/InstitutePanel/InstitutePanel';
import PartnerPanel from './Pages/PartnerPanel/PartnerPanel';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student-signup" element={<StudentSignUp />} />
      <Route path="/partner-signup" element={<PartnerSignUp />} />
      <Route path="/college-signup" element={<CollegeSignUp />} />
      <Route path="/program-details/:id" element={<ProgramDetails />} />

      <Route path="/dashboard/student" element={<StudentPanel />} />
      <Route path="/dashboard/institute" element={<InstitutePanel />} />
      <Route path="/dashboard/partner" element={<PartnerPanel />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
