import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ISpecialist } from "../../types"
import * as api from '../../api'
  
interface AppState {
  data: ISpecialist[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  activeSlide: number;
}

const initialState = {
  data: [],
  status: 'idle',
  activeSlide: 0,
} as AppState

//making a request for data
export const fetchData = createAsyncThunk(
    "@@DATA/fetchDataList",
    async () => {
      const data = await api.getData();
      return data;
    }
)

//making a request for updating data
export const updateDoc = createAsyncThunk(
  "@@DATA/updateDoc",
  async (data:any) => {
    const { dayOfMonth, month, time, id } = data;
    await api.updateDocApi(dayOfMonth, month, time, id)
    return data
  }
);

const specialistsSclice = createSlice({
  name: '@@DATA',
  initialState,
  reducers: {
    //change the value of the active index obtained from action
    setActiveSlide(state, action) {
      state.activeSlide = action.payload;
    },
    setDate(state, action) {
      //destructuring values from the payload
      const { id, dayOfMonth, month } = action.payload;

      //finding an array that matches the passed id
      const existingUser = state.data.find(item => item.slideNumber === id)

      //if the array is found, change the values to those that were passed in the payload
      if (existingUser) {
        existingUser.meetings.date.dayOfMonth = dayOfMonth;
        existingUser.meetings.date.month = month;
      }
    },
    setTime(state, action) {
      //destructuring values from the payload
      const { id, time } = action.payload;

      //finding an array that matches the passed id
      const existingUser = state.data.find(item => item.slideNumber === id)

      //if the array is found, change the values to those that were passed in the payload
      if (existingUser) {
        existingUser.meetings.time = time;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
        //change the status value
        state.status = 'pending';
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
        //change the value to those that were passed in the payload
        state.data = action.payload;
        //change the status value
        state.status = 'succeeded';
    })
    builder.addCase(fetchData.rejected, 
        (state) => {
        //change the status value
        state.status = 'failed';
    });
    builder.addCase(updateDoc.fulfilled, (state, action) => {
      //destructuring values from the payload
      const { dayOfMonth, month, time, id } = action.payload;

      //finding an array that matches the passed id
      const existingUser = state.data.find((item) => item.id === id)

      //if the array is found, change the values to those that were passed in the payload
      if (existingUser) {
        existingUser.meetings.date.dayOfMonth = dayOfMonth;
        existingUser.meetings.date.month = month;
        existingUser.meetings.time = time;
      }
  })
  },
})

export const { setActiveSlide, setDate, setTime } = specialistsSclice.actions;

export default specialistsSclice.reducer;
