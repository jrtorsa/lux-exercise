export const getInfo = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(url)
    const info = await res.json()
    return info
}