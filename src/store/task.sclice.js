import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    add: (state, action) => {
      state.tasks.push(action.payload);
    },
    markAsDone: (state, action) => {
      const found = state.tasks.filter(
        (element) => element.id === action.payload
      );
      const index = state.tasks.indexOf(found[0]);
      state.tasks[index]["done"] = true;
    },
    updateTask :(state,action)=>{
      console.log(action)
      const found = state.tasks.filter(
        (element) => element.id === action.payload.id
      );

       const index = state.tasks.indexOf(found[0]);
     state.tasks[index].title = action.payload.data.title
     state.tasks[index].description = action.payload.data.description



    }
  },
});

// Action creators are generated for each case reducer function
export const { add, markAsDone ,updateTask } = taskSlice.actions;

export default taskSlice.reducer;
