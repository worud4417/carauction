async function fetchGetAuctionCarList(vin){
    let url= "http://52.78.89.146:3000/api/CarListing"
    let filter = {
        include:"resolve",
        where:{
            car:encodeURIComponent(`resource:com.betweak.carauction.Car#${vin}`)
        }
    }
    url = `${url}?filter=${JSON.stringify(filter)}`
    return await fetch(url,{
        method:"GET"
    }).then(resp=>{
        if(!(200<=resp.status<300)){
            return false
        }
        else{
            return resp.json()
        }
    })
}

export default fetchGetAuctionCarList