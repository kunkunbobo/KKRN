/**
 * Created by yzw on 2017/3/29.
 */
import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';

import {connect} from 'react-redux';
import KKNavigator from './navgation';
import {isEmpty} from '../utility/helper';
import {defaultColor } from '../utility/themes';
import Page1 from  './page1'


@connect(({login,navigator})=>{
    return {
        login,
        route:navigator.route
    }
})


export  default class CarTrack extends Component {

    static propTypes={
        navigator:PropTypes.object.isRequired,
    }
    
    render(){
        return <Page1 navigator = {this.props.navigator}/>
    }
}