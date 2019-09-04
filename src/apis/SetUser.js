import fetchUser from './GetUser';

async function fetchSetUser(blance,email,firstName,lastName){

    member = await fetchUser(lastName,email)

    if (member.length == 0){
        url = 'http://52.78.89.146:3000/api/Member';
        return await fetch(url,{
            method:"POST",
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                $class:"com.betweak.carauction.Member",
                balance:blance,
                email:email,
                firstName:firstName,
                lastName:lastName
            })
        }).then((resp)=>{
            if(200<=resp.status<300){
                return true
            }
            else{
                return false
            }
        })
    }
    else{
        return false
    }
}

export default fetchSetUser