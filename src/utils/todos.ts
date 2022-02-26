import {Todo} from "types/todo"
import {supabase} from "utils/supabase"

const createTodo = async (todo: Partial<Todo>) => {
    const {data: newTodo} = await supabase
        .from<Todo>("todos")
        .insert(todo)
        .single()

    return newTodo
}
const readAllTodos = async () => {
    const {data: todos} = await supabase
        .from<Todo>("todos")
        .select("*")
        .order("createdAt", {ascending: false})

    return todos
}

const deleteTodo = async (id: Todo["id"]) => {
    const {data: deletedTodo} = await supabase
        .from<Todo>("todos")
        .delete()
        .eq("id", id)
        .single()

    return deletedTodo
}

export {createTodo, deleteTodo, readAllTodos}
