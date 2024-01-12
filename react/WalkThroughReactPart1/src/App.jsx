import './App.css';
import Button from './components/Button';
import Person from './components/Person';
import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <>
    <div>
        <Header title="Welcome To Mysite" />
      </div>
      <div>
        <List items={['c++', 'javascript', 'React']}/>
      </div>
      <div>
        <Person name="John" age="30" />
      </div>
      <div>
        <Button text = "Please Click" onClick={() => console.log("Button is clicked")
         }/>
      </div>
      
      
    </>
  );
}

export default App;
