
import React, { Component } from 'react';
import { Container, Header,Title,Right, Content, Card, CardItem, Thumbnail, Text, Button, Icon,H2, Left, Body } from 'native-base';
export default class PlanTab extends Component {


  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-book" style={{ color: tintColor }} />
    )
  }


  
  render() {
    return (
      <Container>
        <Header>
        <Left />
          <Body>
              <Title>学习计划</Title>
          </Body>
          <Right>
              <Button transparent>
                  <Icon name='menu' />
              </Button>
          </Right>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../Assets/images/timg.jpeg')} />
                <Body>
                  <Text>perrty</Text>
                  <H2>python selenium</H2>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                
                <Text>
                  2018-06-10 四川北路
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>预约人数：15</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

