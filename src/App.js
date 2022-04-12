import {useState} from "react";
import './App.css';

function App() {
  const [toDo, setToDo] = useState("");
  //Todo 갑슬 넣을 배열
  const [toDos, setToDos] = useState([]); 

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    //preventDefault()  빈 값일때 해당 submit 동작 안하도록 하는 함수
    event.preventDefault();   
    if(toDo === "") {
      // Todo 값이 비어있을경우 submit 함수 종료
      return ;
    }
    setToDos((currentToDos) => [toDo, ...currentToDos]);  //... 표기는 해당 배열의 값만 대입 시켜줌
    // 빈 값으로 초기화
    
    setToDo("");      
  };
  console.log(toDos);
  return (
    <div >
      <h1>나의 할일 목록 ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        {/**create Input Todo box*/}
        <input 
        onChange={onChange} 
        value={toDo} type="text" 
        placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
