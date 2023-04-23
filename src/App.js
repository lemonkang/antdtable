
import './App.css';
import { ApiService } from './axios/request';

function App() {
  const request=async()=>{
 const result= await  ApiService.get('test')
 console.log(result);

  }
  return (
    <h2>
      test
    </h2>
  );
}

export default App;
