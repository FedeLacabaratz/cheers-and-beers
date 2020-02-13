function Detail({ beer, onFav, fav }) {
    
    const { id, name, tagline, first_brewed, description, image_url, abv, ibu, srm, ph, ingredients, food_pairing, brewers_tips, contributed_by } = beer[0]
    const { malt, hops, yeast } = ingredients

    if (!fav || !fav.includes(id)) {
        return <li className="detail">

            <h3 className="detail__name">Nombre: {name} <span onClick={() => onFav(id)}>🤍</span></h3>
            <p className="detail__tagline" detail__>Lema: {tagline}</p>
            <p className="detail__firstb">Fecha de primera elaboración: {first_brewed}</p>
            <p className="detail__description">Descripción: {description}</p>
            <img className="detail__image" src={image_url} />
            <p className="detail__abv" >Volumen de alcohol: {abv}</p>
            <p className="detail__ibu">Amargor: {ibu}</p>
            <p className="detail__srm">Color final: {srm}</p>
            <p className="detail__ph">PH: {ph}</p>
            <p>Tipo de malta: {malt.map(item => <ul> 
                <li>Nombre de Malta: {item.name}</li>
                <li>Cantidad: {item.amount.value} {item.amount.unit}</li>
            </ul>)}
            </span>
            <span>Tipo de lúpulo: {hops.map(item => <ul> 
                <li >Nombre de lúpulo: {item.name}</li>
                <li >Cantidad: {item.amount.value} {item.amount.unit}</li>
            </ul>)}
            </span>
            <p>Tipo de levadura: {yeast}</p>
            <ul>Food Pairing: {food_pairing.map(item=> <li>{item}</li>)}</ul>
            <p>Consejos del creador: {brewers_tips}</p>
            <p>Creada por: {contributed_by}</p>
        </li>
    } else {
        return <li className="detail">
            <h3>Nombre: {name} <span onClick={() => onFav(id)}>❤️</span></h3>
            <p>Lema: {tagline}</p>
            <p>Fecha de primera elaboración: {first_brewed}</p>
            <p>Descripción: {description}</p>
            <figure>
                <img src={image_url} />
            </figure>
            <p>Volumen de alcohol: {abv}</p>
            <p>Amargor: {ibu}</p>
            <p>Color final: {srm}</p>
            <p>PH: {ph}</p>
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
            <ul>Food Pairing: {food_pairing.map(item=> <li>{item}</li>)}</ul>
            <p>Consejos del creador: {brewers_tips}</p>
            <p>Creada por: {contributed_by}</p>
        </li>
    }
}