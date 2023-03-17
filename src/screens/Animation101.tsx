import React, {useRef} from 'react';
import {StyleSheet, Text, View, Animated, Button, Easing} from 'react-native';
import {useAnimations} from '../hooks/useAnimations';

export const Animation101 = () => {
  const {
    fadeInAnimation,
    fadeOutAnimation,
    opacity,
    position,
    startMovingPosition,
  } = useAnimations();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FadeIn animation</Text>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <View style={styles.btnContainer}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeInAnimation();
            startMovingPosition(200);
          }}
        />
        <Button title="FadeOut" onPress={fadeOutAnimation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 100,
  },
});
