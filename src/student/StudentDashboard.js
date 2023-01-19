import React from 'react'
import Table from 'react-bootstrap/Table'
import {useSelector, useDispatch} from 'react-redux'
import { deleteStudent } from '../redux/UserReducer'
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  let data = useSelector((state)=>state.student.students);
  let dispatch = useDispatch();
  let navigate = useNavigate()

  return <div className="componentName">
  <h2 >Student Dashboard</h2>
  <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Student Name</th>
          <th>Date of Birth</th>
          <th>Email Address</th>
          <th>Mobile Number</th>
          <th>Batch Number</th>
          <th>Staff Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {
            data.map((e,i)=>{
              return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.studentName}</td>
                <td>{e.dob}</td>
                <td>{e.email}</td>
                <td>{e.mobNo}</td>
                <td>{e.batchNo}</td>
                <td>{e.staffName}</td>
                <td onClick={()=>navigate(`/editstudent/${i}`)}><i className="fa-solid fa-pen-to-square"></i></td>
                <td onClick={()=>dispatch(deleteStudent({index:i}))}><i className="fa-solid fa-trash"></i></td>
              </tr>
            })
          }
      </tbody>
    </Table>
</div>
}

export default StudentDashboard