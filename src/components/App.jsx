import React ,{useState} from 'react'
import Input from './input.jsx'

function App() {
  const [listItem, setListItem] = useState([])
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input 
       setitem = {setListItem} />
    <div>
        <ul>
          {listItem.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App
