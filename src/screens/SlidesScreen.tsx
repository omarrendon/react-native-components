import React from 'react';
import {View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {themeStyles} from '../theme/appTheme';

export const SlidesScreen = () => {
  return (
    <View style={themeStyles.globalMargin}>
      <HeaderTitle title="Slides Screen" />
    </View>
  );
};
