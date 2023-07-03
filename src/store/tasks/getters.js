export function tasks (state) {
  return state.tasks
}

export function getTask (state) {
  console.log("cheguei aqui", state)
  return (id) => state.tasks[id]
}
