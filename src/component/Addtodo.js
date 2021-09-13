import React, { Component } from "react";

export class Addtodo extends Component {
   state = {
      content: "",
   };

   handleChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value,

         id: Math.ceil(Math.random() * 100),
      });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      this.props.Add(this.state);
      this.setState({ content: "" });
   };
   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
               <input
                  type="text"
                  onChange={this.handleChange}
                  id="content"
                  className="form-control"
                  placeholder="Add Task"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  value={this.state.content}
               />
               <button
                  onClick={this.handleSubmit}
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
               >
                  Add
               </button>
            </div>
         </form>
      );
   }
}

export default Addtodo;
