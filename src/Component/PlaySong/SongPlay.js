import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Slider from '@react-native-community/slider';


import Shuffle from '../../Assets/PlaySong/shuffle.png';
import previous from '../../Assets/PlaySong/previous.png';
import pause from '../../Assets/PlaySong/pause.png';
import Play from '../../Assets/PlaySong/Play.png';
import next from '../../Assets/PlaySong/next.png';
import share from '../../Assets/PlaySong/share.png';
import down from '../../Assets/PlaySong/down.png';
import dots from '../../Assets/PlaySong/dots.png';
import TrackPlayer from 'react-native-track-player';


import Sound from 'react-native-sound';
import { useDispatch } from 'react-redux';
import {addToFavourite} from '../redux/action';
import { useNavigation } from '@react-navigation/native';

const SongPlay = ({ route }) => {
  const { url, title, artist, artwork} = route.params;
  const navigation = useNavigation()
  const [progress, setProgress] = useState(0);

  const onSliderValueChange = (value) => {
    setProgress(value);
  };

  const [sound, setSound] = useState(!sound);
  const [isPlayingSound, setIsPlayingSound] = useState(false);


  useEffect(() => {
    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.add({
        id: 'trackId',
        url: url, 
        title: title,
        artist: artist,
      });
    });

    const newSound = new Sound(url, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
      }
    });

    setSound(newSound);

    // Cleanup sound instance on unmount
    return () => {
      newSound.release();
    };
  }, []);

  const playSound = () => {
    if (sound) {
      sound.play((success) => {
        if (!success) {
          console.log('Sound playback failed');
        }
        setIsPlayingSound(false); // Reset the state after playback ends
      });
      setIsPlayingSound(true);
    }
  };

  const pauseSound = () => {
    if (sound) {
      sound.pause();
      setIsPlayingSound(false);
    }
  };

  const dispatch = useDispatch();  
  const handleFav = () => {
    dispatch(addToFavourite)
    navigation.navigate("Library",{title,artist,artwork,})
  }

  return (
    <ScrollView style={{ height: '100%', width: '100%', backgroundColor: '#1A1C30' }}>
      <View>
        {/* .....TOP VIEW..... */}
        <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', columnGap: 70, marginTop: '3%', marginBottom: '10%' }}>
          <TouchableOpacity style={{}}>
            <Image source={down} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <View>
            <Text style={{ color: '#FFF', fontSize: 12 }}>RECOMMENDED FOR YOU</Text>
          </View>
          <TouchableOpacity style={{}}>
            <Image source={dots} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>

        {/* ....MAIN VIEW...... */}
        <View >
        <ImageBackground
        source={artwork}
        style={{ width: '90%', height: 300, borderRadius: 200, overflow: 'hidden',alignSelf:'center',backgroundColor:'#FFF',alignItems:'center',justifyContent:'center' }}
        imageStyle={{ borderRadius: 200}}
      >
      </ImageBackground>
          <View style={{ marginLeft: 50, marginTop: 50 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{artist}</Text>
          </View>

          {/* .......SLIDER........ */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              {/* Progress: {Math.floor(progress)}% */}
            </Text>
            <Slider
              style={{ width: '100%' }}
              minimumValue={0}
              maximumValue={100}
              value={progress}
              onValueChange={onSliderValueChange}
              thumbTintColor="#F9F6EE"
              minimumTrackTintColor="white"
              maximumTrackTintColor="#FFFFFF"
            />

            {/* .....START AND  END TIME */}
            <View style={{ width: '90%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={{ color: '#FFF' }}>00:00</Text>
              <Text style={{ color: '#FFF' }}>03:45</Text>
            </View>

            {/* .....PLAY PAUSE SKIP AND PREVIOUS BTN ...... */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', marginTop: 30 }}>
              <View>
                <TouchableOpacity style={{}}>
                  <Image source={Shuffle} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', columnGap: 20 }}>
                <TouchableOpacity>
                  <Image source={previous} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                {isPlayingSound ? (
                  <TouchableOpacity
                    style={{ backgroundColor: '#FFF', width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}
                    onPress={pauseSound}
                  >
                    <Image source={pause} style={{ width: 30, height: 30 }} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{ backgroundColor: '#FFF', width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}
                    onPress={playSound}
                  >
                    <Image source={Play} style={{ width: 30, height: 30 }} />
                  </TouchableOpacity>
                )}
                <TouchableOpacity>
                  <Image source={next} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity 
                onPress={handleFav}
                // onPress={() => navigation.navigate("Library",{
                //   url : url,
                //   title: title,
                //   artist : artist,
                //   artwork : artwork,
                //   movie:movie
                // })}
                >
                  <Image source={share} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SongPlay;
