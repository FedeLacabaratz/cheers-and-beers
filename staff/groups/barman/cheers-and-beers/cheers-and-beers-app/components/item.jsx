function Item({result, fav, onClick}){
    return <div className="item" >
        <h2>{result.name}</h2>
        <h3>{result.abv}</h3>

        {/* <figure className="beer-of-the-day">
            <img src="img/Milhouse_Van_Houten.png" alt="Milhouse_Van_Houten"/>
        </figure> */}
        <figure>
            <img src={result.image_url} onClick={event => {
                event.preventDefault()
                debugger
                onClick(result.id)
            }} alt="img"/>
        <figcaption>{result.tagline}</figcaption>
        </figure> 
    </div>
}