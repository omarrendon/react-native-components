import React, {useState} from 'react';
import {Text, View, RefreshControl, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitle} from '../components/HeaderTitle';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('loading finished');
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View>
        <HeaderTitle title="Pull To Refresh" />
      </View>
    </ScrollView>
  );
};
