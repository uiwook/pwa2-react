import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';
import { addCnt, changeCnt, minusCnt } from '../Store/slices/detail';
import { useState } from 'react';

function Detail() {
  const dispatch = useDispatch();
  const cnt = useSelector(state => state.detail.cnt);
  
const  [inputNum, setInputNum] = useState(0);

const convertAndSetNumber = (e) => {
  // isNaN : 형번환 했을 때 숫자가 아니다 = true, 형변환 했을 때 숫자다 = false
  if(!isNaN(e.target.value)) {
    setInputNum(parseInt(e.target.value));
  } else {
    console.error('숫자 아니다.');
  }
}
  return (
    <>
      <h1>상세 페이지</h1>
      <p>{cnt}</p>
      <input type="number" onChange={convertAndSetNumber}/>
      <button type='button' onClick={() => {dispatch(changeCnt(inputNum))}}>입력</button>
      <button type='button' onClick={() => {dispatch(addCnt())}}>+</button>
      <button type='button' onClick={() => {dispatch(minusCnt())}}>-</button>
    </>
  )
}

export default Detail;

// import { useDispatch, useSelector } from 'react-redux';
// import './Detail.css';
// import { inputCnt, minusNum, plusNum } from '../Store/slices/detail.js';
// import { useState } from 'react';

// function Detail() {
//   let cnt = useSelector(state => state.detail.cnt)
//   const dispatch = useDispatch();
  
//   const [inputValue, setInputValue] = useState(0);
//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   }
  
  
//   return (
//     <>
//     {/*  */}
//       <h1>상세 페이지</h1>
//       <p>{cnt}</p>
//       <input type="number" value={inputValue} onChange={handleChange}/>
//       <button type="button" onClick={() => {dispatch(inputCnt(inputValue))}        
//       }>입력</button>
//       <button type="button" onClick={() => {dispatch(plusNum())}}>+</button>
//       <button type="button" onClick={() => {dispatch(minusNum())}}>-</button>
//     </>
//   )
// }

// export default Detail;