import React, {useD} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './header_style';
import { Icon } from 'react-native-elements'
import { menuItems } from '../actions';

export const HomeHeader = () => {

    const dispatch = useDispatch();
    const menuStatus = useSelector(({ home }) => home.menuReducer);

    const handle_show_menu = () => {
        let status = false;
        if(!menuStatus.status){
            status = true;
        }
        dispatch(menuItems(status));
    }

    return(
        <View style={styles.header_view}>
            <Icon type="ionicon" name={'md-menu'} size={28} color={'#000000'} containerStyle={styles.menu_icon} onPress={() => handle_show_menu()} />
            <Text style={styles.header_text}>
                MentorsTask
            </Text>
        </View>
    )
};