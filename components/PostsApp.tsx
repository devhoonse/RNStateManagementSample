import React from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import usePosts from '../hooks/usePosts';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  loading: {
    flex: 1,
  },
  item: {
    padding: 8,
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
  },
});
function PostsApp() {
  const {data, loading, refetch} = usePosts();

  return (
    <SafeAreaView style={styles.block}>
      {data ? (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={() => <View style={styles.separator} />}
        />
      ) : (
        <ActivityIndicator
          style={styles.loading}
          size={'large'}
          color={'black'}
        />
      )}
      <Button title={'새로고침'} onPress={refetch} disabled={loading} />
    </SafeAreaView>
  );
}
export default PostsApp;
