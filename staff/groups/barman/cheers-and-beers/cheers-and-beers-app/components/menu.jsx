function Menu({ onClickNav }) {
    return <div>
        <a onClick={event => {
            event.preventDefault()
            onClickNav('MARC')
        }}>MARC</a>
        <a onClick={event => {
            event.preventDefault()
            onClickNav('FEDE')
        }}>FEDE</a>
        <a onClick={event => {
            event.preventDefault()
            onClickNav('ANA')
        }}>ANA</a>
        <a onClick={event => {
            event.preventDefault()
            onClickNav('BATMAN!!!')
        }}>BATMAN</a>
    </div>
}