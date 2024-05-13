import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  wishlist: [],
  selectedMovie: {},
  errors: "",
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
      populatewishlist(state, action) {
        state.wishlist = action.payload;
      },
      selectwishlist(state, action) {
        state.selectedMovie = action.payload;
      },
      unselectwishlist(state) {
        state.selectedMovie = null;
      },
      deletewishlistReducer: (state, action) => {
        const payload = action.payload;
        state.wishlist = state.wishlist.filter(
          (wishlistItem) => wishlistItem.id !== payload
        );
      },
      clearWish : (state) =>{
        state.wishlist =[]
      },
      updatewishlistReducer: (state, action) => {
        const payload = action.payload;
        const index = state.wishlist.findIndex((item) => item.id === payload.id);
        if (index !== -1) {
          state.wishlist[index] = payload;
        }
      },
      addwishlistReducer: (state, action) => {
        const payload = action.payload;
        if(state.wishlist.find(movie=>payload.id==movie.id)){
            alert('movie exist')
         
        }else{
            state.wishlist.push(payload);
           
        }
      
      },
      setErrors(state, action) {
        state.errors = action.payload;
      },
    },
  });



  export const selectedwishlist = (state) => {
    console.log(state);
    return [state.wishlist.wishlist, state.errors];
  };

  export const addto=(data)=>async(dispatch)=>{
    try{
         dispatch(addwishlistReducer(data))
         return true
    }catch(error){
        dispatch(setErrors(error)); 
    }
  }

  export const removeitem=(item)=>(dispatch)=>{
    dispatch(deletewishlistReducer(item.id))
  }

  export const clear=()=>(dispatch)=>{
    dispatch(clearWish())
  }
  
  export const {
    populatewishlist,
    selectwishlist,
    unselectwishlist,
    setErrors,
    deletewishlistReducer,
    updatewishlistReducer,
    addwishlistReducer,
    clearWish,
  } = wishlistSlice.actions;
  export default wishlistSlice.reducer;
  