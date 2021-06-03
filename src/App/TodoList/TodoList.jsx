import { Component } from 'react';

export default class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
        };

      this.addTodoList = this.addTodoList.bind(this);
    }

    addTodoList(event) {
      event.preventDefault();

      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });

      this._inputElement.value="";
    }

    addDeleteLine(key) {

    }

    render() {
        const lists = this.state.items;

        let totalList = lists.length;

        return (
          <>
            <div>
              <h2>
                Todo List
              </h2>
            </div>

            <form onSubmit={this.addTodoList}>
              <input 
                type="text" 
                ref={(a) => this._inputElement = a} 
              />
          
              <button type="submit">
                Add
              </button>
            </form>

            <p>
              {totalList} todo list(s) 
            </p>
            
            <ul>
              {lists.map((l) => (
                <li key={l.key} onClick={() => this.addDeleteLine(l.key)}>
                  <strike>{l.text}</strike>
                </li>
              ))}
            </ul>
          </>
        );
    }
}
