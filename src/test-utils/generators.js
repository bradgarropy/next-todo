import {mockAuthCtx} from "test-utils/mocks"

const generateAuthCtx = overrides => {
    const authCtx = {
        ...mockAuthCtx,
        ...overrides,
    }

    return authCtx
}

export {generateAuthCtx}
