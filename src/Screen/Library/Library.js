import React from 'react';
import { View, Text, ScrollView, Image, Pressable, Alert } from 'react-native';
import BackArrow from '../../Assets/Library/back.png';
import more from '../../Assets/Library/more.png';
import Music1 from '../../Assets/HomeIMG/Recommended/Music1.png';
import { useSelector } from 'react-redux';

const Library = () => {
  const songs = useSelector((state) => state.reducer);



  return (
    <View style={{ backgroundColor: '#000', height: '100%', width: '100%' }}>

      {/* ...........TOP BAR......... */}
      <Pressable style={{ width: '100%', height: '9%', backgroundColor: '#000133', alignItems: 'center', flexDirection: 'row', columnGap: 20 }}>

        <Image source={BackArrow} style={{ width: 25, height: 25, marginLeft: 10 }} />
        <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}>
          Liked Songs
        </Text>

      </Pressable>

      {/* ........SONGS LIST...... */}
      <ScrollView>
        {songs.map(song => (
          <View key={song.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
              <Image source={Music1} style={{ width: 50, height: 50, objectFit: 'cover' }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: '#FFF' }}>
                  {song.title} , {song.movie}
                </Text>
                <Text style={{ color: '#FFF' }}>
                  {song.artist}
                </Text>
              </View>
            </View>
            <Image source={more} style={{ width: 30, height: 30, objectFit: 'cover' }} />
          </View>
        ))}
      </ScrollView>

    </View>
  );
}

export default Library;
