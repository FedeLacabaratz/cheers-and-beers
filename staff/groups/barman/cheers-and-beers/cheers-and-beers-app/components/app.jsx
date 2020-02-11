
const { Component, Fragment } = React

class App extends Component {
    state = { view: "login", error: undefined, token: undefined, menu: undefined, query: undefined, username: undefined, beer: undefined, resultsBeers: undefined, fav: undefined}

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
        let token = this.state.token
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
                                                                    this.setState({ beer: undefined, resultsBeers: results })
                                                                }
                                                            })
                                                        } else {
                                                            this.setState({ beer: undefined, resultsBeers: results })
                                                        }
                                                    })
                                                } else {
                                                    this.setState({ beer: undefined, resultsBeers: results })
                                                }
                                            })
                                        } else {
                                            this.setState({ beer: undefined, resultsBeers: results })
                                        }
                                    })
                                } else {
                                    this.setState({ beer: undefined, resultsBeers: results })
                                }
                            })
                        } else {
                            this.setState({ beer: undefined, resultsBeers: results })
                        }
                    })
                } else {
                    this.setState({ beer: undefined, resultsBeers: results })
                }
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleDetails = id => {
        debugger
        const token = this.state.token
        const _id = id.toString()
        try {
            searchBeer(token, _id, '?ids=', (error, beer, fav) => {
                if (error) 
                    return this.__handleError__(error)
                
                this.setState({ beer, resultsBeers: undefined})
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }


    handleAle = () => {
        const token = this.state.token
        const arrayAle = ["67", "82", "166", "175", "176", "182"]
        let resultsAle = []
        let position = 0
        const recursive = () => {
        if(resultsAle.length !== arrayAle.length){
            searchBeer(token, arrayAle[position], "?ids=", (error, results)=>{
                position ++ 
                resultsAle.push(results[0])
                if(resultsAle.length !== arrayAle.length){
                    recursive()
                }else{
                    this.setState({resultsBeers: resultsAle, menu: undefined})
                   
                }
            })
        }
    }                            
    recursive()

}   

        handleLager = () => {
            const token = this.state.token
            const arrayLager = ["81", "4", "8", "81", "162", "163"]
            let resultsLager = []
            let position = 0
            const recursive = () => {
            if(resultsLager.length !== arrayLager.length){
                searchBeer(token, arrayLager[position], "?ids=", (error, results)=>{
                    position ++ 
                    resultsLager.push(results[0])
                    if(resultsLager.length !== arrayLager.length){
                        recursive()
                    }else{
                        this.setState({resultsBeers: resultsLager, menu: undefined})
                       
                    }
                })
            }
        }                            
        recursive()

    }   

        handleStout = () => {
            const token = this.state.token
            const arrayStout = ["58", "134", "155", "209", "11", "70"]
            let resultsStout = []
            let position = 0
            const recursive = () => {
            if(resultsStout.length !== arrayStout.length){
                searchBeer(token, arrayStout[position], "?ids=", (error, results)=>{
                    position ++ 
                    resultsStout.push(results[0])
                    if(resultsStout.length !== arrayStout.length){
                        recursive()
                    }else{
                        this.setState({resultsBeers: resultsStout, menu: undefined})
                       
                    }
                })
            }
        }                            
        recursive()

    }   

        handleIpa = () => {
            const token = this.state.token
            const arrayIpa = ["18", "30", "39", "42", "48", "55"]
            let resultsIpa = []
            let position = 0
            const recursive = () => {
                if(resultsIpa.length !== arrayIpa.length){
                    searchBeer(token, arrayIpa[position], "?ids=", (error, results)=>{
                        position ++ 
                        resultsIpa.push(results[0])
                        if(resultsIpa.length !== arrayIpa.length){
                            recursive()
                        }else{
                            this.setState({resultsBeers: resultsIpa, menu: undefined})
                        }
                    })
                }
            }                            
            recursive()
   
        }
        

    handleFav = id => {
        alert("Marc what the fuck!!??")
    }
    
    render() {
        const { props: { title }, state: { view, error, menu, query, username, resultsBeers, beer, fav }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleMenu, handleFav, handleSearch, handleDetails, handleAle, handleLager, handleStout, handleIpa } = this

        return <main>
            {view === "login" && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}
            {view === "register" && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin}  error={error} />}
            {view === "search" && <Search onSubmit={handleSearch} user={username} query={query} onToMenu={handleMenu} menu={menu} onClickAle={handleAle} onClickLager={handleLager} onClickStout={handleStout} onClickIpa={handleIpa} error={error} />}
            {view === "search" && resultsBeers && <Results results={resultsBeers} itemClick={handleDetails} />}
            {view === "search" && beer && <Detail beer={beer} fav={fav} onFav={handleFav} />}
        </main >

    }

}

