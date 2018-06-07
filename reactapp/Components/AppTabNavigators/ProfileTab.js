
import React, { Component } from 'react';

import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Title } from 'native-base';

import { Icon } from 'native-base';

export default class ProfileTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <Container>
            <Header>
                <Body>
                   <Title> 我的</Title>
    
                </Body>
            </Header>
            <Content>
              <List style={{paddingTop:40,paddingBottom:20}}>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('../../Assets/images/timg.jpeg')} />
                  </Left>
                  <Body>
                    <Text>Kumar Pratik</Text>
                    <Text note>邮箱：155097662213@163.com</Text>
                  </Body>
                  <Right>
                    <Text >编辑</Text>
                  </Right>
                </ListItem>
                
              </List>
              <List style={{marginTop:40}}>
              <ListItem >
             <Left>
                <Text>我的学习记录</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem >
             <Left>
                <Text>我的签到</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem >
             <Left>
                <Text>我的计划</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
              </List>
            </Content>
          </Container>
        );
    }
}
