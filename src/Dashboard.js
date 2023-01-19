import React from 'react'
import { Link } from 'react-router-dom'
import CardComponent from './CardComponent'
import { useSelector } from 'react-redux'

function Dashboard() {
  let studentData = useSelector((data)=>data.student.students).length
  let staffData = useSelector((data)=>data.staff.staffs).length

  return <div className="componentName">
  <h2>Dashboard</h2>
    <div className='box'>
      <div className='innerBox'><CardComponent data={"No of Course Offered"} count={"5"}/></div>
      <div className='innerBox'><Link to='/staffdashboard'><CardComponent data={"Total No of Staff"} count={staffData}/></Link></div>
      <div className='innerBox'><Link to='/studentdashboard'><CardComponent data={"Total No of Students"} count={studentData}/></Link></div>
    </div>
</div>
}
export default Dashboard