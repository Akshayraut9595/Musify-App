import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import TrackPlayer, { State, usePlaybackState, PlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/AntDesign';
import { playBackService } from '../../musicPlayerServices';

const ControlCentral = () => {
    const playBackState = usePlaybackState()


  // skip to next
  const skipTonext = async () => {
    await TrackPlayer.skipToNext();
  };
  // skip to previous
  const skipToprevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

//   const togglePlayBack = async (playBack: PlaybackState) => {
//     const currentTrack = await TrackPlayer.getActiveTrack();

//     if (currentTrack !== null) {
//       if (playBack.state === State.Paused || playBack.state === State.Ready) {
//         await TrackPlayer.play();
//       } else {
//         await TrackPlayer.pause();
//       }
//     }
//   };
const togglePlayBack = async () => {
    const currentTrack = await TrackPlayer.getActiveTrack();
    const playBackState = await TrackPlayer.getPlaybackState();
  
    if (currentTrack !== null) {
      playBackState.state === State.Paused || playBackState.state === State.Ready
        ? await TrackPlayer.play()
        : await TrackPlayer.pause();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToprevious}>
        <Icon style={styles.icon} name="stepbackward" size={40} />
      </Pressable>
      <Pressable onPress={() => togglePlayBack()}>
        <Icon style={styles.icon} name={playBackState?.state === State.Playing ? "pause" : "play"} size={75} />
      </Pressable>
      <Pressable onPress={skipTonext}>
        <Icon style={styles.icon} name="stepforward" size={40} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});

export default ControlCentral;
