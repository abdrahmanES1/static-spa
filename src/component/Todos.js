import React from "react";

function Todos({ todos, delet }) {
   const todolist = todos.length ? (
      todos.map((todo) => {
         return (
            <div
               class="toast show mb-2 w-auto"
               role="alert"
               aria-live="assertive"
               aria-atomic="true"
               key={todo.id}
            >
               <div class="toast-header">
                  <h5 class="me-auto mb-0">{todo.content}</h5>

                  <button
                     type="button"
                     class="btn-close ms-2 mb-1"
                     data-bs-dismiss="toast"
                     aria-label="Close"
                     onClick={() => delet(todo.id)}
                  >
                     <span aria-hidden="true"></span>
                  </button>
               </div>
            </div>
         );
      })
   ) : (
      <div
         class="toast show w-auto"
         role="alert"
         aria-live="assertive"
         aria-atomic="true"
      >
         <div class="toast-header">
            <strong class="me-auto">0 tasks</strong>
         </div>
      </div>
   );

   return <div className="todos-list">{todolist}</div>;
}

export default Todos;
