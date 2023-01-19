import './App.css';
import Dashboard from './Dashboard';
import SideBar from './SideBar';
import NavBar from './NavBar';
import AddStaff from './staff/AddStaff'
import StaffDashboard from './staff/StaffDashboard';
import EditStaff from './staff/EditStaff'
import AddStudent from './student/AddStudent'
import EditStudent from './student/EditStudent'
import StudentDashboard from './student/StudentDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>
        <NavBar/>
        <SideBar/>
      <Routes>
        <Route path="/addstaff" element={<AddStaff/>}/>
        <Route path="/editstaff/:id" element={<EditStaff/>}/>
        <Route path="/staffdashboard" element={<StaffDashboard/>}/>
        <Route path="/addstudent" element={<AddStudent/>}/>
        <Route path="/editstudent/:id" element={<EditStudent/>}/>
        <Route path="/studentdashboard" element={<StudentDashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Navigate to={'/dashboard'}/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;