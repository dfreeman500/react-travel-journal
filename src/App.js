import logo from './logo.svg';
import './App.css';
import data from "./data"
import Navbar from "./components/Navbar"

import Card from "./components/Card"



function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.id} // need something unique anytime you are using .map. React uses the key prop create a relationship between the component and the DOM element
        {...item} //could also do item={item} and then use props.item.id in Card.js
      />
    )
  })

  return (
    <div className="enclosure">
      <Navbar/>
      <div className="cards">
      {cards}
      </div>
    </div>
  )
}

  export default App;
