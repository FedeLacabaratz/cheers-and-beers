/**
 * logic - search-beer
 * @param {string} token - credentials acces
 * @param {string} query - searched beer
 * @param {string} param - end point
 * @param {function} callback - function
 * @returns {Error} Error - in error case
 * @returns {object}  - object with user's data, fav...
 * undefined, (error, response)
 */

function searchBeer(token, query, param, callback) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)
    if (typeof query !== 'string') throw new TypeError(`query ${query} is not a string`)
    if (typeof param !== 'string') throw new TypeError(`param ${param} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    const _token = token.split('.')
    const id = JSON.parse(atob(_token[1])).sub

    if (!id) throw new Error('no user id in token')

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
    }, (error, response) => {
        if (error) return callback(error)

        const userData = { error: _error, fav } = JSON.parse(response.content)

        if (_error) return callback(new Error(_error))

        const userFav = userData.fav

        call(`https://api.punkapi.com/v2/beers?${param}=${query}`, undefined, (error, response) => {
            if (error) return callback(error)


            if (response.status === 200) {
                const results = JSON.parse(response.content)
                callback(undefined, results, userFav)

            } else if (response.status === 400 || response.status === 500) {
                const { error } = JSON.parse(response.content)
                callback(new Error(error))

            } else {
                callback(new Error('Unknown Error'))
            }
        })
    })
}