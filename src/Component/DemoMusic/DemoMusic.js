import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Sound from 'react-native-sound';

const DemoMusic = () => {
  const [sound, setSound] = useState(null);

  const playSound = () => {
    const sound = new Sound('../../Assets/Audio/AeZindagiGaleLagaLe.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('Duration in seconds: ' + sound.getDuration());
      sound.play((success) => {
        if (success) {
          console.log('Successfully played the sound');
        } else {
          console.log('Failed to play the sound');
        }
      });
    });
    setSound(sound);
  };

  const stopSound = () => {
    if (sound) {
      sound.stop();
    }
  };

  return (
    <View>
      <Button title="Play" onPress={playSound} />
      <Button title="Stop" onPress={stopSound} />
    </View>
  );
}

export default DemoMusic;
