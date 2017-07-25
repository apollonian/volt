import React, { Component } from 'react';
import { Root } from './config/router';
import { fonts } from './styles/style';
import Expo from 'expo';

class App extends Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const fontAssets = this._cacheFonts([fonts]);
    await Promise.all([...fontAssets]);
    this.setState({ appIsReady: true });
  }

  _cacheFonts(fonts) {
    return fonts.map(font => Expo.Font.loadAsync(font));
  }

  render() {
    if (!this.state.appIsReady) {
      return <Expo.AppLoading />;
    }
    return <Root />;
  }
}

export default App;
