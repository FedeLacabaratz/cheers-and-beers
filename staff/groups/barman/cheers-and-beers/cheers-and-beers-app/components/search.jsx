function Search({ onSubmit, user, onToMenu, menu, error, onClickNav, onClickAle, onClickLager, onClickStout, onClickIpa, onLogout, onFavList }) {
    return <form className="search" onSubmit={event => {
        event.preventDefault()
        const query = event.target.query.value
        onSubmit(query)
    }
    }>
        <div className="search__header">
            <div className="search__logoholder">
                <img className="search__logo" src="img/cheers-and-beersLogo.png" alt="cheers-and-beersLogo" />
            </div>
            <div className="search__userholder">
                <i className="search__lock fas fa-lock" onClick={event => {
                    event.preventDefault()
                    onLogout()
                }}></i>
                <h3 className="search__user">{username}></h3>
                <img className="search__ranking" src="img/level4.png" alt="ranking" />

            </div>
        </div>

        <div className="search__menu">
            <i className="search__hamburguer fas fa-bars" onClick={event => {
                event.preventDefault()
                onToMenu()
            }
            }></i>
            {menu && <div className="menu menu--show">
                <div className="menu__content">
                    <Menu onClickAle={onClickAle} onClickLager={onClickLager} onClickStout={onClickStout} onClickIpa={onClickIpa} />
                </div>
            </div>}
            {!menu && <div className="menu menu--hide">
                <div className="menu__content">
                    <Menu onClickNav={onClickNav} />
                </div>
            </div>}
            <input className="search__query" type="text" placeholder="Search" name="query" />

            <button><i className="search__searching fas fa-search"></i></button>

            <div className="search__favList" onClick={event => {
                event.preventDefault()
                onFavList()
            }} >❤️</div>
        </div>
        {error && <Feedback level="warning" message={error} />}
    </form>
}