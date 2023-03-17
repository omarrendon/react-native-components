import React, {useRef} from 'react';
import {StyleSheet, Text, View, PanResponder, Animated} from 'react-native';

export const Animation102 = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: true}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drag and drop animation</Text>

      <Animated.View
        {...panResponder.panHandlers}
        style={{
          ...styles.box,
          transform: [
            {
              translateX: pan.getLayout().left,
            },
            {
              translateY: pan.getLayout().top,
            },
          ],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#75CEDB',
    width: 150,
    height: 150,
    borderRadius: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 100,
  },
});
