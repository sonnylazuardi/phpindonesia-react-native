import React, {
    Component,
    ProgressBarAndroid
} from 'react-native';

class Loader extends Component {
    render() {
        return (
            <ProgressBarAndroid styleAttr="Small"/>
        );
    }
}

export default Loader;