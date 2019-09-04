async function fetchSetCar(image,model,vin,brand,email){
    url="http://52.78.89.146:3000/api/Car"

    return await fetch(url,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:{
            $class:"com.betweak.carauction.Car",
            vin:vin,
            
            image:image,
            model:model,
            brand:brand,
            owner:{
                email:email
            }
        }
    })
}

export default fetchSetCar