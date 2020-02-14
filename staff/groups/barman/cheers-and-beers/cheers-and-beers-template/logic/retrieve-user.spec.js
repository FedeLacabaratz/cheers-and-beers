describe ("Retrieve user", () =>{
    let name, surname, username, password, token

    beforeEach(()=> {
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
                body: JSON.stringify({ name, surname, username, password })
            }, (error, response) => {
                if (error) return done(error)
                if (response.content) {
                    const { error } = JSON.parse(response.content)
                    if (error) return done(new Error(error))
                }
            
            call("https://skylabcoders.herokuapp.com/api/v2/users/auth", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ username,password })
            }, (error, response) => {
                if (error) {
                    return done(error)
                }
        
                const { error: _error, token:_token } = JSON.parse(response.content)
                if (_error) return done(new Error(_error))
        
                token=_token
                done()
            })      
        })
        })

        it("Should succeed on correct token", done=> {
            retrieveUser(token, (error, user)=>{

                expect(error).toBeUndefined()
                expect(user.name).toBe(name)
                expect(user.surname).toBe(surname)
                expect(user.username).toBe(username)
                done()

            })
    
        })
        it("Should fail on invalid token", done=> {
            retrieveUser(token+"-wrong",error=>{
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe("invalid token")
                done()
            })
        })
    })
    
    it("Should fail on non-string token", () => {
            token = 1
            expect(()=> 
            retrieveUser(token, ()=> {})).toThrowError(TypeError, `token ${token} is not a string`)
            token = undefined
            expect(()=> 
            retrieveUser(token, ()=> {})).toThrowError(TypeError, `token ${token} is not a string`)
            token = null
            expect(()=> 
            retrieveUser(token, ()=> {})).toThrowError(TypeError, `token ${token} is not a string`)
            token = true
            expect(()=> 
            retrieveUser(token, ()=> {})).toThrowError(TypeError, `token ${token} is not a string`)
    
    })
    it("Should fail on non-function callback", () => {
        token="elFedo"
        callback = 1
        expect(()=> 
        retrieveUser(token, callback)).toThrowError(TypeError, `${callback} is not a function`)
        callback = undefined
        expect(()=> 
        retrieveUser(token, callback)).toThrowError(TypeError, `${callback} is not a function`)
        callback = null
        expect(()=> 
        retrieveUser(token, callback)).toThrowError(TypeError, `${callback} is not a function`)
        callback = true
        expect(()=> 
        retrieveUser(token, callback)).toThrowError(TypeError, `${callback} is not a function`)

})



})