function Search({ onSubmit, user, error }){
return <form className="search" onSubmit={event => {
            event.preventDefault()
            const query = event.target.query.value
            onSubmit(query) }
            }>
        <figure>
            <img className="search__logo" src="img/cheers-and-beersLogo.png" alt="cheers-and-beersLogo" />
        </figure>
        <i className="fas fa-lock"></i>
        <h3>{username} <img src="" alt="X" /> </h3>
        <i className="fas fa-bars"></i>
        <input type="text" placeholder="Search" name="query"/>
        <button><i className="fas fa-search"></i>HolaFede</button>
        {error && <Feedback level="warning" message = {error}/>}
        
</form> 
}