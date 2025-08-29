import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchItems, addItem, updateItem, deleteItem } from "../api/crudApi";

export const getItems = createAsyncThunk("crud/getItems", async () => {
  const res = await fetchItems();
  return res.data;
});

export const createItem = createAsyncThunk("crud/createItem", async (data) => {
  const res = await addItem(data);
  return res.data;
});

export const editItem = createAsyncThunk(
  "crud/editItem",
  async ({ id, data }) => {
    const res = await updateItem(id, data);
    return res.data;
  }
);

export const removeItem = createAsyncThunk("crud/removeItem", async (id) => {
  await deleteItem(id);
  return id;
});

const crudSlice = createSlice({
  name: "crud",
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editItem.fulfilled, (state, action) => {
        const idx = state.items.findIndex((i) => i.id === action.payload.id);
        if (idx > -1) state.items[idx] = action.payload;
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },
});

export default crudSlice.reducer;
