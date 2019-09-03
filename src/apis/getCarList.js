async function fetchCarList(email){
    url = "http://52.78.89.146:3000/api/Car"
    console.log(email)
    const filter = {
        where:{
            owner:"resource:com.betweak.carauction.Member%23"+`${email}`           
        }
    }
    term = JSON.stringify(filter);
    console.log(term)
    url = `${url}?filter=${term}`
    console.log(url)
    return await fetch(url, {
        method:"GET"
    }).then(resp=>{
        if(!(200<=resp.status<300)){
            return false
        }
        else{
            console.log(resp)
            return resp.json()
        }
    });
}

export default fetchCarList