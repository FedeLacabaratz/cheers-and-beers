
const { Component, Fragment } = React

class App extends Component {

    state = { view: undefined, userData: undefined, error: undefined, token: undefined, menu: undefined, query: undefined, param: undefined, username: undefined, beer: undefined, resultsBeers: undefined, fav: undefined, token: undefined, favList: false }

    __handleError__(error) {
        if (error) this.setState({ error: error.message })
        else this.setState({ error: "Not answer" })
        setTimeout(() => {
            this.setState({ error: undefined })
        }, 3000)
    }

    componentWillMount() {
        const { token } = sessionStorage

        if (token) {
            try {
                retrieveUser(token, (error, userData) => {
                    if (error) {

                        this.handleLogout()
                    }

                    this.setState({ view: 'search', userData })

                    if (address.search.q) {
                        const { q: query } = address.search

                        this.handleSearch(query)
                    } else if (address.hash && address.hash.startsWith('ids')) {
                        const [, id] = address.hash.split('=')

                        this.handleDetails(id)
                    }
                })
            } catch (error) {
                this.handleLogout()
            }

        } else this.handleLogout()
    }

    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    this.__handleError__(error)
                } else {
                    retrieveUser(token, (error, userData) => {
                        if (error) {
                            return this.__handleError__(error)
                        } else {
                            let random = Math.floor(Math.random() * (320) + 1)
                            searchBeer(token, random.toString(), 'ids', (error, response) => {
                                if (error) {
                                    this.state({ error: error.message })
                                } else {
                                    sessionStorage.token = token

                                    address.hash = `random`

                                    this.setState({ userData: userData, view: "search", token: token, resultsBeers: response, favList: undefined })
                                }
                            })
                        }
                    })
                }
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }
    handleGoToRegister = () => {
        this.setState({ view: "register" })
    }

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, (error) => {
                if (error) {
                    return this.__handleError__(error)
                } else {
                    this.setState({ view: "login" })
                }
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }
    handleGoToLogin = () => {
        this.setState({ view: "login" })
    }

    handleMenu = () => {
        this.setState({ menu: true })
    }
    handleNav = (nav) => {
        this.setState({ menu: undefined })
    }

    handleSearch = (query) => {
        const { token } = sessionStorage
        try {
            searchBeer(token, query, 'abv_gt', (error, results, fav) => {
                if (error || results.length === 0) {
                    searchBeer(token, query, 'yeast', (error, results, fav) => {
                        if (error || results.length === 0) {
                            searchBeer(token, query, 'brewed_before', (error, results, fav) => {
                                if (error || results.length === 0) {
                                    searchBeer(token, query, 'food', (error, results, fav) => {
                                        if (error || results.length === 0) {
                                            searchBeer(token, query, 'hops', (error, results, fav) => {
                                                if (error || results.length === 0) {
                                                    searchBeer(token, query, 'malt', (error, results, fav) => {
                                                        if (error || results.length === 0) {
                                                            searchBeer(token, query, 'beer_name', (error, results, fav) => {
                                                                if (error || results.length === 0) {
                                                                    this.__handleError__(error)
                                                                } else {
                                                                    this.setState({ beer: undefined, query, resultsBeers: results, fav, param: 'beer_name', favList: undefined })
                                                                }
                                                            })
                                                        } else {
                                                            this.setState({ beer: undefined, query, resultsBeers: results, fav, param: 'malt', favList: undefined })
                                                        }
                                                    })
                                                } else {
                                                    this.setState({ beer: undefined, query, resultsBeers: results, fav, param: 'hops', favList: undefined })
                                                }
                                            })
                                        } else {
                                            this.setState({ beer: undefined, query, resultsBeers: results, fav, param: 'food', favList: undefined })
                                        }
                                    })
                                } else {
                                    this.setState({ beer: undefined, query, resultsBeers: results, fav, param: 'brewed_before', favList: undefined })
                                }
                            })
                        } else {
                            this.setState({ beer: undefined, query, resultsBeers: results, fav, param: 'yeast', favList: undefined })
                        }
                    })
                } else {
                    this.setState({ beer: undefined, query, resultsBeers: results, fav, param: 'abv_gt', favList: undefined })

                }
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleDetails = id => {
        const { token } = sessionStorage
        const _id = id.toString()
        try {
            searchBeer(token, _id, 'ids', (error, beer, fav) => {
                if (error)
                    return this.__handleError__(error)


                address.hash = `ids=${id}`

                this.setState({ view: 'search', beer, resultsBeers: undefined, query: undefined, fav, favList: undefined })
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }


    handleAle = () => {
        const { token } = sessionStorage
        const arrayAle = ["67", "82", "166", "175", "176", "182"]
        let resultsAle = []
        let position = 0
        const recursive = () => {
            if (resultsAle.length !== arrayAle.length) {
                searchBeer(token, arrayAle[position], "ids", (error, results) => {
                    position++
                    resultsAle.push(results[0])
                    if (resultsAle.length !== arrayAle.length) {
                        recursive()
                    } else {
                        this.setState({ resultsBeers: resultsAle, menu: undefined, favList: undefined })

                    }
                })
            }
        }
        recursive()

    }

    handleLager = () => {
        const { token } = sessionStorage
        const arrayLager = ["81", "4", "8", "81", "162", "163"]
        let resultsLager = []
        let position = 0
        const recursive = () => {
            if (resultsLager.length !== arrayLager.length) {
                searchBeer(token, arrayLager[position], "ids", (error, results) => {
                    position++
                    resultsLager.push(results[0])
                    if (resultsLager.length !== arrayLager.length) {
                        recursive()
                    } else {
                        this.setState({ resultsBeers: resultsLager, menu: undefined, favList: undefined })

                    }
                })
            }
        }
        recursive()

    }

    handleStout = () => {
        const { token } = sessionStorage
        const arrayStout = ["58", "134", "155", "209", "11", "70"]
        let resultsStout = []
        let position = 0
        const recursive = () => {
            if (resultsStout.length !== arrayStout.length) {
                searchBeer(token, arrayStout[position], "ids", (error, results) => {
                    position++
                    resultsStout.push(results[0])
                    if (resultsStout.length !== arrayStout.length) {
                        recursive()
                    } else {
                        this.setState({ resultsBeers: resultsStout, menu: undefined, favList: undefined })

                    }
                })
            }
        }
        recursive()

    }

    handleIpa = () => {
        const { token } = sessionStorage
        const arrayIpa = ["18", "30", "39", "42", "48", "55"]
        let resultsIpa = []
        let position = 0
        const recursive = () => {
            if (resultsIpa.length !== arrayIpa.length) {
                searchBeer(token, arrayIpa[position], "ids", (error, results) => {
                    position++
                    resultsIpa.push(results[0])
                    if (resultsIpa.length !== arrayIpa.length) {
                        recursive()
                    } else {
                        this.setState({ resultsBeers: resultsIpa, menu: undefined, favList: undefined })
                    }
                })
            }
        }
        recursive()

    }


    handleFav = id => {

        const { token } = sessionStorage
        const favList = this.state.favList

        try {
            toggleFavBeer(token, id, (error, response) => {
                if (error)
                    return this.__handleError__(error)
                    retrieveUser(token, (error, userData) => {
                        if (error) return this.__handleError__(error)
                        else 
                            this.setState({ fav: userData.fav })

                        if (this.state.query)
                            this.handleSearch(this.state.query)
                        
                        else if (this.state.favList)
                            this.handleFavList()
                    })
                if (address.search.q) {
                    const { q: query } = address.search
                } else if (address.hash && address.hash.startsWith('ids')) {
                    const [, id] = address.hash.split('=')

                    }
                if (error)
                    return this.__handleError__(error)
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleLogout = () => {
        sessionStorage.clear()
        address.clear()
        this.setState({ view: 'login', userData: undefined })
    }

    handleFavList = () => {
        const { token } = sessionStorage
        let resultsFav = []
        let position = 0
        retrieveUser(token, (error, userData) => {
            if (error) return this.__handleError__(error)
            else this.setState({ fav: userData.fav })
            let userDataFav = userData.fav
            const recursive = () => {
                if (resultsFav.length !== userDataFav.length) {
                    searchBeer(token, userDataFav[position].toString(), "ids", (error, results) => {
                        if (error)
                            this.__handleError__(error)
                        else {
                            position++
                            resultsFav.push(results[0])
                        }

                        if (resultsFav.length !== userDataFav.length) {
                            recursive()
                        } else {
                            this.setState({ resultsBeers: resultsFav, query: undefined, menu: undefined, favList: true, beer: undefined })
                        }
                    })
                }
            }
            recursive()
        })
    }

    render() {
        const { props: { title }, state: { view, error, menu, query, username, resultsBeers, beer, fav, userData }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleMenu, handleFav, handleSearch, handleDetails, handleAle, handleLager, handleStout, handleIpa, handleLogout, handleFavList } = this

        return <main>
            {view === "login" && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === "register" && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === "search" && <Search onSubmit={handleSearch} user={username} query={query} onToMenu={handleMenu} menu={menu} onClickAle={handleAle} onClickLager={handleLager} onClickStout={handleStout} onClickIpa={handleIpa} error={error} onLogout={handleLogout} onFavList={handleFavList} />}

            {view === "search" && resultsBeers && !beer && <Results results={resultsBeers} itemClick={handleDetails} fav={fav} onFav={handleFav} updateFavList={handleFavList} />}

            {view === "search" && beer && !resultsBeers && <Detail beer={beer} fav={fav} onFav={handleFav} />}
        </main >

    }

}

