import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';  // ADD THIS
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>My Todos</h1>
      <TodoForm />     {/* ADD THIS */}
      <TodoList />
    </div>
  );
}

export default App;