import {View, StyleSheet, FlatList} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {menuItems} from '../menuItems';
import {themeStyles} from '../theme/appTheme';

export const Home = () => {
  const itemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <View style={{...themeStyles.globalMargin, ...styles.container}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones del Menú" />}
        ItemSeparatorComponent={itemSeparator}
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
    marginVertical: 8,
  },
});
