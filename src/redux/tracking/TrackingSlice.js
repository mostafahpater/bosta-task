import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getTrackingWithNum = createAsyncThunk(
    "tracking/getTrackingWithNum",
    async (num, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
        console.log(num)
      try {
        const response = await axios.get(`https://tracking.bosta.co/shipments/track/${num}`);
        console.log(response)
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  const initialState = {
    trackingData: [],
    loading: false,
    error: false,
  };
  const trackingSlice = createSlice({
    name: "tracking",
    initialState,
    reducers: {},
    extraReducers: {
  
      // Get course by id 
      [getTrackingWithNum.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [getTrackingWithNum.fulfilled]: (state, action) => {
        state.loading = false;
        state.trackingData = action.payload;
  
      },
      [getTrackingWithNum.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    }
})
export default trackingSlice.reducer;