import {supabaseServerClient} from "@supabase/supabase-auth-helpers/nextjs"
import {GetServerSidePropsContext} from "next"
import {Todo} from "types/todo"
import {supabase} from "utils/supabase"

const createTodo = async (todo: Partial<Todo>) => {
    const {data: newTodo} = await supabase
        .from<Todo>("todos")
        .insert(todo)
        .single()

    return newTodo
}

const readAllTodos = async (ctx?: GetServerSidePropsContext) => {
    const client = ctx ? supabaseServerClient(ctx) : supabase

    const {data: todos} = await client
        .from<Todo>("todos")
        .select("*")
        .order("createdAt", {ascending: false})

    return todos
}

const updateTodo = async (id: Todo["id"], updates: Partial<Todo>) => {
    const {data: updatedTodo} = await supabase
        .from("todos")
        .update(updates)
        .eq("id", id)
        .single()

    return updatedTodo
}

const deleteTodo = async (id: Todo["id"]) => {
    const {data: deletedTodo} = await supabase
        .from<Todo>("todos")
        .delete()
        .eq("id", id)
        .single()

    return deletedTodo
}

export {createTodo, deleteTodo, readAllTodos, updateTodo}
