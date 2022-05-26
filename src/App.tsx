import './App.css';
import UserInput from './Components/UserInput';
// Giving App the type of a Function Component
const App: React.FC = () => {
  return (
    <div className='App'>
      <h1 className='heading'>pomodoro tasks</h1>
      <UserInput />
    </div>
  )
}

export default App;
