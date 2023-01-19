import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editstaff } from '../redux/StaffReducer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function EditStaff() {
  let {id} = useParams()
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let data = useSelector((state)=>state.staff.staffs)
  let [staffName,setStaffName] = useState("")
  let [staffEmail,setStaffEmail] = useState("")
  let [staffMobNo,setStaffMob] = useState("")
  let [staffCourse,setStaffCourse] = useState("")
  let [staffBatch,setStaffBatch] = useState("")

  useEffect(()=>{
    if (id){
      console.log(staffName);
      setStaffName(data[id].staffName)
      setStaffEmail(data[id].staffEmail)
      setStaffMob(data[id].staffMobNo)
      setStaffCourse(data[id].staffCourse)
      setStaffBatch(data[id].staffBatch)
    }
    else {
      navigate('/staffdashboard')
    }
  },[])

  function handlerSubmit () {
    dispatch(editstaff({index:id,data:{staffName,staffEmail,staffMobNo,staffCourse,staffBatch}}))
    navigate("/staffdashboard")
  }

  return <div className="componentName">
  <h2 >Edit Staff</h2>
  <div className="form">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Staff Name</Form.Label>
          <Form.Control type="text" value={staffName} placeholder="Enter Name" onChange={(e)=>setStaffName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Email address</Form.Label>
          <Form.Control type="email" value={staffEmail} placeholder="Enter email" onChange={(e)=>setStaffEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Mobile Number</Form.Label>
          <Form.Control type="text" value={staffMobNo} placeholder="Enter Mobile No" onChange={(e)=>setStaffMob(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Select Staff</Form.Label>
          <Form.Select aria-label="Default select example" defaultValue={staffCourse} onChange={(e)=>setStaffCourse(e.target.value)}>
            <option value="0">Open this select menu</option>
            <option value="HTML5">HTML5</option>
            <option value="CSS3">CSS3</option>
            <option value="Java Script">Java Script</option>
            <option value="MERN Stack">MERN Stack</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formLabel">Batch Number</Form.Label>
          <Form.Select aria-label="Default select example" defaultValue={staffBatch} onChange={(e)=>setStaffBatch(e.target.value)}>
            <option value="0">Open this select menu</option>
            <option value="B38WET">B38WET</option>
            <option value="B38WDT">B38WDT</option>
            <option value="B41WET">B41WET</option>
            <option value="B41WDT">B41WDT</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={()=>{handlerSubmit()}}> Submit </Button>
      </Form>
   </div>
</div>
}

export default EditStaff
