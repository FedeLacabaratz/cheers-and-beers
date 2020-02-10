function Results({ results, itemClick }) {
    return <ul className="results">
        {results.map(item => <Item key={item.id} result={item} onClick={itemClick} />)}
    </ul>
}