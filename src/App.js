import React from "react";
import Addtodo from "./component/Addtodo";
import Todos from "./component/Todos";

class App extends React.Component {
   state = {
      todoList: [],
   };
   handleDelete = (id) => {
      let newList = this.state.todoList.filter((todo) => todo.id !== id);

      this.setState({ todoList: newList });
   };
   handleAdd = (item) => {
      let newList = [...this.state.todoList, item];
      this.setState({ todoList: newList });
   };
   render() {
      return (
         <div className="App container mt-5 p-5">
            <h1 >TODO's</h1>
            <Addtodo Add={this.handleAdd} />
            <Todos todos={this.state.todoList} delet={this.handleDelete} />
         </div>
      );
   }
}

export default App;
