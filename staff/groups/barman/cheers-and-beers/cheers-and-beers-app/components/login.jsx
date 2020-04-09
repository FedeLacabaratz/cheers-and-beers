function Login({ onSubmit, onToRegister,  error}) {
    return  <form className="login" onSubmit={event => {
            event.preventDefault()
            const username = event.target.username.value
            const password = event.target.password.value
            onSubmit(username, password)

        }}>

            <img className="login__logo" src="img/cheers-and-beersLogo.png" alt="cheers-and-beersLogo" />
            <h2 className="login__title">Beer-In</h2>
            <input className="login__input" type="text" placeholder="username" name="username" />
            <input className="login__input" type="password" placeholder="password" name="password" />

            {error && <Feedback level="error" message={error} />}

            <button className="login__submit">Submit</button>
            <a className="login__register" href="" onClick={event => {
                event.preventDefault()
                onToRegister()
            }} >Beer-up</a>
        </form>
  
}