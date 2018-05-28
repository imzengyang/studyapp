import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Thumbnail } from 'native-base';
export default class HomeTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-eye" style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>发现</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card style={{flex:1}}>
                        <CardItem>
                        <Left>
                            <Thumbnail source={require("../../Assets/images/01.png")} />
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>April 15, 2016</Text>
                            </Body>
                        </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
