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

    it('Should succeed on non-matching query, returning an empty array', done => {
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
        query = '0'
        param = 'abv_lt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '9999'
        param = 'ibu_gt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '756776586'
        param = 'ibu_gt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '999'
        param = 'ebc_gt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '0'
        param = 'ebc_lt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'sjdnojsdnfsdjkf'
        param = 'beer_name'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'sjdnojsdnfsdjkf'
        param = 'yeast'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'sjdnojsdnfsdjkf'
        param = 'brewed_before'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'sjdnojsdnfsdjkf'
        param = 'brewed_after'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'sjdnojsdnfsdjkf'
        param = 'hops'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'sjdnojsdnfsdjkf'
        param = 'malt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'sjdnojsdnfsdjkf'
        param = 'food'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'sjdnojsdnfsdjkf'
        param = 'ids'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '5'
        param = 'abv_gt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '5'
        param = 'abv_lt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '50'
        param = 'ibu_gt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '50'
        param = 'ibu_lt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '15'
        param = 'ebc_gt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '15'
        param = 'ebc_lt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })
    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'Buzz'
        param = 'beer_name'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '02-2011'
        param = 'brewed_before'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '02-2011'
        param = 'brewed_after'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'Cross'
        param = 'hops'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'Pale'
        param = 'malt'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = 'chicken'
        param = 'food'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

    it('Should succeed on non-matching query, returning an empty array', done => {
        query = '35'
        param = 'ids'
        searchBeer(token, query, param, (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            done()
        })
    })

})