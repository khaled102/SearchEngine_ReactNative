
import React from 'react';
import { connect } from 'react-redux';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';

const burger_array = [
    {name: 'Burger cheese', price: '15'},
    {name: 'Burger meet', price: '30'},
    {name: 'Burger fries', price: '12'},
    {name: 'Burger cheese', price: '27'},
    {name: 'Burger spicy', price: '20'},
    {name: 'Burger meet', price: '15'},
    {name: 'Burger cheese', price: '15'},
    {name: 'Burger cheese', price: '95'},
]

const nodels_array = [
    {name: 'Nodels cheese', price: '15'},
    {name: 'Nodels meet', price: '30'},
    {name: 'Nodels fries', price: '12'},
    {name: 'Nodels cheese', price: '27'},
    {name: 'Nodels spicy', price: '20'},
    {name: 'Nodels meet', price: '15'},
    {name: 'Nodels cheese', price: '15'},
    {name: 'Nodels cheese', price: '95'},
]

const fried_array = [
    {name: 'Fried cheese', price: '15'},
    {name: 'Fried meet', price: '30'},
    {name: 'Fried fries', price: '12'},
    {name: 'Fried cheese', price: '27'},
    {name: 'Fried spicy', price: '20'},
    {name: 'Fried meet', price: '15'},
    {name: 'Fried cheese', price: '15'},
    {name: 'Fried cheese', price: '95'},
]

export const ProductItems = (props) => {
    
  const menuStatus    = useSelector(({ home }) => home.menuReducer);
  const category      = useSelector(({ home }) => home.brandFilterReducer);
  const searchInfo   = useSelector(({ home }) => home.searchReducer);
  const {price_filter} = props;
  const handle_fetch_product_burger = () => {

    {return burger_array.map((item, index) => (
        item.name.toLowerCase().match(searchInfo.search_input) && price_filter <= item.price ||  item.price.toLowerCase().match(searchInfo.search_input) && price_filter <= item.price  ?
            <View key={index} style={styles.card_view}>
                <Image source={require('../../../assets/product.jpg')} style={styles.product_image}/>
                <Text style={styles.product_text}>{item.name}</Text>
                <Text style={styles.product_text}>{item.price} EGP</Text>
            </View>
            :
        !searchInfo.search_input && price_filter <= item.price &&
            <View key={index} style={styles.card_view}>
                <Image source={require('../../../assets/product.jpg')} style={styles.product_image}/>
                <Text style={styles.product_text}>{item.name}</Text>
                <Text style={styles.product_text}>{item.price} EGP</Text>
            </View>
        ))
    };
  }

  const handle_fetch_product_nodels = () => {
    {return nodels_array.map((item, index) => (
        item.name.toLowerCase().match(searchInfo.search_input) && price_filter <= item.price ||  item.price.toLowerCase().match(searchInfo.search_input) && price_filter <= item.price  ?
            <View key={index} style={styles.card_view}>
                <Image source={require('../../../assets/nodles.png')} style={styles.product_image}/>
                <Text style={styles.product_text}>{item.name}</Text>
                <Text style={styles.product_text}>{item.price} EGP</Text>
            </View>
            :
        !searchInfo.search_input && price_filter <= item.price &&
            <View key={index} style={styles.card_view}>
                <Image source={require('../../../assets/nodles.png')} style={styles.product_image}/>
                <Text style={styles.product_text}>{item.name}</Text>
                <Text style={styles.product_text}>{item.price} EGP</Text>
            </View>
        ))
    };
  }

  const handle_fetch_product_fried = () => {
    {return fried_array.map((item, index) => (
        item.name.toLowerCase().match(searchInfo.search_input) && price_filter <= item.price ||  item.price.toLowerCase().match(searchInfo.search_input) && price_filter <= item.price  ?
            <View key={index} style={styles.card_view}>
                <Image source={require('../../../assets/sandwich.jpg')} style={styles.product_image}/>
                <Text style={styles.product_text}>{item.name}</Text>
                <Text style={styles.product_text}>{item.price} EGP</Text>
            </View>
            :
        !searchInfo.search_input && price_filter <= item.price &&
            <View key={index} style={styles.card_view}>
                <Image source={require('../../../assets/sandwich.jpg')} style={styles.product_image}/>
                <Text style={styles.product_text}>{item.name}</Text>
                <Text style={styles.product_text}>{item.price} EGP</Text>
            </View>
        ))
    };
  }
  return(
    <View style={styles.card_container}>
        {!menuStatus.status && category.brand == 'Burger' && handle_fetch_product_burger()}
        {!menuStatus.status && category.brand == 'Nodels' && handle_fetch_product_nodels()}
        {!menuStatus.status && category.brand == 'Fried chicken' && handle_fetch_product_fried()}
    </View>
  )
}