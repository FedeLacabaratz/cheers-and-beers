/**
 * logic - register-user
 * @param {string} name -  name typeof string
 * @param {string}  surname -  surname typeof string
 * @param {string}  username -  username typeof string
 * @param {string}  password -  password typeof string
 * @param {function} callback - function
 * @return {Error} Error - in error case
 */

function registerUser(name, surname, username, password, callback) {
    if (typeof name !== "string") throw new TypeError(`name ${name} is not a string`)
    if (!name.trim()) throw new Error("name is empty")
    if (typeof surname !== "string") throw new TypeError(`surname ${surname} is not a string`)
    if (!surname.trim()) throw new Error("surname is empty")
    if (typeof username !== "string") throw new TypeError(`username ${username} is not a string`)
    if (!username.trim()) throw new Error("username is empty")
    if (typeof password !== "string") throw new TypeError(`password ${password} is not a string`)
    if (!password.trim()) throw new Error("password is empty")
    if (typeof callback !== "function") throw new TypeError(`callback ${callback} is not a function`)

    call("https://skylabcoders.herokuapp.com/api/v2/users", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({name, surname, username, password, app:"CandB" })
    }, (error, response) => {
        if (error) return callback(error)
        if (response.status === 201) {
            callback()
        } else if (response.status === 409) {
            const { error } = JSON.parse(response.content)
            callback(new Error(error))
        } else {
            callback(new Error("Unknown Error"))
        }
    })

}