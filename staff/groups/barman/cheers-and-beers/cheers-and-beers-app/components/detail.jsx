function Detail({ beer, onFav, fav }) {

    const { id, name, tagline, first_brewed, description, image_url, abv, ibu, srm, ph, ingredients, food_pairing, brewers_tips, contributed_by } = beer[0]
    const { malt, hops, yeast } = ingredients

    if (!fav || !fav.includes(id)) {
        return <li className="detail">
            <div className="detail__nameBeer">
            <h3>Nombre: {name} <span onClick={() => onFav(id)}>🤍</span></h3>
            <p>Lema: {tagline}</p>
            <p>Fecha de primera elaboración: {first_brewed}</p>
            </div>
            <div className="detail__background">
            <h4>Descripción:</h4>
            <p> {description} </p>
            <img src={image_url} />
            <p>Volumen de alcohol: {abv}</p>
            <p>Amargor: {ibu}</p>
            <p>Color final: {srm}</p>
            <p>PH: {ph}</p>
            <div className="detail_ingredients">
            <h4>Ingredientes</h4>
            <span>Tipo de malta: {malt.map(item => <ul>
                <li>Nombre de Malta: {item.name}</li>
                <li>Cantidad: {item.amount.value} {item.amount.unit}</li>
            </ul>)}
            </span>
            <span>Tipo de lúpulo: {hops.map(item => <ul>
                <li>Nombre de lúpulo: {item.name}</li>
                <li>Cantidad: {item.amount.value} {item.amount.unit}</li>
            </ul>)}
            </span>
            <p>Tipo de levadura: {yeast}</p>
            </div>
            <div className="detail__tips">
            <h4>Consejos</h4>
            <img className="detail__moe" src="img/Moe_Szyslak.png" alt="Moe"></img>
            <ul>Food Pairing: {food_pairing.map(item => <li>{item}</li>)}</ul>
            <p>Consejos del creador: {brewers_tips}</p>
            </div>
            </div>
        </li>
        
    } else {
        return <li className="detail">
             <div className="detail__nameBeer">
            <h3>Nombre: {name} <span onClick={() => onFav(id)}>❤️</span></h3>
            <p>Lema: {tagline}</p>
            <p>Fecha de primera elaboración: {first_brewed}</p>
            </div>
            <div className="detail__background">
            <h4>Descripción</h4>
            <p> {description}</p>
            <img src={image_url} />
            <p>Volumen de alcohol: {abv}</p>
            <p>Amargor: {ibu}</p>
            <p>Color final: {srm}</p>
            <p>PH: {ph}</p>
            <div className="detail__ingredients">
            <h4>Ingredientes</h4>
            <span>Tipo de malta: {malt.map(item => <ul>
                <li>Nombre de Malta: {item.name}</li>
                <li>Cantidad: {item.amount.value} {item.amount.unit}</li>
            </ul>)}
            </span>
            <span>Tipo de lúpulo: {hops.map(item => <ul>
                <li>Nombre de lúpulo: {item.name}</li>
                <li>Cantidad: {item.amount.value} {item.amount.unit}</li>
            </ul>)}
            </span>
            <p>Tipo de levadura: {yeast}</p>
            </div>
            <div className="detail__tips">
            <h4>Consejos</h4>
            <img className="detail__moe" src="img/Moe_Szyslak.png" alt="Moe"></img>
            <ul>Food Pairing: {food_pairing.map(item => <li>{item}</li>)}</ul>
            <p>Consejos del creador: {brewers_tips}</p>
            </div>
            </div>
        </li>
    }
}