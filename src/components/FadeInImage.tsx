import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimations} from '../hooks/useAnimations';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeInAnimation} = useAnimations();
  const [isLoading, setIsLoading] = useState(true);

  const finishiLoading = () => {
    setIsLoading(false);
    fadeInAnimation();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          size={30}
          color="#5856D6"
          style={{position: 'absolute'}}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishiLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
