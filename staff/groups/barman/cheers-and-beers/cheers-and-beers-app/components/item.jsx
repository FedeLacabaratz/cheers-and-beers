function Item({ result: { id, name, abv, image_url, tagline }, fav, onClick, onFav, updateFavList, favList }) {

    if (!fav || !fav.includes(id)) {
        return  <div className="item" >
                    <h2>{name} <span onClick={() => onFav(id)}>🤍</span></h2>
                    <h3>Alcohol:{abv}</h3>
                    <figure className="item__beer-of-the-day">
                        <img src="img/Milhouse_Van_Houten.png" alt="Milhouse Recommends" />
                    </figure>
                    <figure className="item__img-beer">
                        <img src={image_url} onClick={event => {
                            event.preventDefault()
                            onClick(id)
                        }} alt="img" />
                        <figcaption>{tagline}</figcaption>
                    </figure>
                </div>
    } else {
        return  <div className="item" >
                    <h2>{name} <span onClick={() => onFav(id)}>❤️</span></h2>
                    <h3>Alcohol:{abv}</h3>
                    <figure className="item__beer-of-the-day">
                        <img src="img/Milhouse_Van_Houten.png" alt="Milhouse Recommends" />
                    </figure>
                    <figure className="item__img-beer">
                        <img src={image_url} onClick={event => {
                            event.preventDefault()
                            onClick(id)
                        }} alt="img" />
                        <figcaption>{tagline}</figcaption>
                    </figure>
                </div>

    }

}