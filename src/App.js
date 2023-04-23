
import './App.css';
import { ApiService } from './axios/request';

function App() {
  const request=async()=>{
 const result= await  ApiService.get('test')


  }
  return (
    <div className="App">
     <button onClick={request}>request</button>
    </div>
  );
}

export default App;
