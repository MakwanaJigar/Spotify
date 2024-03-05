import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import Camera from '../../Assets/SearchComponent/camera.png'

import IMG from '../../Assets/HomeIMG/Recently/Badshah.png'

const Search = () => {
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#000' }}>


      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
        <Text style={{ color: '#FFF', fontSize: 24, fontWeight: 'bold' }}>Search</Text>

        <TouchableOpacity>
          <Image source={Camera} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
      </View>
      {/* .......SEARCH INPUT */}
      <View style={{ width: '98%', height: 50, borderRadius: 10, backgroundColor: '#FFF' }}>
        <TextInput placeholder='What do you want to listen to?' style={{ fontWeight: 'bold', fontSize: 18 }} />
      </View>

      <Text style={{color:'#FFF',fontSize:18,fontWeight:'bold',marginTop:10,marginLeft:15}}>Browser all</Text>

      {/*  .........BROWSER ALL */}

      <ScrollView style={{ marginTop: 30 }}>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', columnGap: 20 ,marginBottom:20}}>
          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: 'red', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Music
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#ffc300', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Podcast
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', columnGap: 20 ,marginBottom:20}}>
          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#ff8b00', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Live Events
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#33a12c', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Made For You
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', columnGap: 20,marginBottom:20 }}>
          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#2ca17e', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
             New Realeses
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#73ffd5', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Hindi
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', columnGap: 20 ,marginBottom:20}}>
          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#348396', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Punjabi
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#345b96', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Tamil
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', columnGap: 20 ,marginBottom:20}}>
          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#172b83', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Ghazals
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: 'gray', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Podcast Charts
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', columnGap: 20 ,marginBottom:20}}>
          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: 'brown', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Video Podcast
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: 'green', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Podcast New Releases
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', columnGap: 20 ,marginBottom:20}}>
          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#9082ab', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Business & Technology
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#1f074f', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Charts
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', columnGap: 20,marginBottom:20 }}>
          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: 'pink', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Love
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#7c0593', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Redio
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', columnGap: 20 ,marginBottom:20}}>
          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#ec89bf', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Mood
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#ec89bf', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Party
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', columnGap: 20 ,marginBottom:20}}>
          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#056135', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Hip-Hop
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: '45%', backgroundColor: '#7a4e4f', borderRadius: 8 }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10 }}>
              Chill
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>


    </View>



  );
}

export default Search;
