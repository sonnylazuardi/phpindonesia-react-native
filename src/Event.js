import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    ListView,
    Alert,
    ProgressBarAndroid,
    RefreshControl
} from 'react-native';
const API_URL = 'http://api.sonnylab.com/phpindonesia/event';
import Loader from './uikit/Loader';
import Button from './uikit/Button';
import LinearGradient from 'react-native-linear-gradient';
import SendIntentAndroid from 'react-native-send-intent';

class Event extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isActive: false,
            isLoading: false,
            dataSource: ds.cloneWithRows([]),
        }
    }
    init(props) {
        this.setState({isActive: props.isActive}, () => {
            if (this.state.isActive) {
                this.reloadData();
            }
        });
    }
    componentDidMount() {
        this.init(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isActive !== this.state.isActive) {
            this.init(nextProps);
        }
    }
    reloadData() {
        // entering this tab
        this.setState({isLoading: true});
        fetch(API_URL)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(json),
                    isLoading: false
                });
            });
    }
    onAddCalendar(event) {
        var date = event.date.split(' to ');
        SendIntentAndroid.addCalendarEvent({
            title: event.title,
            description: event.description,
            startDate: date[0],
            endDate: date[1],
            recurrence: 'none'
        });
    }
    onClickEvent(event) {
        this.props.navigator.push({
            name: 'eventDetail',
            event
        });
    }
    renderData(event) {
        return (
            <Button onPress={this.onClickEvent.bind(this, event)} style={styles.rowButton}>
                <View renderToHardwareTextureAndroid={true} shouldRasterizeIOS={true}>
                    <Image 
                        source={{uri: event.image}}
                        style={styles.rowImage}
                        />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.6)']}
                        style={styles.linearGradient}/>
                    <View style={styles.linearGradient}>
                        <Text style={{color: '#fff', fontSize: 20}} numberOfLines={1}>{event.title}</Text>
                        <Text style={{color: 'rgba(255,255,255,0.6)', fontSize: 10}} numberOfLines={1}>{event.date}</Text>
                    </View>
                    <View style={styles.rowWrapper}>
                        <Text style={{fontSize: 13, color: '#000'}} numberOfLines={1}>{event.venue}</Text>
                        <Text style={styles.rowText} numberOfLines={3}>
                            {event.description}
                        </Text>
                    </View>
                    <View style={{borderTopWidth: 1, borderTopColor: '#ddd', padding: 8, paddingLeft: 0, paddingRight: 0, margin: 15, marginBottom: 0, marginTop: 0, alignItems: 'flex-end'}}>
                        <Button onPress={this.onAddCalendar.bind(this, event)} style={{backgroundColor: 'transparent', padding: 10, borderRadius: 2}}>
                            <Text style={{color: '#569080', fontWeight: 'bold', fontSize: 13}}>+ KALENDER</Text>
                        </Button>
                    </View>
                </View>
            </Button>
        );
    }
    render() {
        const {isLoading, dataSource} = this.state;
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={dataSource}
                    renderRow={this.renderData.bind(this)}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={this.reloadData.bind(this)}
                            tintColor="#569080"
                            title="Memuat event..."
                            colors={['#569080', '#225B49', '#569080']}
                            progressBackgroundColor="#fff"
                        />
                    }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowButton: {
        borderRadius: 3,
        margin: 15,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset:{
            width: 3,
            height: 3,
        },
        elevation: 3
    },
    rowWrapper: {
        padding: 15,
    },
    rowText: {
        fontSize: 12,
        color: '#999'
    },
    rowImage: {
        borderRadius: 3,
        height: 200,
        flex: 1,
        resizeMode: 'cover'
    },
    linearGradient: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        top: 0, 
        height: 200,
        padding: 15,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end'
    }
});

export default Event;