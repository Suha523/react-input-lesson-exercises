import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

handleInput = (e) => {
      let name = e.target.value
      this.setState({name: name}) 
} 

handleSelect = (e) => {
    let fruit = e.target.value
    this.setState({fruit: fruit}, function(){
        this.alertName()
    })
    
}

alertName = () => {
    alert(`${this.state.name} selected ${this.state.fruit}`)
}

render() {
    return (
        <div>
            <input id="name-input" value={this.state.name} onChange={this.handleInput} />
            <select id="select-input" value={this.state.fruit} onChange={this.handleSelect}>
                <option>Select Item</option>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
            </select>
        </div>
        
    );
}
}

export default Exercise2;