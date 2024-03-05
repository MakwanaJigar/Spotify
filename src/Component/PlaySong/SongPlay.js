import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';


import Shuffle from '../../Assets/PlaySong/shuffle.png';
import previous from '../../Assets/PlaySong/previous.png';
import pause from '../../Assets/PlaySong/pause.png';
import Play from '../../Assets/PlaySong/Play.png';
import next from '../../Assets/PlaySong/next.png';
import share from '../../Assets/PlaySong/share.png';
import down from '../../Assets/PlaySong/down.png';
import dots from '../../Assets/PlaySong/dots.png';
import TrackPlayer, { State, usePlaybackState, useProgress } from 'react-native-track-player';

const SongPlay = ({ route }) => {
  const { url, title, artist, artwork } = route.params;
  const [playBTN, setPlayBTN] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const playBackState = usePlaybackState()
  const Progress = useProgress()


  const togglePalyBack =async playBackState => {
    console.log(playBackState);
    if(playBackState === State.Paused || playBackState === State.Ready){
      await TrackPlayer.play()
    }else{
      await TrackPlayer.pause()
    }
  }

  // const togglePlayNext = playBackState => {
  //   TrackPlayer.skipToNext();
  //   playBackState()
  // }


  const onSliderValueChange = (value) => {
    // Update the progress state when the slider value changes
    setProgress(value);
  };

  const handlePlay = async () => {
    setPlayBTN(!playBTN)
    await TrackPlayer.skip(1)/
    await TrackPlayer.play()
  }

  useEffect(() => {
    setupPlayer()
  },[])

  const setupPlayer = async () => {

    try {

      await TrackPlayer.setupPlayer()

      await TrackPlayer.updateOptions({
        // Media controls capabilities
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],

        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play, Capability.Pause],

      });
      await TrackPlayer.add("../../Assets/Audio/Titanic.mp3")
    } catch (error) {
      console.log("error");
    }
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
        <View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={artwork} style={{ width: '80%', height: 400, objectFit: 'contain' }} />
          </View>
          <View style={{ marginLeft: 50, marginTop: 50 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{artist}</Text>
          </View>

          {/* .......SLIDER........ */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Progress: {Math.floor(progress)}%
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
                <TouchableOpacity onPress={async () => {
                  console.log(playBackState,"Previous");
                  await TrackPlayer.skipToPrevious()
                  togglePalyBack(playBackState)
                }}>
                  <Image source={previous} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FFF', width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }} 
                onPress={async() => {
                  await TrackPlayer.skip(1)
                  // await TrackPlayer.play()
                  togglePalyBack(playBackState)
                }}
                >
                  {playBTN ? <Image source={pause} style={{ width: 30, height: 30 }} /> : <Image source={Play} style={{ width: 30, height: 30, marginLeft: 5 }} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => {
                  console.log(playBackState,"Next");
                  await TrackPlayer.skipToNext()
                  togglePalyBack(playBackState)
                }}>
                  <Image source={next} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
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
