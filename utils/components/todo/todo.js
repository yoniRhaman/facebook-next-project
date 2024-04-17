

export default function Todo() {
  return (
    <div><h1>Todo</h1></div>
  )
}



// "use client";
// import {
//   createTodo,
//   deleteTodoById,
//   updateTodoById,
// } from "@/utils/functions/apiCalls";
// import { Add, Delete } from "@mui/icons-material";
// import { IconButton, TextField } from "@mui/material";
// import { getCookie } from "cookies-next";
// import { useRef, useState } from "react";

// export default function Todo({ info }) {
//   const [todos, setTodos] = useState(info);
//   const titleRef = useRef(null);
//   async function addTodo() {
//     const todo = await createTodo(
//       "65f1b4bc34de701de45fb45b",
//       { title: titleRef.current.value },
//       getCookie("token")
//     );
//     setTodos((prev) => [...prev, todo]);
//     titleRef.current.value = "";
//   }
//   return (
//     <div className="column center" style={{ height: "85vh" }}>
//       <div className="row" style={{ width: "400px", gap: "20px" }}>
//         <TextField inputRef={titleRef} />
//         <IconButton onClick={addTodo}>
//           <Add />
//         </IconButton>
//       </div>
//       <table style={{ width: "400px" }}>
//         {todos.map((todo) => (
//           <TodoItem key={todo._id} todo={todo} setTodos={setTodos} />
//         ))}
//       </table>
//     </div>
//   );
// }

// function TodoItem({ todo, setTodos }) {
//   return (
//     <tr
//       style={{
//         width: "100%",
//       }}
//     >
//       <td>
//         <h2>{todo.title}</h2>
//       </td>

//       <td>
//         <input
//           type="checkbox"
//           checked={todo.finished}
//           onChange={async () => {
//             await updateTodoById(todo._id, getCookie("token"));
//             setTodos((prev) =>
//               prev.map((p) => {
//                 if (p._id === todo._id) return { ...p, finished: !p.finished };
//                 return p;
//               })
//             );
//           }}
//         />
//       </td>
//       <td>
//         <IconButton
//           onClick={async () => {
//             await deleteTodoById(todo._id, getCookie("token"));
//             setTodos((prev) => prev.filter((p) => p._id !== todo._id));
//           }}
//         >
//           <Delete />
//         </IconButton>
//       </td>
//       <td>
//         <p>{todo.date.toString()}</p>
//       </td>
//     </tr>
//   );
// }
