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
        key: Date.now(),
        complete: false,
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });

      this._inputElement.value="";
    }

    updateTodoList(list) {
      const newList = this.state.items.map((_list) => {
        if(list === _list)
          return {
            text: list.text,
            key: list.key,
            complete: !list.complete,
          }
          else
            return _list
      });
      this.setState({ items: newList })

    }

    render() {
        const lists = this.state.items;

        let totalList = 0;

        lists.map((l) => {
          if (l.complete === false) {
            totalList += 1;
          }
          return totalList;
        });
        
        console.log(totalList);

        console.log(this.state);
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
                <li key={l.key} onClick={() => this.updateTodoList(l)}>
                  {l.complete === true ? (
                    <strike>
                      {l.text}
                    </strike>
                  ) : (
                    <>
                      {l.text}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </>
        );
    }
}
