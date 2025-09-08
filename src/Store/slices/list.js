import { createSlice } from "@reduxjs/toolkit";

// 'list' 상태관리 slice 생성 및 설정
const list = createSlice({
  name: 'list', // slice 명(일반적으로 파일명과 변수 name 모두 동일하게 함)
  initialState: { // 상태관리 할 state를 정의하는(모아두는) 영역
    cnt: 0, // state의 (이름: 초기값)으로 입력
  },
  reducers: { // state의 상태를 변화시키는 actions를 정의하는 영역
    addCnt(state) { // reducers에서 initialState로 바로 접근하게 된다.
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -= 1;
    },
    changeCnt(state, action) {
      // state : 'initialState'의 정보를 담고 있는 파라미터
      // action : 외부에서 전달 된 값을 담는 파라미터
      //    > action.payload : 전달 된 값에 접근할 수 있는 프로퍼티
      //    > action.type : 전달 된 타입에 접근할 수 있는 프로퍼티
      state.cnt = action.payload;
    }
  }
});

// 정의한 Actions 내보내기 : 컴포넌트에서 사용
export const {addCnt, changeCnt, minusCnt} = list.actions;

// Reducer 내보내기 : store에서 사용
export default list.reducer;