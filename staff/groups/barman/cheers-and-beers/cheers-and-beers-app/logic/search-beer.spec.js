describe('searchBeer', () => {

    let name, surname, username, password, token, query, param

    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTQxM2JhMzFkNmVkMzAwMTU4MmYyZDgiLCJpYXQiOjE1ODEzNDYyNjIsImV4cCI6MTU4MTM0OTg2Mn0.aR_S75WKHgaHxPF4K9de2qDjfUiBIGMkmiTP19eEZcg"

    beforeEach(() => {

        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        username = `username-${Math.random()}`
        password = `password-${Math.random()}`

    })

    describe('When user already exists', () => {
        beforeEach(done =>
            call('https://skylabcoders.herokuapp.com/api/v2/users', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ name, surname, username, password })
            }, (error, response) => {
                if (error) return done(error)

                if (response.content) {
                    const { error } = JSON.parse(response.content)
                }

                if (error) return done(new Error(error))

                call('https://skylabcoders.herokuapp.com/api/v2/users/auth', {
                    method: 'POST',
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ username, password })
                }, (error, response) => {
                    if (error) return done(error)

                    const { error: _error, token: _token } = JSON.parse(response.content)

                    if (_error) return done(new Error(_error))

                    token = _token

                    done()

                })
            })
        )
    })

    fit('Should succeed on non-matching query, returning an empty array', done => {
        query = '999'
        param = 'abv_gt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '0', 'abv_lt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '9999', 'ibu_gt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '0', 'ibu_lt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '999', 'ebc_gt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '0', 'ebc_lt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'sjdnojsdnfsdjkf', 'beer_name', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'sjdnojsdnfsdjkf', 'yeast', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'sjdnojsdnfsdjkf', 'brewed_before', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'sjdnojsdnfsdjkf', 'brewed_after', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'sjdnojsdnfsdjkf', 'hops', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'sjdnojsdnfsdjkf', 'malt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'sjdnojsdnfsdjkf', 'food', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'sjdnojsdnfsdjkf', 'ids', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '5', 'abv_gt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '5', 'abv_lt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '50', 'ibu_gt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '50', 'ibu_lt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '15', 'ebc_gt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token, '15', 'ebc_lt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'sjdnojsdnfsdjkf', 'beer_name', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'sjdnojsdnfsdjkf', 'Buzz', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'02-2011', 'brewed_before', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'02-2011', 'brewed_after', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'Cross', 'hops', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'Pale', 'malt', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'chicken', 'food', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        searchBeer(token,'35', 'ids', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

})