import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk(
  'list/getList', // thunk 고유명 : 'Slice명/actionType(thunk명)'
  async () => {
    const url = 'https://picsum.photos/v2/list?page=10&limit=10';
    
    // AJAX처리, 서버의 특정 API 호출
    const response = await axios.get(url);

    // API 응답 반환, 'fulfilled'라는 액션의 payload로 전달
    return response.data;
  }
);

export const getTest = createAsyncThunk(
  'list/getTest',
  async () => {
    const url = 'https://picsum.photos/v2/list?page=10&limit=1';
    
    const response = await axios.get(url);

    return response.data;
  }
);