import { useEffect, useState } from 'react';
import './ProductDetail.css'

function ProductDetail(props) {
  // const product = props.product;
  const {product, setModalFlg} = props;
  
  // Lifecycle Hooks
  // mount에서 최초 1회만 실행'[]빈 배열로 전달'
  // useEffect(() => {
    //   console.log('Mount!!')
    // }, []);
    
    // unmount전에 실행 : Clean up Function 작성
    useEffect(() => {
        console.log('Mount!!')
      
        // Clean up Function
        return () => {
            console.log('UnMount');
          }
        }, []);
        
      const [cnt, setCnt] = useState(0);
      // state가 변할때마다 실행, mount후 최초 1회 실행
      useEffect(() => {
        console.log('test');
      }, [cnt])
      
        
  return (
    <>
      <div className="detail-modal" onClick={() => {setModalFlg(false)}}>
      {/* <div className="detail-modal"> */}
        <div className="detail-box">
          <div className="detail-img" style={{backgroundImage: `url('${product.img}')`}}></div>
          <p className="detail-title">{product.title}</p>
          <p className="detail-info">{product.info}</p>
          <p className="detail-price">{product.price}</p>
          <p>{cnt}</p>
          <button type='button' onClick={() => {setCnt(prev => prev + 1)}}>+</button>
        </div>
      </div>
    </>
  )
}

export default ProductDetail