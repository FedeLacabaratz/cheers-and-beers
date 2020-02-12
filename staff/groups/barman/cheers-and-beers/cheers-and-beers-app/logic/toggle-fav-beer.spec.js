fdescribe("Toggle favorite beers", () => {
    let token, idBeer, name, surname, username, password, userdata, error
    beforeEach(done => {
        name = "name-" + Math.random(),
            surname = "surname-" + Math.random(),
            username = "username-" + Math.random(),
            password = "password-" + Math.random()

        call("https://skylabcoders.herokuapp.com/api/v2/users", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ name, username, username, password, app: "CandB" })
        }, (error, response) => {
            if (error) return done(error)
            if (response.content) {
                const { error } = JSON.parse(response.content)
                if (error) return done(new Error(error))
            }
            call("https://skylabcoders.herokuapp.com/api/v2/users/auth", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ username, password })
            }, (error, response) => {
                if (error) {
                    return done(error)
                }

                const { error: _error, token: _token } = JSON.parse(response.content)
                if (_error) return done(new Error(_error))

                token = _token
                done()
            })
        })
    })
    fdescribe("On correct credentials", () => {
        it('Should create the tag fav on user', (done) => {
            idBeer = 35
            toggleFavBeer(token, idBeer, (error, response) => {
                call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': "application/json",
                        'Authorization': ` Bearer ${token}`
                    }
                }, (error, response) => {
                    debugger                  
                    let _userData = { error: _error, username } = JSON.parse(response.content)
                    
                    userData = _userData
                    //callback(undefined, userData)
                   debugger 
                })
                debugger
                expect(error).toBeUndefined()
                expect(userData).toBeDefined()

                done()

            })
        })
    })
})