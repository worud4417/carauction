import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

class CarComponent extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.car)
        return(
            <View>
                <TouchableOpacity>
                    <Image source={{uri:this.props.car.image}}></Image>
                    <Text>{this.props.car.model}</Text>
                    <Text>{this.props.car.vin}</Text>
                    <Text>{this.props.car.brand}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CarComponent;

{/* image:"https://ww.namu.la/s/928440305a248aa863d041ea81329e6c647c8fb4058a2b26f45a707003c066343431ac0a5a3b03019adf29a084ddc8aa56534f1967008fc1fc652173ef227103902e2ac26f6daca253a9ace9707fab6d57c87c1af5212ad7b157ddb53bb68633",
        model:"K7",
        vin:"1",
        brand:"KIA",
        year: 1997 */}