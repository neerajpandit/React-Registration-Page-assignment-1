//import { useForm } from 'react-hook-form';
import './App.css';


function App() {
  return (
    //<div className="App">
      <div className='container'>
      <form>
        <div className="register">
            <div className="col-1">
                <h2>Certificate of Appreciation</h2>
            <form id='form' className="flex flex-col">
                    <input type="text" placeholder='name'/>
                    <input type="text" placeholder='email'/>
                    <input type="text" placeholder='session type example:workshop'/>
                    <input type="text" placeholder='title'/>
                    <h3>date</h3>
                    <input type="date" placeholder='date'/>
                    <button className="btn">Send certificate email</button>
                </form>
            </div>
        </div>

        </form>
    </div>    
   // </div>
  );
}

export default App;
