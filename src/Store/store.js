import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./slices/list.js";
import detailReducer from "./slices/detail.js"

// Redux Store 생성 및 설정
export default configureStore({
  reducer: {
    // slice라고 하는 최소단위 파일을 불러오는 곳(import하여 넣어준다.)
    list: listReducer,
    detail: detailReducer
  }
});
