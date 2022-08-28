import { Component } from "react";
import image from './check.jpg'

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
    }

addItem(input){
    if(input === ''){
        alert ('Please enter an item!')
    }
    else{
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({ groceryList: listArray, userInput: ''}); 
    }
}

deleteItem(){
    let listArray = this.state.groceryList;
    listArray.length = 0;
    this.setState({ groceryList: listArray })
}

crossedWord(e){
    const li = e.target;
    li.classList.toggle('crossed');
}

 onChangeEvent(event){
    this.setState({userInput: event})
 }

 onFormSubmit(e){
   e.preventDefault();
 }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                <input type='text' placeholder='What do you whant to buy?' onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput}/>
                </div>
                <div className='container'>
                <button onClick={ () => this.addItem (this.state.userInput) } className='btn add'>Add</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={ this.crossedWord } key={ index }><img src={ image } width='30px' alt=''/>{ item }</li>
                    ))}
                </ul>
                <div className='container'>
                <button onClick={ () => this.deleteItem () } className='btn delete'>Delete</button>
                </div>
                </form>
            </div>
        )
    }
}
