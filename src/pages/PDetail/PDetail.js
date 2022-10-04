import React from 'react';
import styles from './PDetail.style';
import {SafeAreaView, Text, Image, View} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Pdetail = ({route}) => {
  const {id} = route.params;
  console.log(id);
  const {loading, error, data} = useFetch(Config.API_URL + `/${id}`);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}klkjhlj</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}TL</Text>
      </View>
    </SafeAreaView>
  );
};
export default Pdetail;
