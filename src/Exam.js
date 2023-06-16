// 경로: src/App.js

import React, { useState } from 'react';
// import Button from './Buttons';

import './App.css';
import Button from './Button';


//  User 컴포넌트를 분리해서 구현
function User(props) {
    return (
        <div className="user-card">
            <div>{props.user.age}살 - </div>
            <div>{props.user.name}</div>
			//2. 버튼을 컴포넌트로 바꾸기
            <Button onClick={() => props.handleDelete(props.user.id)}>
                삭제하기
            </Button>
        </div>
    );
}

const Exam = () => {
    const [users, setUsers] = useState([
        { id: 1, age: 30, name: '산책' },
        { id: 2, age: 24, name: '운동' },
        { id: 3, age: 21, name: '취미활동' },
        { id: 4, age: 29, name: '식사' },
    ]);
    const [name, setName] = useState(''); // <-- 유저의 입력값을 담을 상태
    const addUserHandler = () => {
        const newUser = {
            id: users.length + 1,
            age: 30,
            name: name,
        };

        setUsers([...users, newUser]);
    };
    const deleteUserHandler = (id) => {
        const newUserList = users.filter((user) => user.id !== id);
        setUsers(newUserList);
    };
    return (
        <div className="app-container">
            <input
                placeholder="이름을 입력해주세요"
                value={name}
                // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
                onChange={(e) => setName(e.target.value)}
            />
            {users.map((user) => {
                return <User user={user} key={user.id} handleDelete={deleteUserHandler} />;
            })}
			//3. 버튼을 컴포넌트로 바꾸기
            <Button onClick={addUserHandler}>추가하기</Button>
        </div>
    );
};

export default Exam;