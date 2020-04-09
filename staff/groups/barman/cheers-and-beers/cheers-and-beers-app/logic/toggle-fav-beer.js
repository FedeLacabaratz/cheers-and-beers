/**
 * logic - toggle-fav-beer
 * @param {string} token - credentials acces
 * @param {string} idBeer - the id of the item that we try to find
 * @param {function} callback - function
 * @returns {Error} Error - in error case
 * @returns {object}  - object with data of the user, fav...
 * undefined, (error, response)
 */

function toggleFavBeer(token, idBeer, callback) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)
    if (typeof idBeer !== 'number') throw new TypeError(`idBeer ${idBeer} is not a number`)
    if (typeof callback !== 'function') throw new TypeError(`callback ${callback} is not a function`)

    call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }, (error, response) => {
        if (error) return callback(error)

        const user = JSON.parse(response.content)

        let {fav} = user
        if (!fav)
            fav = [idBeer]
        else
            fav.includes(idBeer) ? fav = fav.filter(id => id !== idBeer) : fav.push(idBeer)

        call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({fav})
        }, (error, response) => {
            if (error) return callback(error)

            callback(error, response)
        })
    })
}