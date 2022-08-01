import React, {useState} from 'react'; 
import Button from '../../components/button';
import './style.css'

const Main = () => {
  const[inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

const handleClickAdd = () =>{
    setTodoList([...todoList, inputValue])
    setInputValue('')
}

const handleClear = () =>{
  setTodoList([])
}
 
const handleClickDone = () =>{

}


  return (
    <div className='container'>
      <h1 className='title'>Add to Tasks</h1>
      <div className='form-group'>
        <input type="text" className='todo-input' 
        placeholder='add to new tasks' 
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)} 
        />   
        <button className='btn-add' 
        onClick={handleClickAdd}
        >+</button>
      </div>
      <div className='todo-List' >
        <ul>
          {
          todoList.map((todo) => 
            <li className='list-item' onClick={handleClickDone}>{todo}</li>
           )
          }
        </ul>
  
      </div>
      <div className='footer'>
      you have {todoList.length} pending tasks
        <Button onClick={handleClear}>
         Clear All
        </Button>
      </div>
    </div>
  );
}

export default Main;      

