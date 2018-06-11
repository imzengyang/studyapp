
import React, { Component } from 'react';
import {RefreshControl} from 'react-native'
import { Container, Header, Title, Right, Content, Card, CardItem, Thumbnail, Text, Button, Icon, H2, Left, Body } from 'native-base';
import InterViewComponent from '../Containers/InterView';

export default class PlanTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      topics: [...{ ...{} }],
      refreshing:false,
      page:1
    }
  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-book" style={{ color: tintColor }} />
    )
  }

  fetchData(){
    let {page} = this.state
    fetch(`http://118.31.19.120:3000/api/v1/topics?page=${page}&tab=ask&limit=5&mdrender=false`)
      .then(r => (r.json()))
      .then(res => {

        this.setState({
          topics: res.data,
          refreshing:false
        })
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  _onRefresh(){
    this.setState({
      refreshing:true,
      page:this.state.page + 1, 
    })
    this.fetchData();

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
        <Content refreshControl={
           <RefreshControl
           refreshing={this.state.refreshing}
           onRefresh={this._onRefresh.bind(this)}
          />
        }>
          {this.state.topics.map(topic => {
            let user = topic.author;
            return (
            
            <InterViewComponent user={user} topic={topic}/>
          )})}
          
        </Content>
      </Container>
    );
  }
}

