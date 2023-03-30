import { useState } from 'react';
import { Search, Button } from 'semantic-ui-react';
import AddForm from './AddForm';
import './App.css';


function App() {

  const OpenAddForm = () => {
    setPressed(!pressed)
  }
  const [pressed, setPressed] = useState(false);

  return (
    <div className="App">
      <Button color='violet' onClick={OpenAddForm}>+ Add</Button>
      <Search placeholder='Поиск' />

      {
        pressed ?
          <AddForm />
          :
          <></>
      }


    </div>
  );
}

export default App;
