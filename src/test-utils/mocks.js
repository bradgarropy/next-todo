const mockAuthCtx = {
    user: {email: "test@gmail.com"},
    signup: jest.fn(),
    login: jest.fn(),
    logout: jest.fn(),
}

export {mockAuthCtx}
