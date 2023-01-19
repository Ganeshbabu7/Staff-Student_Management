import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return <>
    <div className="sidebar">
        <div className="userName">
            <h2>Hi Ganesh Babu</h2>
            <h6>Good Morning...</h6>
        </div>
        <ul className="tabs">
            <Link to="/dashboard"><li className="user" style={{textDecoration: 'none'}}><i class="fa-sharp fa-solid fa-chart-line"></i>Dashboard</li></Link>
            <Link to='/staffdashboard'><li className="user"><i className="fa-solid fa-chalkboard-user"></i>Staff Details</li></Link>
            <Link to='/addstaff'><li className="icons"><i class="fa-sharp fa-solid fa-plus"></i>Add Staff</li></Link>
            <Link to='/studentdashboard'><li className="user"><i className="fa-solid fa-user"></i>Student Details</li></Link>
            <Link to='/addstudent'><li className="icons"><i class="fa-sharp fa-solid fa-plus"></i>Add Student</li></Link>
        </ul>
    </div>
  </>
}

export default SideBar

