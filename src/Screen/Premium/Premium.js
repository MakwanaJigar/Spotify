import React from 'react';
import { View, Text, TouchableOpacity ,Image} from 'react-native';

import thunder from '../../Assets/YouComponent/thunder.png';
import timer from '../../Assets/YouComponent/timer.png';
import internet from '../../Assets/YouComponent/internet.png';
import setting from '../../Assets/YouComponent/setting.png';

const Premium = () => {
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#000'}}>
      
      <View>

        <TouchableOpacity style={{height:90,flexDirection:'row',alignItems:'center',columnGap:10,borderBottomColor:"white",borderBottomWidth:0.5}}>
          <View style={{ width: 50, backgroundColor: '#ffbb99', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 30 ,marginLeft:15}}>
            <Text style={{ fontSize: 24, color: '#000', fontWeight: 'bold' }}>J</Text>
          </View>
          <View>
            <Text style={{color:'#FFF',fontSize:24,fontWeight:'bold'}}>Jigar Makwana</Text>
            <Text style={{color:'gray',fontWeight:'bold'}}>View profile</Text>
          </View>
        </TouchableOpacity>

       <View style={{marginLeft:10,marginTop:35,rowGap:25}}>
       
       <TouchableOpacity style={{flexDirection:'row',alignItems:'center',columnGap:10}}>
        <Image source={thunder} style={{width:30,height:30}}/>
        <Text style={{color:'white',fontSize:16}}> What's new</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{flexDirection:'row',alignItems:'center',columnGap:10}}>
         <Image source={timer} style={{width:30,height:30}}/>
        <Text style={{color:'white',fontSize:16}}>Listening history </Text>
       </TouchableOpacity>

       <TouchableOpacity style={{flexDirection:'row',alignItems:'center',columnGap:10}}>
         <Image source={internet} style={{width:30,height:30}}/>
        <Text style={{color:'white',fontSize:16}}>Premium</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={{flexDirection:'row',alignItems:'center',columnGap:10}}>
         <Image source={setting} style={{width:30,height:30}}/>
        <Text style={{color:'white',fontSize:16}}>Setting and privacy</Text>
       </TouchableOpacity>

       </View> 


      </View>

    </View>
  );
}

export default Premium;
