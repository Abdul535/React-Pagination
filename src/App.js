import React, { useState, useEffect } from 'react';
import  Todos from './components/Todos';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(res.data);
      setLoading(false);
    };

    fetchTodos();
  }, []);

  // Get current posts
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div >
      {/* <h1 className='text-primary mb-3'>My Blog</h1> */}
      <table className='table'>
        <thead>
          <tr>
            <td>Id</td>
            <td>User Id</td>
            <td>Title</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <Todos posts={currentTodos} loading={loading} />
        </tbody>
      </table>
      <Pagination
        todosPerPage={todosPerPage}
        totalPosts={todos.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
