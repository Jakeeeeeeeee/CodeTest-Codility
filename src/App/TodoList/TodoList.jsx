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

      var newItem = {
        text: this._inputElement.value,
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });

    }

    render() {
        const list = this.state.items;

        console.log(list);
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
                    ref={(a) => this._inputElement = a} />
                
                  <button type="submit">
                      Add
                  </button>
                </form>
                
                {/* <ul>
                    <li>
                        {list}
                    </li>
                </ul> */}
            </>
        );
    }
}
