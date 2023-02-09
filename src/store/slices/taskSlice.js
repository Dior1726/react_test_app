import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: 1,
      text: 'First text',
    },
    {
      id: 2,
      text: 'Second text',
    }
  ]
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload)
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload)
    }
  }
})

export const {addTask, removeTask} = taskSlice.actions
export default taskSlice.reducer