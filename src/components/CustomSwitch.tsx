import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';
import {themeStyles} from '../theme/appTheme';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: `${themeStyles.primary}`}}
      thumbColor={Platform.OS === 'android' ? `${themeStyles.primary}` : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
