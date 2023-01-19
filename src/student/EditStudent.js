import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editStudent } from '../redux/UserReducer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function EditStudent() {
  let {id} = useParams();
  let data = useSelector((state)=>state.student.students)
  let [studentName,setStudentName] = useState("");
  let [dob,setStudentdob] = useState("");
  let [email,setStudentEmail] = useState("");
  let [mobNo,setStudentMobNo] = useState("");
  let [batchNo,setStudentBatchNo] = useState("");
  let [staffName,setStudentStaffName] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(()=>{
    if (id && id<data.length){
      setStudentName(data[id].studentName)
      setStudentdob(data[id].dob)
      setStudentEmail(data[id].email)
      setStudentMobNo(data[id].mobNo)
      setStudentBatchNo(data[id].batchNo)
      setStudentStaffName(data[id].staffName)
    }
    else{
      navigate("/studentdashboard")
    }
  },[])

  let handlerSubmit = ()=>{
    dispatch(editStudent({index:id,data:{studentName,dob,email,mobNo,batchNo,staffName}}))
    navigate("/studentdashboard")
  }

  return <div className="componentName">
    <h2 >Edit Student</h2>
    <div className="form">
      <Form>
          <Form.Group className="mb-3">
            <Form.Label className="formLabel">Student Name</Form.Label>
            <Form.Control type="text" value={studentName} placeholder="Enter Name" onChange={(e)=>setStudentName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="formLabel">Date of Birth</Form.Label>
            <Form.Control type="text" value={dob} placeholder="Enter DOB" onChange={(e)=>setStudentdob(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="formLabel">Email address</Form.Label>
            <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setStudentEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="formLabel">Mobile Number</Form.Label>
            <Form.Control type="text" value={mobNo} placeholder="Enter Mobile No" onChange={(e)=>setStudentMobNo(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="formLabel">Batch Number</Form.Label>
            <Form.Select aria-label="Default select example" defaultValue={batchNo} onChange={(e)=>setStudentBatchNo(e.target.value)}>
              <option value="0">Open this select menu</option>
              <option value="B38WET">B38WET</option>
              <option value="B38WDT">B38WDT</option>
              <option value="B41WET">B41WET</option>
              <option value="B41WDT">B41WDT</option>
            </Form.Select>
          </Form.Group>
        
          <Form.Group className="mb-3">
            <Form.Label className="formLabel">Select Staff</Form.Label>
            <Form.Select aria-label="Default select example" defaultValue={staffName} onChange={(e)=>setStudentStaffName(e.target.value)}>
              <option value="0">Open this select menu</option>
              <option value="Manikandan">Manikandan</option>
              <option value="Nagarajan">Nagarajan</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={()=>{handlerSubmit()}}> Submit </Button>
        </Form>
      </div>
  </div>
}

export default EditStudent