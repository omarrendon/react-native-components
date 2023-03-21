import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {themeStyles} from '../theme/appTheme';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#5856D6" size={23} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="#5856D6" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
