import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,
    BackAndroid,
    StatusBar
} from 'react-native';
import Intro from './Intro';
import Home from './Home';
import EventDetail from './EventDetail';
import codePush from "react-native-code-push";

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

class Main extends Component {
    componentDidMount() {
        codePush.sync({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE });
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#225B49'}
                    networkActivityIndicatorVisible={true}
                />
                <Navigator
                    initialRoute={{name: 'intro'}}
                    configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                    renderScene={(route, navigator) => {
                        _navigator = navigator;
                        switch (route.name) {
                            case 'intro':
                                return <Intro navigator={navigator}/>;
                            case 'home':
                                return <Home navigator={navigator}/>;
                            case 'eventDetail':
                                return <EventDetail navigator={navigator} event={route.event}/>
                            default: 
                                return <Text>Not Found</Text>;
                        }
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default Main;