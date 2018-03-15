import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import Tabbar from 'react-native-tabbar-bottom';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      navigation: {
        page: "HomeScreen",
      },
      split: null
    }
  }

  renderHomeScreen() {
    return <Text>Dashboard</Text>
  }

  render() {
    return (
      <View style={styles.container}>
        
        <MyStatusBar backgroundColor="#0095ff" barStyle="light-content" />
        <View style={styles.appBar}>
          <Text style={styles.appBarTitle}>MONEY SPLITTER</Text>
        </View>
        <View style={styles.content}>
          {this.state.navigation.page === "HomeScreen" && this.renderHomeScreen()}
          {this.state.navigation.page === "SearchScreen" && <Text>Screen5</Text>}
        </View>
        <Tabbar
          tabbarBgColor={'#333'}
          iconColor={'#ccc'}
          selectedIconColor={'#0095ff'}
          stateFunc={(tab) => {
            this.setState({navigation: { page: tab.page }})
          }}
          activePage={this.state.navigation.page}
          tabs={[
            {
              page: "HomeScreen",
              icon: "home",
            },
            {
              page: "SearchScreen",
              icon: "search",
            },
          ]}
        />
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#0095ff',
    height: APPBAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBarTitle: {
    color: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
