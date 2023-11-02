import { toast } from "react-toastify";
import { v4 } from "uuid";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tagsList: [
    { tag: "HTML", id: v4() },
    { tag: "My Personal Group", id: v4() },
    { tag: "Phython Notes", id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTags: (state, { payload }) => {
      if (state.tagsList.find(({ tag }) => tag === payload.tag)) {
        toast.warning("Tag already exists");
      } else {
        state.tagsList.push(payload);
        toast.info("New tag is added");
      }
    },
    deleteTags: (state, { payload }) => {
      state.tagsList = state.tagsList.filter(({ id }) => id !== payload);
      toast.info("Tag is deleted");
    },
  },
});

export const { addTags, deleteTags } = tagsSlice.actions;
export default tagsSlice.reducer;
