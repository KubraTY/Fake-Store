import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, ActivityIndicator} from 'react-native';
import styles from './Products.style';
import Config from 'react-native-config';
import axios from 'axios';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/loading';
import Error from '../../components/Error/error';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);
  const handleProductSelect = id => {
    navigation.navigate('Product Detail', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};
export default Products;
