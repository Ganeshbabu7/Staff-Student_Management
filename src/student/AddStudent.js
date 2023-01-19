import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addStudent } from '../redux/UserReducer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AddStudent() {
  let [studentName,setStudentName] = useState();
  let [dob,setStudentdob] = useState();
  let [email,setStudentemail] = useState();
  let [mobNo,setStudentMobNo] = useState();
  let [batchNo,setStudentBatchNo] = useState();
  let [staffName,setStudentStaffName] = useState();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleSubmit = ()=>{
    dispatch(addStudent({studentName,dob,email,mobNo,batchNo,staffName}))
    navigate('/studentdashboard')
  }

  return <div className="componentName">
    <h2>Add Student</h2>
    <div className="form">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Student Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setStudentName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Date of Birth</Form.Label>
          <Form.Control type="text" placeholder="Enter DOB" onChange={(e)=>setStudentdob(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setStudentemail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile No" onChange={(e)=>setStudentMobNo(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Batch Number</Form.Label>
          <Form.Select aria-label="Default select example" defaultValue={'0'} onChange={(e)=>setStudentBatchNo(e.target.value)}>
            <option value="0">Open this select menu</option>
            <option value="B38WET">B38WET</option>
            <option value="B38WDT">B38WDT</option>
            <option value="B41WET">B41WET</option>
            <option value="B41WDT">B41WDT</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Select Staff</Form.Label>
          <Form.Select aria-label="Default select example" defaultValue={'0'} onChange={(e)=>setStudentStaffName(e.target.value)}>
            <option value="0">Open this select menu</option>
            <option value="Manikandan">Manikandan</option>
            <option value="Nagarajan">Nagarajan</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={()=>handleSubmit()}> Add Student </Button>
      </Form>
   </div>
</div>
}

export default AddStudent
