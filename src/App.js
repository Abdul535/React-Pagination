import React, { useState, useEffect } from 'react';
import Todos from './components/Todos';
import axios from 'axios';

import DoublyLL from './utils/DoublyLL';
import './App.css';

const App = () => {
  const [t, setT] = useState(null);
  const [todos, setTodos] = useState(new DoublyLL());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');


      let newarr=[];
      for(let i=0; i<data.length; i=i+10){
          newarr = data.slice(i,i+10);
          todos.addTailNode(newarr);
          newarr=[];
      }
      setLoading(false);
      setT(todos.head.data)
    };
    setTodos(todos);
    fetchTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function nextPage(){
    setT(todos.next().data)
  }
  function prevPage(){
    setT(todos.prev().data)
  }

  return (
    <>
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <td className='table-dark'>Id</td>
            <td className='table-dark'>User Id</td>
            <td className='table-dark'>Title</td>
            <td className='table-dark'>Status</td>
          </tr>
        </thead>
      {loading ?
       <h1>Loading...</h1> : 
        <tbody>
          <Todos posts={t} />
        </tbody>
      }
      </table>
      <div className='buttons'>
          <button onClick={prevPage}>Prev</button>
          <button onClick={nextPage}>Next</button>
      </div>
    </div>
    </>
  );
};

export default App;
