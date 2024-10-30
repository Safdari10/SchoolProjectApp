

const LoginHandler = async(username, password, userRole) => {

    let apiUrl = "/api/login"

try {
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, userRole }),
    });

    if(!response.ok) {
        const {message} = await response.json()
        throw new Error(message || `Log in failed`)
    }

    return await response.json()

} catch (error) {
    console.error(`Login Error`, error)
    throw error
}

}

export default LoginHandler
