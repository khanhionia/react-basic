import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddToDo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' }
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy");
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id != todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete successd");
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //Save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: ''
            })
            toast.success('Update todo success')
            return;
        }
        //Edit
        this.setState({
            editTodo: todo
        })


    }
    handleOnChangeTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>>empty', isEmptyObj);
        return (
            <div className="list-to-do-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-to-do-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        onChange={(event) => this.handleOnChangeTodo(event)} value={editTodo.title} />
                                                </span>
                                                :
                                                <span> {index + 1} - {item.title} </span>
                                            }
                                        </>
                                    }
                                    <button
                                        onClick={() => this.handleEditTodo(item)} className="edit">
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>


                                    <button
                                        onClick={() => this.handleDeleteTodo(item)} className="delete">Delete</button>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default ListTodo;