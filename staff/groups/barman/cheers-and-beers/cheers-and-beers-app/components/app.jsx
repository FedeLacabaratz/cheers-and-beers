
const { Component, Fragment } = React

class App extends Component {
    state = { view: "login", error: undefined, token: undefined, menu: undefined, query: undefined, username: undefined, resultsBeers: undefined }

    __handleError__(error) {
        if(error) this.setState({ error: error.message })
        else this.setState({ error: "Not answer" })
        setTimeout(() => {
            this.setState({ error: undefined })
        }, 3000)
    }
    // componentWillMount(){
    // const {token} = sessionStorage
    // if(token){
    //     try{

    //     } 
    // } else {
    //     this.setState({view: Login})
    // }

    // }
    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    this.__handleError__(error)
                } else {
                    retrieveUser(token, (error, userData) => {
                        if (error) {
                            this.state({ error: error.message })
                            return this.__handleError__(error)
                            sessionStorage.token = token
                        } else {
                            searchBeer(token, "", "/random", (error, response) => {
                                if (error) {
                                    this.state({ error: error.message })
                                } else {
                                    this.setState({ username: userData, view: "search", token: token, resultsBeers: response })
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
        alert(`pulsaste ${nav}`)
        this.setState({ menu: undefined })
    }

    handleSearch = (query) => {
        const token = this.state.token
        try {
            searchBeer(token, query, '?abv_gt=', (error, results) => {
                if (error || results.length === 0) {
                    searchBeer(token, query, '?yeast=', (error, results) => {
                        if (error || results.length === 0) {
                            searchBeer(token, query, '?brewed_before=', (error, results) => {
                                if (error || results.length === 0) {
                                    searchBeer(token, query, '?food=', (error, results) => {    
                                        if (error || results.length === 0) {
                                            searchBeer(token, query, '?hops=', (error, results) => {
                                                if (error || results.length === 0) {
                                                    searchBeer(token, query, '?malt=', (error, results) => {
                                                        if (error || results.length === 0) {
                                                            searchBeer(token, query, '?beer_name=', (error, results) => {
                                                                if (error || results.length === 0) {
                                                                    this.__handleError__(error)
                                                                } else {
                                                                    this.setState({ resultsBeers: results })
                                                                }
                                                            })
                                                        } else {
                                                            this.setState({ resultsBeers: results })
                                                        }
                                                    })
                                                } else {
                                                    this.setState({ resultsBeers: results })
                                                }
                                            })
                                        } else {
                                            this.setState({ resultsBeers: results })
                                        }
                                    })
                                } else {
                                    this.setState({ resultsBeers: results })
                                }
                            })
                        } else {
                            this.setState({ resultsBeers: results })
                        }
                    })
                } else {
                    this.setState({ resultsBeers: results })
                }
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleDetails = (id) => {
        alert("Fede tiobueno" + id)
    }
    render() {
        const { props: { title }, state: { view, error, menu, query, username, resultsBeers }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleMenu, handleNav, handleSearch, handleDetails } = this
        return <main>
            < h1 > {title}</h1 >

            {view === "login" && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}
            {view === "register" && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin}  error={error} />}
            {view === "search" && <Search onSubmit={handleSearch} user={username} query={query} onToMenu={handleMenu} menu={menu} onClickNav={handleNav} error={error} />}
            {view === "search" && resultsBeers && <Results results={resultsBeers} itemClick={handleDetails} />}
        </main >

    }

}