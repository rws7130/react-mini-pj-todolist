import logo from './logo.svg';
// import './App.css';
import { styled } from 'styled-components';
import Exam from './Exam';
import { useState } from 'react';
import Button from "./Button"




// 형태-의미-상태'

const PageWrap = styled.div`
/* 별도의 익스텐션  */

@media (min-width: 800px) and (max-width: 1200px) {
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
}
@media (min-width: 800px){
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
}
@media(max-width: 1200px) { 
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;   
}


 font-size: 16px;
 nav.page-nav{
  width: 100%;
  height: 50px;
  font-size:20px;
  padding: 10px;
 }
    >header.page-header{
      height: 50px;
      >.header-add{
      >span{ 
       margin-right: 4px;
      
    >button.page-btn {
      margin-left: 30px;

       }
    }
        Button{
          margin-left :3px ;
          height: 21.2px;
          position: relative;
          top: 2px;
         }
       }
      }
  
  >.todo-title{
    display: flex;
    margin-left:60px;
    color: blue;
    font-weight: 800;
    font-size:40px;
  }
  >.todo-title2 {
    display: flex;
    margin-left:60px;
    color: blue;
    font-weight: 800;
    font-size:40px;
  }
  >.content-wrap{
    display: flex;
  }
`
// User start
const UserCard = styled.div`
  display: flex;
  margin: 50px;
  border: 4px solid salmon;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 300px;
    height: 50px;
  >.page-content{
    position: relative;
    top: 20px;
   >button{
    margin: 2px;  
   } 
  }
`;

function User(props) {
  // const [viewCalendar, setViewCalendar] = useState(true)

  return (

    <UserCard>

      <div>{props.user.name}</div>
      <div>{props.user.content}</div>
      {/* */}
      <div className='page-content'>
        <Button onClick={() => props.handleDelete(props.user.id)}>
          {/* && setViewCalendar(true)} */}
          삭제하기
        </Button>
        <Button onClick={() => props.doneUserHandler(props.user.id)}>
          {/* && setViewCalendar(false)} */}
          {/* {onClick ? '완료' : '취소'} */} 
          {/* 완료 */}
          {props.user.isDone ? '취소' : '완료'} 
        </Button>
      </div>
    </UserCard>
  );
}



function App() {
  const [users, setUsers] = useState([
    { id: 1, name: '산책', content: '가볍게 산책', isDone: true },
    { id: 2, name: '운동', content: '축구', isDone: false },
    { id: 3, name: '취미활동', content: '음악', isDone: false },
    { id: 4, name: '식사', content: '오늘 저녁은 피자!', isDone: false },
  ]);
  const [name, setName] = useState(''); // <-- 유저의 입력값을 담을 상태
  const [content, setContent] = useState(''); // <-- 유저의 내용값을 담을 상태
  console.log('content=', content);

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      name: name,
      content: content,
      isDone: false
      // isDone 변수가 없기에 변수로 지정x
    };

    setUsers([...users, newUser]);
    // 이름 todos로 수정 
  };
  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  const doneUserHandler = (id) => {
    const newUserList = users.map((user) => {
      if (user.id === id) {
        user.isDone = !user.isDone;
      }
      return user;
    });
    setUsers(newUserList);
  };
  // 토글 
  // const handleClick = () => {
  //   setToggle(!toggle)
  // };
  return (
    <PageWrap>
      <nav className='page-nav'>My Todo List</nav>
      <header className='page-header'>
        <div className='header-add'>
          <span>제목</span>
          <input type="text" value={name}
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setName(e.target.value)} />


          <span>내용</span>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
          {/* <button className='page-btn'>추가하기</button> */}
          <Button onClick={addUserHandler}>추가하기</Button>
        </div>
      </header>
      <div className='todo-title'>To do List!!</div>
      <div className='content-wrap'>
        {users.map((user) => {
          if (user.isDone === false) {
            return <User user={user} key={user.id} handleDelete={deleteUserHandler} doneUserHandler={doneUserHandler} />;
          }
        })}
        {/* 인자는 함수의 호출안에 들어가는값 */}
      </div>
      <div className='todo-title2'>Done List!! </div>
      {/* 토글링 */}
      <div className='content-wrap'>
        {users.map((user) => {
          if (user.isDone === true) {
            return <User user={user} key={user.id} handleDelete={deleteUserHandler} doneUserHandler={doneUserHandler} />;
          }
        })}
      </div>
      {/* {viewCalendar ? <Calendar /> : <Timeline />} */}
    </PageWrap>

  );
}

export default App;
