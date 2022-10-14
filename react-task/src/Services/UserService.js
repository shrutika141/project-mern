export const Userdetails = async () => {
    const response = await fetch(`/userDetails`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

    })
    return await response.json();
}
export const LoginFunc = async (data) => {
    console.log('data api call', data)
    const response = await fetch(`/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password,
        })
    })
    return await response.json();
}
export const SignupFunc = async (data) => {
    console.log('data api call', data)
    const response = await fetch(`/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            username: data.username,
            email: data.email,
            password: data.password,
        })
    })
    return await response.json();
}