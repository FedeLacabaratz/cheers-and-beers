function Register({ onSubmit, onToLogin, error }) {
    return <form className="register" onSubmit={event => {
        event.preventDefault()
        const name = event.target.name.value
        const surname = event.target.surname.value
        const username = event.target.username.value
        const password = event.target.password.value

        onSubmit(name, surname, username, password)
    }}>

        <img className="register__logo" src="img/cheers-and-beersLogo.png" alt="cheers-and-beersLogo" />
        <h2>Beer-Up</h2>
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="surname" name="surname" />
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />

        {error && <Feedback level="error" message={error} />}
        
        <button>Submit</button>
        <a href="" onClick={event => {
            event.preventDefault()
            onToLogin()
        }}>Beer-In</a>
    </form>

}