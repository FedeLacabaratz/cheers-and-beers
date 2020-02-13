describe("Toggle favorite beers", () => {
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
    describe("On correct credentials", () => {
        it('Should create the tag fav on user', (done) => {
            idBeer = 35
            toggleFavBeer(token, idBeer, (error, response) => {
                const _token = token.split('.')
                const id = JSON.parse(atob(_token[1])).sub
                call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': "application/json",
                        'Authorization': ` Bearer ${token}`
                    }
                }, (error, response) => {
                    let _userData = { error: _error, username } = JSON.parse(response.content)

                    expect(error).toBeUndefined()
                    expect(_userData).toBeDefined()
                    expect(_userData.fav).toBeDefined()
                    expect(_userData.fav[0]).toBe(35)
                    expect(_userData.fav.length).toBe(1)
                    toggleFavBeer(token, 35, (error, response) => {
                        done()

                    })
                })

            })
        })
        it('Should add a valuen on tag fav', (done) => {
            toggleFavBeer(token, 35, (error, response) => {
                idBeer = 55
                toggleFavBeer(token, idBeer, (error, response) => {
                    const _token = token.split('.')
                    const id = JSON.parse(atob(_token[1])).sub
                    call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': "application/json",
                            'Authorization': ` Bearer ${token}`
                        }
                    }, (error, response) => {
                        let _userData = { error: _error, username } = JSON.parse(response.content)
    
                        expect(error).toBeUndefined()
                        expect(_userData).toBeDefined()
                        expect(_userData.fav).toBeDefined()
                        expect(_userData.fav[0]).toBe(35)
                        expect(_userData.fav[1]).toBe(55)
                        expect(_userData.fav.length).toBe(2)
                        toggleFavBeer(token, 35, (error, response) => {
                            toggleFavBeer(token, 55, (error, response) => {
                                
                                done()
                            })
                        })
                    })
    
                })

            })
        })
        it('Shoul delete an already existing taf on fav', (done) =>{

            toggleFavBeer(token, 55, (error, response) => {
                idBeer = 55
                toggleFavBeer(token, idBeer, (error, response) => {
                    const _token = token.split('.')
                    const id = JSON.parse(atob(_token[1])).sub
                    call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': "application/json",
                            'Authorization': ` Bearer ${token}`
                        }
                    }, (error, response) => {
                        let _userData = { error: _error, username } = JSON.parse(response.content)
                        expect(error).toBeUndefined()
                        expect(_userData).toBeDefined()
                        expect(_userData.fav).toBeDefined()
                        expect(_userData.fav[0]).toBe(undefined)
                        expect(_userData.fav.length).toBe(0)
                        done()
    
                    })
    
                })

            })
        })

    })
    it('should fain on non-string', () =>{
        idBeer = 55
        token = 1
        expect( () =>
        toggleFavBeer(token, idBeer, ()=>{})).toThrowError(TypeError, `token ${token} is not a string`)
        token = true
        expect( () =>
        toggleFavBeer(token, idBeer, ()=>{})).toThrowError(TypeError, `token ${token} is not a string`)
        token = null
        expect( () =>
        toggleFavBeer(token, idBeer, ()=>{})).toThrowError(TypeError, `token ${token} is not a string`)
        token = undefined
        expect( () =>
        toggleFavBeer(token, idBeer, ()=>{})).toThrowError(TypeError, `token ${token} is not a string`)
    })
    it('should fain on non-string', () =>{
        idBeer = "55"
        expect( () =>
        toggleFavBeer(token, idBeer, ()=>{})).toThrowError(TypeError, `idBeer ${idBeer} is not a number`)
        idBeer = true
        expect( () =>
        toggleFavBeer(token, idBeer, ()=>{})).toThrowError(TypeError, `idBeer ${idBeer} is not a number`)
        idBeer = null
        expect( () =>
        toggleFavBeer(token, idBeer, ()=>{})).toThrowError(TypeError, `idBeer ${idBeer} is not a number`)
        idBeer = undefined
        expect( () =>
        toggleFavBeer(token, idBeer, ()=>{})).toThrowError(TypeError, `idBeer ${idBeer} is not a number`)
    })
    it('should fain on non-string', () =>{
        idBeer = 55
        expect( () =>
        toggleFavBeer(token, idBeer, 1)).toThrowError(TypeError, `callback 1 is not a function`)
        expect( () =>
        toggleFavBeer(token, idBeer, "hola")).toThrowError(TypeError, `callback hola is not a function`)
        expect( () =>
        toggleFavBeer(token, idBeer, true)).toThrowError(TypeError, `callback true is not a function`)
        expect( () =>
        toggleFavBeer(token, idBeer, undefined)).toThrowError(TypeError, `callback undefined is not a function`)
        expect( () =>
        toggleFavBeer(token, idBeer, null)).toThrowError(TypeError, `callback null is not a function`)
    })
})