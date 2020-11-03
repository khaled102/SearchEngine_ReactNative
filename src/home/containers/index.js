
import React from 'react';
import { connect } from 'react-redux';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './style';
import { HomeHeader } from '../components';
import { SpinnerIndicatior, MenuContainer } from '../../components';
import { SearchBar } from 'react-native-elements';
import { Slider } from 'react-native-elements';
import { search } from '../actions';
import {ProductItems} from './products';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      search: null,
      slider_val: 10
    }
  }
  updateSearch = (val) => {
    this.props.dispatch(search(val));
  };
  
  render(){
    const { search, loading, slider_val } = this.state;
    const { menu } = this.props;
    return (
      <View style={styles.container}>
        {loading &&
        <SpinnerIndicatior />}
        <HomeHeader />
        <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            autoCapitalize = 'none'
        />
        <Slider
            value={slider_val}
            onValueChange={(value) => this.setState({ slider_val: value })}
            maximumValue={100}
            minimumValue={10}
            step={1}
            trackStyle={{ height: 10, backgroundColor: 'transparent' }}
            thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        />
        <Text>Price range: {slider_val}</Text>
        <ProductItems price_filter={slider_val} />
        {menu.status &&  <MenuContainer />}
      </View>
    );
  }
}
const mapStateToProps = function(state) {
    return {
        menu: state.home.menuReducer,
        category: state.home.brandFilterReducer
    }
  }
  
export const HomeConnect = connect(mapStateToProps)(HomeScreen);

