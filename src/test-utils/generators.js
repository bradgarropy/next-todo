import {mockAuthCtx, mockTodoCtx} from "test-utils/mocks"

const generateAuthCtx = overrides => {
    const authCtx = {
        ...mockAuthCtx,
        ...overrides,
    }

    return authCtx
}

const generateTodoCtx = overrides => {
    const todoCtx = {
        ...mockTodoCtx,
        ...overrides,
    }

    return todoCtx
}

export {generateAuthCtx, generateTodoCtx}
