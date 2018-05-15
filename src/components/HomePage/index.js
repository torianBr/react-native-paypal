// @flow
import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styled from 'styled-components';

import notificationIcon from '../../assets/png/notification.png';
import defaultUserIcon from '../../assets/png/user.png';
import settingsIcon from '../../assets/png/settings.png';

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40;
    padding-left: 20;
    padding-right: 20;
    background-color: #0052AA;
`;

class HomePage extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Header>
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={notificationIcon}
                        />
                        <Image
                            style={{ width: 48, height: 48 }}
                            source={defaultUserIcon}
                        />
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={settingsIcon}
                        />
                    </Header>
                    <View style={{ backgroundColor: '#00887E', height: 300 }}>
                        <Text>
                            Hello
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#000', height: 300 }}>
                        <Text>
                            Hello
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default HomePage;

