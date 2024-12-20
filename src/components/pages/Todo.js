import React,{useState} from 'react'

const TodoApp = ()=> {

const[task,setTask]=useState("");
const[tasks,setTasks]=useState([]);   
const[completed,setCompleted]=useState(true);
const handleAddTask=(e)=>{
    e.preventDefault();
    if(task.trim()){
     setTasks([...tasks,{id:Date.now().toString(),name:task,completed:false}]);
     setTask('');
}
};
function toggleCompleted(id){
  setTasks(
    tasks.map((t)=>t.id===id?{...t,completed: !t.completed}: t)
  )
}
const filterTask=tasks.filter((t)=>completed||!t.completed)
  return (
    <div>
      <h1>Todo Application</h1>
      <form onSubmit={handleAddTask}>
      <input type='text' placeholder="New Task..?" value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button type='submit'>add</button>
      </form>
      <button onClick={()=>setCompleted(!completed)}>
        {completed ?"Hide":"Show"}
      </button>
      <ul>
        {filterTask.map((t)=>(<li key={t.id}>
          <span style={{textDecoration: t.completed ?'line-through':'none',color:t.completed?'red':'green',}}>{t.name}</span>
          <button onClick={()=>toggleCompleted(t.id)}>
            {t.completed?'Undo':'completed'}
          </button>
        </li>))}
      </ul>
    </div>
  )
}

export default TodoApp;
