import React, { Component } from 'react';
import { View, Text, Image, } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Toast, Icon, Title, Card, CardItem, Thumbnail } from 'native-base';

import { StackNavigator } from "react-navigation";

export default class HomeTab extends Component {

    constructor(props){
        super(props);
        this.state={
            orderText:"预约",
        
        }
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-eye" style={{ color: tintColor }} />
        )
    }

    changeOrder(){
    
        if (this.state.orderText == "预约"){
            Toast.show({
                text: "预约成功！",
                duration: 1000
              })
            this.setState({
                orderText:"取消预约"
            })
        }else{
            Toast.show({
                text: "取消成功！",
                duration: 1000
            })
            
            this.setState({
                orderText:"预约"
            })
        }
        
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
                    <Text style={{ fontSize: 24, fontWeight: "900", marginBottom: 10, marginTop: 10, marginLeft: 10 }}>本周课程</Text>
                    <Card>
                        <CardItem>
                            <Left>
                                <Image style={{ width: 100, height: 141 }} source={require("../../Assets/images/02.png")} />
                                <Body>
                                    <Text style={{ fontSize: 20, fontWeight: "900" }}>python自动化测试</Text>
                                    <Text note style={{ marginTop: 15 }}>2018-06-03</Text>
                                    <Text style={{ marginTop: 10 }}>地点：四川北路 </Text>
                                    <Button small primary  style={{ paddingLeft: 5, paddingRight: 5,marginTop:10}} onPress={() => this.props.navigation.navigate('Details')} >
                                        <Text style={{ fontSize: 14, color: "white" }} >详情</Text>
                                    </Button>
                                </Body>
                            </Left>
                            <Button rounded danger style={{ paddingLeft: 25, paddingRight: 25, position: 'absolute', right: 10, top: 100 }} onPress={this.changeOrder.bind(this)}>
                                <Text style={{ fontSize: 18, color: "white" }} >{this.state.orderText}</Text>
                            </Button>

                        </CardItem>
                        <CardItem>
                            <Left>
                                <Image style={{ width: 100, height: 141 }} source={require("../../Assets/images/02.png")} />
                                <Body>
                                    <Text style={{ fontSize: 20, fontWeight: "900" }}>python自动化测试</Text>
                                    <Text note style={{ marginTop: 15 }}>2018-06-03</Text>
                                    <Text style={{ marginTop: 10 }}>地点：四川北路 </Text>
                                    <Button small primary  style={{ paddingLeft: 5, paddingRight: 5,marginTop:10}}>
                                        <Text style={{ fontSize: 14, color: "white" }}>详情</Text>
                                    </Button>
                                </Body>
                            </Left>
                            <Button rounded danger style={{ paddingLeft: 25, paddingRight: 25, position: 'absolute', right: 10, top: 100 }}>
                                <Text style={{ fontSize: 18, color: "white" }}>预约</Text>
                            </Button>

                        </CardItem>
                        
                    </Card>
                    
                </Content>
            </Container>
        );
    }
}
