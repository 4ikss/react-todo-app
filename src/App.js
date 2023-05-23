import { useReducer } from "react";
function App() {

  const [state, dispatch] = useReducer(todoReducer, {
    todo: "",
    todos: [],
    search: "",
  });

  return (
    <>
      <form onSubmit={submitHandle}>
      <input type="text" value={state.todo} onChange={changeHandle}/>
      <button type="submit">Ekle</button>
      </form>
    </>
  )
}

export default App;