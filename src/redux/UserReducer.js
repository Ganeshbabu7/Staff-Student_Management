import { createSlice } from '@reduxjs/toolkit'

export const studentsSlice = createSlice({
  name: 'students',
  initialState: {
   students : [
                {
                    studentName : "Ganesh",
                    dob : "03-03-1996",
                    email : "eganeshbabu7@gmail.com",
                    mobNo : "9976762127",
                    batchNo : "B28WET",
                    staffName : "Nagarajan",
                },
                {
                    studentName : "Babu",
                    dob : "03-03-1996",
                    email : "eganeshbabu7@gmail.com",
                    mobNo : "9976762127",
                    batchNo : "B41WDT",
                    staffName : "Manikandan",
                }
            ]
  },
  reducers: {
    addStudent : (state, action)=>{
        state.students.push(action.payload)
    },
    editStudent : (state, action)=>{
        state.students.splice(action.payload.index,1,action.payload.data)
    },
    deleteStudent : (state,action)=>{
        state.students.splice(action.payload.index,1)
    }
  }
})

export const {addStudent,editStudent,deleteStudent} = studentsSlice.actions

export default studentsSlice.reducer