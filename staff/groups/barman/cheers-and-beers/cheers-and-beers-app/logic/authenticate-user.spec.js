describe("Authenticate User", () => {
    let name, surname, username, password

    beforeEach(() => {
        name = "name-" + Math.random(),
            surname = "surname-" + Math.random(),
            username = "username-" + Math.random(),
            password = "password-" + Math.random()
    })

    describe("When user already exists", () => {
        beforeEach(done => {
            call("https://skylabcoders.herokuapp.com/api/v2/users", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ name, username, username, password })
            }, (error, response) => {
                if (error) return done(error)
                if (response.content) {
                    const { error } = JSON.parse(response.content)
                    if (error) return done(new Error(error))
                }
                done()
            })
        })
        it("Should succeed on correct credentials", done => {
            authenticateUser(username, password, (error, token) => {
                expect(error).toBeUndefined()
                expect(token).toBeA("string")
                const [header, payload, signature] = token.split(".")
                expect(header.length).toBeGreaterThan(0)
                expect(payload.length).toBeGreaterThan(0)
                expect(signature.length).toBeGreaterThan(0)
                done()
            })
        })
        it("Should fail on incorrect password", done => {
            authenticateUser(username, password + "-wrong", (error, token) => {
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe('username and/or password wrong')
                done()
            })
        })
        it("Should fail on incorrect username", done => {
            authenticateUser(username + "-wrong", password, (error, token) => {
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe('username and/or password wrong')
                done()
            })
        })
    })
    it('Should fail when user does not exist', done => {
        authenticateUser(username, password, (error, token) => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('username and/or password wrong')
            done()
        })
    })
    it('Shoul fail on non-string username', () => {
        username = 1
        expect(() =>
            authenticateUser(username, password, () => {})).toThrowError(TypeError, `username ${username} is not a string`)

        username = true
        expect(() =>
            authenticateUser(username, password, () => {})).toThrowError(TypeError, `username ${username} is not a string`)

        username = undefined
        expect(() =>
            authenticateUser(username, password, () => {})).toThrowError(TypeError, `username ${username} is not a string`)

        username = null
        expect(() =>
            authenticateUser(username, password, () => {})).toThrowError(TypeError, `username ${username} is not a string`)

    })
    it('Shoul fail on non-string password', () => {
        password = 1
        expect(() =>
            authenticateUser(username, password, () => {})).toThrowError(TypeError, `password ${password} is not a string`)

        password = true
        expect(() =>
            authenticateUser(username, password, () => {})).toThrowError(TypeError, `password ${password} is not a string`)

        password = undefined
        expect(() =>
            authenticateUser(username, password, () => {})).toThrowError(TypeError, `password ${password} is not a string`)

        password = null
        expect(() =>
            authenticateUser(username, password, () => {})).toThrowError(TypeError, `password ${password} is not a string`)

    })

})