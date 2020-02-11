function Results({ results, itemClick, onFav, fav }) {
    return <ul className="results">
        {results.map(item => <Item key={item.id} result={item} onClick={itemClick} fav={fav} onFav={onFav} />)}
    </ul>
}