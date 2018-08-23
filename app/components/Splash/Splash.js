import React from 'react';
import PropTypes from 'prop-types'

import { View, Text, ActivityIndicator, Image } from 'react-native';

import styles from './styles'

class Splash extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Image style={styles.image} source={{uri: this.props.uri}}/>
                </View>
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            </View>
        );
    }
}

Splash.propTypes = {
    uri:PropTypes.string
}

Splash.defaultProps = {
    uri: "https://image.ibb.co/fVa4BK/ELMEJORLOGO2.png"
}

export default Splash;
