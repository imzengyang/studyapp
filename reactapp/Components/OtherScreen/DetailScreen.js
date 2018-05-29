import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Container,Content, Card, CardItem, Thumbnail, Header, Left, Body, Right, Button, Icon, Title } from "native-base";

class DetailsScreen extends Component {
    render() {
        return (
            <Container style={{backgroundColor:"white"}}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>

                    <Right>
                        <Button transparent>
                            <Icon name='md-share-alt' />
                        </Button>
                    </Right>
                </Header>
                <Text style={{fontSize:28,fontWeight:"900",padding:25}}>Selenium 及其实现原理</Text>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../Assets/images/timg.jpeg')} />
                                <Body>
                                    <Text style={{fontSize:20, fontWeight:"500"}} > 佩齐</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            
                                <Text style={styles.h1}>
                                Selenium 的主要功能包括：
                                </Text>
                                <Text style={styles.p}>
                                1）测试与浏览器的兼容性：测试应用程序能否兼容工作在不同浏览器和操作系统之上。
                                </Text>
                                <Text style={styles.p}>
                                2）测试系统功能：录制用例自动生成测试脚本，用于回归功能测试或者系统用例说明。

                                简而言之，Selenium 就是一款可以录制用户操作，帮助 Web 测试人员简化重复劳动的工具。

                                目前为止 Selenium 有两种版本：
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B', }}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default DetailsScreen;


const styles = StyleSheet.create({
    h1:{
        flex:1,
        fontSize:20,
        fontWeight:"500",
        lineHeight:24,
        padding:10,
        marginBottom: 10,
    },
    p:{
        fontSize:16,
        fontWeight:"200",
        lineHeight:20,
        marginBottom:10
    }  
})