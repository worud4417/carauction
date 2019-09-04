async function fetchCarList(email){
    url = "http://52.78.89.146:3000/api/Car"
    const filter = {
        where:{
            owner:encodeURIComponent(`resource:com.betweak.carauction.Member#${email}`)           
        }
    }
    term = JSON.stringify(filter);
    url = `${url}?filter=${term}`
    return await fetch(url, {
        method:"GET"
    }).then(resp=>{
        if(!(200<=resp.status<300)){
            return false
        }
        else{
            return resp.json()
        }
    });
}

export default fetchCarList