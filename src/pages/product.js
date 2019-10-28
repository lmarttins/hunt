import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.url}} />
);

Product.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.title,
});

export default Product;
