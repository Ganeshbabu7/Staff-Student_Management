import React from 'react'
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux'
import { deletestaff } from '../redux/StaffReducer'
import { useNavigate } from 'react-router-dom'

function StaffDashboard() {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let data = useSelector((state)=>state.staff.staffs)
  
  return <div className="componentName">
  <h2 >Staff Dashboard</h2>
  <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Staff Name</th>
          <th>Email Address</th>
          <th>Mobile Number</th>
          <th>Course Expertise</th>
          <th>Batch Handling</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
            {
              data.map((e,i)=> {
                 return <tr key={i}>
                  <td> {i+1} </td>
                  <td> {e.staffName} </td>
                  <td> {e.staffEmail} </td>
                  <td> {e.staffMobNo} </td>
                  <td> {e.staffCourse} </td>
                  <td> {e.staffBatch} </td>
                  <td onClick={()=>navigate(`/editstaff/${i}`)}><i className="fa-solid fa-pen-to-square"></i></td>
                  <td onClick={()=>{dispatch(deletestaff({index:i}))}}><i className="fa-solid fa-trash"></i></td>
                </tr>
              })
            }
      </tbody>
    </Table>
</div>
}

export default StaffDashboard