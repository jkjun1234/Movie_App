import {useState} from "react";

function Todos() {
  const [toDo, setToDo] = useState("");
  //Todo 갑슬 넣을 배열
  const [toDos, setToDos] = useState([]); 

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    //preventDefault()  빈 값일때 해당 submit 기본동작(새로고침) 안하도록 하는 함수
    event.preventDefault();   
    if(toDo === "") {
      // Todo 값이 비어있을경우 submit 함수 종료
      return ;
    }
    setToDos((currentToDos) => [toDo, ...currentToDos]);  //... 표기는 해당 배열의 값만 대입 시켜줌
    // 빈 값으로 초기화
    
    setToDo("");      
  };
  //console.log(toDos);
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
      <hr/>
      <ul>
        { /**.map(item,index)함수는 배열 안의 요소를 한번에 원하는 값으로 채울 수 있다.  */
          // toDos 함수의 요소들을 item 매개변수를 이용해 값을 리턴(새로운 배열로만듬) 할 수 있다.
          // index 는 map함수에서 불러온 배열의 Key값을 주기 위함
        toDos.map((item, index) => (
          <li key={index}>{item}</li>
        )) 
        }
      </ul>
    </div>
  );
}

export default Todos;
