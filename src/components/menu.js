import { ListItem } from 'react-native-elements'
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './menu_style';
import { brandFilter, menuItems } from '../home/actions'

export const MenuContainer = () => {
    const dispatch = useDispatch();
    const list = [
        {
          name: 'Nodels',
        },
        {
          name: 'Burger',
        },
        {
          name: 'Fried chicken',
        },
    ];
    handle_brand_filter = (brand_val) => {
        dispatch(brandFilter(brand_val));
        dispatch(menuItems(false));
    }    
    return(
        <View style={styles.menu_container}>
        {
            list.map((l, i) => (
            <ListItem key={i} onPress={()=> handle_brand_filter(l.name)} bottomDivider>
                <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            ))
        }
        </View>
    );
}
