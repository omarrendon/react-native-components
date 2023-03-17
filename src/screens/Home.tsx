import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {MenuItem} from '../interfaces/appInterfaces';
import {themeStyles} from '../theme/appTheme';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101',
  },
  {
    name: 'Animatioin 102',
    icon: 'albums-outline',
    component: 'Animation102',
  },
];

export const Home = () => {
  const {top} = useSafeAreaInsets();

  const RenderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={themeStyles.title}>Opciones del Menú</Text>
      </View>
    );
  };

  const ItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <View style={{...themeStyles.globalMargin, ...styles.container}}>
      <RenderListHeader />
      {/* <ItemSeparator /> */}
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    width: 1,
    height: 1,
    marginVertical: 8,
  },
});
