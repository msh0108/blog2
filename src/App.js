import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

let [글제목, 글제목변경] = useState(['남자 코트 추천' ,'강남 우동 맛집', '벚꽃 구경 핫플']);

let [날짜, 날짜변경] = useState(['17' ,'18', '19']);

let [따봉, 따봉변경] = useState(0);

let [따봉2, 따봉변경2] = useState([0, 0, 0]);

let [modal, modal변경] = useState(false);

let [title, title변경] = useState(0);

let [입력값, 입력값변경] = useState('');

//  function 제목바꾸기(){
//    var newArray = [...글제목]; 
//    newArray[0] = '여자 코트 추천'
//    글제목변경( newArray );
//  }

// function 제목정렬(){
//   var newArray = [...글제목]; 
//   newArray = newArray.sort();
//   글제목변경( newArray );
// }

let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className='black-nav'> {/* jsx */}
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ 제목정렬 }>버튼</button> */}
      {/* <div className='list'>
      <h3> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
      <p>2월 17일 발행</p>
      <hr/>
      </div>
      <div className='list'>
      <h3> { 글제목[1] } </h3>
      <p>2월 18일 발행</p>
      <hr/>
      </div>
      <div className='list'>
      <h3> { 글제목[2] } </h3>
      <p>2월 19일 발행</p>
      <hr/>
      </div> */}
      {/* <button onClick={ () => { modal변경(!modal) } }>버튼</button> */}

      {/* {
        글제목.map(function(글, i){
          return (
          <div className='list'>
          <h3> { 글 } <span onClick={ () => { 
                  let 따봉3 = [...따봉2];
                  따봉3[i]++;
                  따봉변경2(따봉3) } }>👍</span> {따봉2[i]} </h3>
          <p>2월 19일 발행</p>
          <hr/>
          </div>
          )
        })
      } */}

      {
        글제목.map(function(글, i){
          return (
          <div className='list' key={i}>
          <h3 onClick={ () => {modal변경(true); title변경(i)} }> { 글제목[i] } <span onClick={ (e) => { e.stopPropagation(); 따봉변경(따봉+1)} }>👍</span> {따봉} </h3>
          <p>2월 17일 발행</p>
          <hr/>
          </div>
          )
        })
      }

      <input onChange={(e)=>{ 
        입력값변경(e.target.value); 
        console.log(입력값) }} />

      {
        modal === true
        ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/>
        : null
      }
      
      

    </div>
  );

}

function Modal(props){
  return (
    <div className='modal'>
        <h2>{props.글제목[props.title]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

export default App;
