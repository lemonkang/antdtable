
import './App.css';
import { ApiService } from './axios/request';

function App() {
  const request=async()=>{
 const result= await  ApiService.get('test')
 console.log(result);

  }
  return (
    <div className="App">
     <button onClick={request}>requestnaster</button>
     a
     b
     c
     d
    </div>
  );
}

export default App;
