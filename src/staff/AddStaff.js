import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import { addstaff } from '../redux/StaffReducer';
import { useDispatch } from 'react-redux';

function AddStaff() {
  let [staffName, setStaffName] = useState();
  let [staffEmail, setStaffEmail] = useState();
  let [staffMobNo, setStaffMobNo] = useState();
  let [staffCourse, setStaffCourse] = useState();
  let [staffBatch, setStaffBatch] = useState();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let handleSubmit = ()=>{
    dispatch(addstaff({staffName,staffEmail,staffMobNo,staffCourse,staffBatch}))
    navigate('/staffdashboard')
  }

  return <div className="componentName">
  <h2 >Add Staff</h2>
  <div className="form">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Staff Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={e=>setStaffName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setStaffEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile No" onChange={(e)=>setStaffMobNo(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Select Staff</Form.Label>
          <Form.Select aria-label="Default select example" defaultValue={'0'} onChange={(e)=>setStaffCourse(e.target.value)}>
            <option value="0">Open this select menu</option>
            <option value="HTML5">HTML5</option>
            <option value="CSS3">CSS3</option>
            <option value="Java Script">Java Script</option>
            <option value="MERN Stack">MERN Stack</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Batch Number</Form.Label>
          <Form.Select aria-label="Default select example" defaultValue={'0'} onChange={(e)=>setStaffBatch(e.target.value)}>
            <option value="0">Open this select menu</option>
            <option value="B38WET">B38WET</option>
            <option value="B38WDT">B38WDT</option>
            <option value="B41WET">B41WET</option>
            <option value="B41WDT">B41WDT</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={()=>{handleSubmit()}}> Add Staff </Button>
      </Form>
   </div>
</div>
}

export default AddStaff
