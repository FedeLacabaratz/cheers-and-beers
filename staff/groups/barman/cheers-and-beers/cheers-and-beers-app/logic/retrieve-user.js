function retrieveUser(token, callback){
    if(typeof token !== 'string') throw  new TypeError(`token ${token} is not a string`)
    if(typeof callback !== 'function') throw  new TypeError(`${callback} is not a function`)

    const _token = token.split('.')
    const id = JSON.parse(atob(_token[1])).sub

    if(!id) throw new Error('No user id in token')

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'Authorization': ` Bearer ${token}`}
    }, (error, response)=> {
        if(error) return callback(error)    

        let userData = {error: _error, username} = JSON.parse(response.content)
        if(_error) return callback(new Error(_error))

        const realName = userData.username.split(".")[1]
        
        userData = {username: realName}
        debugger
        callback(undefined, userData)

    })

}