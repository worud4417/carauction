async function fetchUser(id,email) {
    url = 'http://52.78.89.146:3000/api/Member';
    filter = `{"where":{"and":[{"email":"${email}"},{"lastName":"${id}"}]}}`;
    url = `${url}?filter=${filter}`
    return await fetch(url,{
        method:"GET",
    }).then((resp)=>{
        return resp.json()
    })
}

export default fetchUser;