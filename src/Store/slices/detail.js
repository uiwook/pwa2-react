// import { createSlice } from "@reduxjs/toolkit";


// const detail = createSlice({
//   name: 'detail',
//   initialState: {
  //     cnt: 0,
  //   },
//   reducers: {
//     plusNum(state) {
//       state.cnt += 1;
//     },
//     minusNum(state) {
//       state.cnt -= 1;
//     },
//     inputCnt (state, action) {
//       state.cnt = action.payload;
//     },

//   }
// });

// export const {plusNum, minusNum, inputCnt, inputNum} = detail.actions;
// export default detail.reducer;


import { createSlice } from "@reduxjs/toolkit";

const detail = createSlice({
  name: 'detail',
  initialState : {
    cnt: 0
  },
  reducers: { // 액션은 state를 변경해야 하기 때문에 state는 반드시 있어야 한다.
    addCnt(state) {
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -= 1;
    },
    changeCnt(state, action) {
      const regex = /^[0-9]+$/;
      if(regex.test(action.payload)) {
        state.cnt = parseInt(action.payload);
      } else {
        console.log('넘버 아님', action.payload);
      }
    },
    // action의 내부구조
      // const action = {
        // payload: 0,
        // type: 'number' => payload가 문자라면 string
      // }
  }
});

export const {addCnt, changeCnt, minusCnt} = detail.actions;
export default detail.reducer;