import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.body_container}>
          <Text style={styles.product_title}>{product.title}</Text>
          <Text style={styles.product_price}>{product.price} TL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ProductCard;
