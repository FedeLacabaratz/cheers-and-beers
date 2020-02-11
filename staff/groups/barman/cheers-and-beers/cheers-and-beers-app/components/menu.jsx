function Menu({ onClickAle, onClickLager, onClickStout, onClickIpa }) {
    return <div>
        <h3>Beer types</h3>
        <a onClick={event => {
                 debugger
            event.preventDefault()
            onClickAle()
        }}>ALE</a>
        <a onClick={event => {
            event.preventDefault()
            onClickLager()
        }}>LAGER</a>
        <a onClick={event => {
            event.preventDefault()
            onClickStout()
        }}>STOUT</a>
        <a onClick={event => {
            event.preventDefault()
            onClickIpa()
        }}>IPA</a>
        
    </div>
}
