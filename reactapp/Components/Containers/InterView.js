import React, { Component } from 'react';
import { Card, CardItem, Icon, Left, Thumbnail, Right, Body, Text, Button } from 'native-base';

export default class InterViewComponent extends Component {
    render() {
        return (
            <Card key={this.props.topic.id} style={{ flex: 0 }}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: "https:" + this.props.user.avatar_url }} />
                        <Body>
                            <Text note>{this.props.user.loginname}</Text>
                            <Text>{this.props.topic.title}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {this.props.topic.content}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent textStyle={{ color: '#dddddd' }}>
                            <Icon name="ios-heart-outline" />
                            <Text>{this.props.topic.visit_count}</Text>
                        </Button>
                        <Button transparent textStyle={{ color: '#87838B' }}>
                            <Icon name="ios-undo-outline" />
                            <Text>{this.props.topic.reply_count}</Text>
                        </Button>
                    </Left>
                    <Right><Text note>{this.props.topic.last_reply_at}</Text></Right>
                </CardItem>
            </Card>
        );
    }
}
