import React, { useState } from 'react'
import Header from "../components/Header";
import { ITodo } from '../interfaces/todo'

function Todo() {
  const [todo, setTodo] = useState<any>('')
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const todoListLength = todoList.length
  const todoLineThrough = todoList.filter((todo) => todo.isLineT === true).length
  
  const addTodo = () => {
    setTodoList([...todoList, {
      id: Date.now(),
      value: todo,
      isLineT: false
    }])
    setTodo('')
  }

  const toggleLineThrough = (id: number) => {
    const newTodoList = todoList.map((todo) => {
      if(todo.id === id) {
        return {...todo, isLineT: !todo.isLineT}
      }
      return todo
    })
    setTodoList(newTodoList)
  }

  const deleteTodo = (id :number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  return (
    <div className="todo">
      <Header title="Todo List" arrowL={true}/>
      <div className="todo-search">
        <input className="todo-input" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Search" />
        <div onClick={addTodo} style={{ color: '#EF4638', fontWeight: 700, cursor: 'pointer' }}>Add</div>
      </div>
      <div className="todo-list">
        <p>There are { todoLineThrough } tasks left out of { todoListLength } tasks</p>
        <ul>
          {
            todoList.map((todo) => {
              return (
                <div style={{ display : 'flex', jusityContent: 'space-between', width: '100%', alignItems: 'center'}}>
                <li 
                  className={todo.isLineT ? 'line-through' : ''} 
                  key={todo.id} 
                  onClick={() => toggleLineThrough(todo.id)}
                >{ todo.value }</li>
                <span style={{ color: 'red', cursor: 'pointer'}} onClick={() => deleteTodo(todo.id)}>x</span>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Todo