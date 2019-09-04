async function fetchGetCarDetail(vin){
    let url = "http://52.78.89.146:3000/api/Car"
    filter = {
        include:"resolve"
    }
    url =`${url}/${vin}?filter=${JSON.stringify(filter)}`
    return carDetail = await fetch(url,{
        method:"GET"
    }).then(resp=>{
        if(200<=resp.status<300){
            return resp.json()
        }
        else{
            return false;
        }
    })
}

export default fetchGetCarDetail