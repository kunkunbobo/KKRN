/**
 * Created by yzw on 2017/3/28.
 */

import React, { Component ,PropTypes} from 'react';
import {
    Text,
    View,
    Navigator,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import KKNavigator from './navgation';
import BasePage from './base/basePage';
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/EvilIcons';

@connect(({test})=>{
    return {
        test,
    }
})

export default class Main extends BasePage {


    constructor(props){
        super(props);
        this.state = {
            selectedTab:'home'
        }
    }

    componentDidMount() {

    }



    render() {

        return  super.render(
            <View>
                <TabNavigator tabBarStyle={{ backgroundColor:'white' }} style={{backgroundColor: 'white'}}>
                    <TabNavigator.Item
                        title="Home"
                        selected={this.state.selectedTab === 'home'}
                        renderIcon={() => <Icon name={ 'ios-home' } size={30} color={'gray'}/>}
                        renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'#4E78E7'}/>}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <View/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="Playground"
                        selected={this.state.selectedTab === 'playground'}
                        renderIcon={() => <Icon name={ 'ios-more' } size={30} color={'gray'}/>}
                        renderSelectedIcon={() => <Icon name={ 'ios-more' } size={30} color={'#4E78E7'}/>}
                        onPress={() => this.setState({ selectedTab: 'playground' })}>
                        <View/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="Other"
                        selected={this.state.selectedTab === 'other'}
                        renderIcon={() => <Icon name={ 'ios-more' } size={30} color={'gray'}/>}
                        renderSelectedIcon={() => <Icon name={ 'ios-more' } size={30} color={'#4E78E7'}/>}
                        onPress={() => this.setState({ selectedTab: 'other' })}>
                        <View/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}
