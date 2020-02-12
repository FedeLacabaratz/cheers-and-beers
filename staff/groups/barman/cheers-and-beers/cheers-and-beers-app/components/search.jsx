function Search({ onSubmit, user, onToMenu, menu, error, onClickNav, onClickAle, onClickLager, onClickStout, onClickIpa, onLogout, onFavList}){
return <form className="search" onSubmit={event => {
            event.preventDefault()
            const query = event.target.query.value
            onSubmit(query)} 
            }>
        <figure>
            <img className="search__logo" src="img/cheers-and-beersLogo.png" alt="cheers-and-beersLogo" />
        </figure>
        <h3>{username} <img src="" alt="X" /> </h3>
        <i className="fas fa-bars">
        <button onClick={event => {
            event.preventDefault()
            onToMenu()
        }
        }></button>
        {menu && <div className="menu menu--show">
            <div className="menu__content">
                <Menu onClickAle={onClickAle} onClickLager={onClickLager} onClickStout={onClickStout} onClickIpa={onClickIpa}/>
            </div>
        </div>}
        {!menu && <div className="menu menu--hide">
            <div className="menu__content">
                <Menu onClickNav={onClickNav}/>
            </div>
        </div>}  
        </i>
        <input type="text" placeholder="Search" name="query"/>
        <i className="fas fa-lock" onClick={event => {
            event.preventDefault()
            onLogout()
        }}></i>
        <button><i className="fas fa-search"></i>Search</button>
        {error && <Feedback level="warning" message = {error}/>}

        <button className="search__favList" onClick={event =>{
            event.preventDefault()
            onFavList()
        }} >❤️</button>
        
</form> 
}