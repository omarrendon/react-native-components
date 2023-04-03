import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {HeaderTitle} from '../components/HeaderTitle';
import {themeStyles} from '../theme/appTheme';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => (
    <FadeInImage
      uri={`https://picsum.photos/id/${item}/500/400`}
      style={{width: '100%', height: 400}}
    />
  );

  const footerLoader = () => {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={50} color={'#5856D6'} />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={footerLoader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
  },
  loaderContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
