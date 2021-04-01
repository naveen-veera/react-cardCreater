import logo from './logo.svg';
import './App.css';
import Form from './containers/Form/Form';
import { Component } from 'react';
import Card from './components/Card/Card';

class App extends Component {

  state = {
    cards : [],
  }

  addCard = (card) => {
    card['id'] = (Math.floor(Math.random() * 20) * Date.now())
    this.setState({cards : [...this.state.cards, card]});
  }

  removeCard = (cardToBeRemoved) => {
    let newCardSet = [...this.state.cards];
    newCardSet = newCardSet.filter(card => card.id !== cardToBeRemoved);
    
    this.setState({cards : newCardSet});
  }

  render() {
    return (
      <div className="container">
        <h1>Card Creator</h1>
        <Form add={this.addCard} />
        <hr />
        <h3>Cards</h3>
        <div className='CardContainer'>
         {
           this.state.cards.map(card => {
             return (
               <Card 
                remove={() => this.removeCard(card.id)}
                key={card.id}
                id={card.id}
                name={card.name}
                email={card.email}
                contactNumber={card.contactNo}
                url={card.imageURL}
               />
             )
           })
         }
        </div>
      </div>
    );
  }
  
}

export default App;
