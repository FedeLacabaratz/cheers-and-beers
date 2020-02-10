
const { Component, Fragment } = React

class App extends Component {
    state = { view: "login", error: undefined, token: undefined, menu: undefined}

    __handleError__(error) {
        this.setState({error: error.message})
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
                        if(error){
                            this.state({error: error.message}) 
                            return this.__handleError__(error)
                            sessionStorage.token = token
                        }else{
                            alert('done')
                            //this.setState({view: "search"})    
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
    handleMenu = () =>{
        this.setState({menu: true })
    }
    handleNav = (nav) => {
        alert(`pulsaste ${nav}`)
        this.setState({menu: undefined })
    }

    render() {
        const { props: { title }, state: { view, error, menu}, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleMenu, handleNav } = this
        return <main>
            <h1>{title}</h1>

            {view === "login" && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} onToMenu={handleMenu} menu={menu} onClickNav={handleNav} error={error} />}
            {view === "register" && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}


        </main>

    }

}
