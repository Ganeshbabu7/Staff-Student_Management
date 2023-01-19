import { createSlice } from "@reduxjs/toolkit";

export const staffSlice = createSlice({
    name : "staffs",
    initialState : {
        staffs : [
            { staffName : "Nagarajan",
            staffEmail : "naga@gmail.com",
            staffMobNo : "8524197662",
            staffCourse : "React Js",
            staffBatch : "B38WET"
            },
            { staffName : "Manikandan",
            staffEmail : "money@gmail.com",
            staffMobNo : "9634158726",
            staffCourse : "React Js",
            staffBatch : "B41WDT"
            }
        ]
    },
    reducers : {
        addstaff : (state,action)=>{
            state.staffs.push(action.payload)
        },
        editstaff : (state,action)=>{
            state.staffs.splice(action.payload.index,1,action.payload.data)
        },
        deletestaff : (state,action)=>{
            state.staffs.splice(action.payload.index,1)
        }
    }
})

export const {addstaff,editstaff,deletestaff} = staffSlice.actions

export default staffSlice.reducer