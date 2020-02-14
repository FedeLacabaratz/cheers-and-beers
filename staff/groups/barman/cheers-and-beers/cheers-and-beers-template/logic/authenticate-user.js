function authenticateUser(username, password, callback) {
    if (typeof username !== "string") throw new TypeError(`username ${username} is not a string`)
    if (typeof password !== "string") throw new TypeError(`password ${password} is not a string`)
    if (typeof callback !== "function") throw new TypeError(`callback ${callback} is not a function`)
    call("https://skylabcoders.herokuapp.com/api/v2/users/auth", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, password })
    }, (error, response) => {
        if (error) {
            return callback(error)
        }
        let { error: _error, token } = JSON.parse(response.content)
        if (_error) return callback(new Error(_error))
        
        const _token = token.split('.')
        const id = JSON.parse(atob(_token[1])).sub
    
        if(!id) throw new Error('No user id in token')
        
        call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
            method: "GET",
            headers: { 
                'Content-Type': "application/json",
                'Authorization': ` Bearer ${token}`
            }
        },(error, response) => {
            if(error) return callback(error)    

            let userData = {error: _error, app} = JSON.parse(response.content)
            if(userData.error) return callback(new Error(_error))
            else if (!(userData.app === "CandB")) return callback(new Error("username and/or password wrong"))
            
            callback(undefined, token)

        })

    })


}