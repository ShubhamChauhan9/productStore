import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const DetailScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [productId]);

  if (!product) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      {/* Display other product details as needed */}
    </View>
  );
};

export default DetailScreen;
