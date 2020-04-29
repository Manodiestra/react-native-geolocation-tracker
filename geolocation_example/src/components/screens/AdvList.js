import React from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, Text, H1, View, Button} from 'native-base';
import {FlatList, StyleSheet} from 'react-native';
//import {getLists} from '../../actions/listActions';

export class AdvList extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    },
    top: {
      flex: 7,
      alignItems: 'center',
    },
    burronWrapper: {
      flex: 1,
      flexDirection: 'row',
    },
    button: {
      flex: 1,
      textAlignVertical: 'center',
      textAlign: 'center',
      height: 'auto',
      padding: 4,
      alignItems: 'center',
      alignContent: 'center',
    },
    centerText: {
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 24,
      alignItems: 'center',
      alignContent: 'center',
    },
  });

  bottomNave = () => {
    return (
      <View style={[this.styles.flex, this.styles.burronWrapper]}>
        <Button style={this.styles.button} onPress={this.newAdventure}>
          <Text style={this.styles.centerText}>NEW ADVENTURE</Text>
        </Button>
        <Button style={this.styles.button}>
          <Text style={this.styles.centerText}>GOALS</Text>
        </Button>
      </View>
    );
  };

  newAdventure = () => {
    this.props.navigation.navigate('map');
  };

  componentDidMount() {
    //this.props.getLists();
  }

  render() {
    if (0 === 0) {
      return (
        <Container style={this.styles.message}>
          <View style={this.styles.top}>
            <H1>Adventure List</H1>
            <Text>
              You do not have any adventures yet, click the "New" button at 
              the bottom to make a new list.
            </Text>
          </View>
          {this.bottomNave()}
        </Container>
      );
    }

    return (
      <Container>
        {/* <FlatList
          data={this.props.lists}
          renderItem={({item}) => (
            <ShoppingListItem list={item} navigation={this.props.navigation} />
          )}
          keyExtractor={item => `list_${item.id}`}
        /> */}
        {this.bottomNave()}
      </Container>
    );
  }
}

const mapStateToProps = storeState => {
  return {
    lists: storeState.lists,
  };
};

export default connect(
  mapStateToProps,
  // {getLists},
)(AdvList);
