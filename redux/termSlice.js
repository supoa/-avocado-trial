import { createSlice } from "@reduxjs/toolkit";

export const termSlice = createSlice({
  name: "terms",
  initialState: {
    terms: {},
    background: {},
    paymentMethod: {},
    gallery: [],
    products: [],
  },

  reducers: {
    setTerms: (state, action) => {
      state.terms = action.payload;
    },
    setBackground: (state, action) => {
      state.background = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.background = action.payload;
    },

    setGallery: (state, action) => {
      state.gallery = action.payload;
    },

    setGalleryImage: (state, action) => {
      state.gallery = [action.payload, ...state.gallery];
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setProductImage: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
  },
});

export const {
  setTerms,
  setBackground,
  setPaymentMethod,
  setGallery,
  setGalleryImage,
  setProducts,
  setProductImage,
} = termSlice.actions;

export default termSlice.reducer;
