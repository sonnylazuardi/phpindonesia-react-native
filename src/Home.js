import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Toolbar from './uikit/Toolbar';
var menuIcon = require('../img/menu.png');
var logoImage = require('../img/logoapp.png');

import Event from './Event';
import Gallery from './Gallery';
import Video from './Video';
import Chat from './Chat';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        }
    }
    render() {
        var {currentTab} = this.state;
        var {navigator} = this.props;
        return (
            <View style={styles.container}>
                <Toolbar
                    logo={logoImage}
                    title=""
                    style={styles.toolbar}
                    navIcon={menuIcon}
                    />
                <ScrollableTabView 
                    style={{height: 80}}
                    tabBarUnderlineColor={'#fff'}
                    tabBarBackgroundColor={'#569080'}
                    tabBarActiveTextColor={'#fff'}
                    tabBarInactiveTextColor={'#fff'}
                    onChangeTab={(e) => this.setState({currentTab: e.i})}
                    >
                    <View tabLabel='Event' style={styles.page}>
                        <Event navigator={navigator} isActive={currentTab === 0} />
                    </View>
                    <View tabLabel='Gallery' style={styles.page}>
                        <Gallery navigator={navigator} isActive={currentTab === 1} />
                    </View>
                    <View tabLabel='Video' style={styles.page}>
                        <Video navigator={navigator} isActive={currentTab === 1} />
                    </View>
                    <View tabLabel='Chat' style={styles.page}>
                        <Chat navigator={navigator} isActive={currentTab === 1} />
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef'
    },
    tabView: {
        flex: 1,
        padding: 10,
    },
    page: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    toolbar: {
        backgroundColor: '#569080',
        height: 60,
    },
});

export default Home;