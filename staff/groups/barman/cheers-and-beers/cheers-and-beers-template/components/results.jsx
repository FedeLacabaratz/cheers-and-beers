function Results({ results, itemClick, onFav, fav, updateFavList, favList }) {
    return <ul className="results">
        {results.map(item => <Item key={item.id} result={item} onClick={itemClick} fav={fav} onFav={onFav} updateFavList={updateFavList} />)}
    </ul>
}