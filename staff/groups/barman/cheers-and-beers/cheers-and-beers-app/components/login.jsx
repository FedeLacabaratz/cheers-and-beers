function Login({ onSubmit, onToRegister,  error}) {
    return <div>
        <form className="login" onSubmit={event => {
            event.preventDefault()
            const username = event.target.username.value
            const password = event.target.password.value
            onSubmit(username, password)

        }}>

            <img className="login__logo" src="img/cheers-and-beersLogo.png" alt="cheers-and-beersLogo" />
            <h2>Beer-In</h2>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />

            {error && <Feedback level="error" message={error} />}

            <button>Submit</button>
            <a href="" onClick={event => {
                event.preventDefault()
                onToRegister()
            }} >Beer-up</a>
        </form>
    </div>
}