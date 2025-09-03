import { useState } from 'react';
import './App.css';

function App() {
  const title = '제목';
  
  const titleStyle = {
    color: 'blue',
    fontSize: '1rem'
  };
  
  const [count, setCount] = useState(0);                                
  
  const incrementCount = () => {
    {setCount((prev) => prev + 1)}
  }
  const decrementCount = () =>
    {setCount((prev)=> {
      if(prev > 0) {
      return prev - 1
      } else {
        return 0;
      }}
    )}

    const [account, setAccount] = useState('홍길동');


    const [userInfo, setUserInfo] = useState({
      name: '홍길동', age: 20, gender: 'M'
    });
    const addAge = () => {
      const copy = {...userInfo};
      copy.age += 1;
      setUserInfo(copy);
    }

    
    // const test = {
    //   state: null,
    //   setter: (param) => {
    //     if(this.state !== param) {
    //       this.state = param;
    //       //리랜더링 처리
    //     } else {
    //       return;
    //     }
    //   },
    //   useState(data) {
    //     this.state = data;
    //     return [this.state, this.setter];
    //   }
    // };
    // const [a, b] = [this.state, this.setter]

  return (
    <>
      <span>{`${userInfo.name} : ${userInfo.age} : ${userInfo.gender}`}</span>
      <button type='button' onClick={addAge}>나이 증가</button>

      <br />
      <br />
      <input type="text" value={account} onChange={(e) => 
        {setAccount(e.target.value) }}/>
      <p>{account}</p>

      <p>{count}</p>
      <button type='button' onClick={incrementCount}>+</button>
      <button type='button' onClick={decrementCount}>-</button>

      <h1 className='title' style={{color: 'red', fontSize: '3rem'}}>{title}</h1>
      <h1 style={titleStyle}>{title}</h1>


    </>
  )
}

export default App;
