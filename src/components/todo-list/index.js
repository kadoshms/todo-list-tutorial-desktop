import React from 'react';
import TodoListCore from './../../modules/core/components/todo-list';
import Item from './item';
import './style.css';

class TodoList extends React.Component {
    /**
     * handle form submission by delegating the injected _addItem prop
     * @param event
     */
    addItem = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);

        this.props._addItem(data.get('description'));
    };

    render() {
        const {_items} = this.props;

        return (
            <div className={"list-wrapper"}>
                <header><h1>MY TODO LIST</h1></header>
                {
                    _items.length === 0
                        ?
                        <span>Start by adding an item.</span>
                        :
                        <ul>
                            {this.props._items.map((it) => (
                                <li key={it.id}>
                                    <Item onClick={this.props._toggleItemCompleteionById}
                                          onDelete={this.props._deleteItemById}
                                          {...it}
                                    />
                                </li>
                            ))}
                        </ul>
                }
                <footer>
                    <form onSubmit={this.addItem}>
                        <input type={"text"} name={"description"} placeholder={"Type here..."}/>
                        <button type={"submit"}>
                            Add
                        </button>
                    </form>
                </footer>
            </div>
        );
    }
}

export default TodoListCore(TodoList);
