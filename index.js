import {
  Platform,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

const { RNLaunchDarkly } = NativeModules;

class LaunchDarkly {
  constructor () {
    this.emitter = new NativeEventEmitter(RNLaunchDarkly);
  }

  configure (apiKey, options) {
    RNLaunchDarkly.configure(apiKey, options);
  }

  boolVariation (featureName, callback) {
    RNLaunchDarkly.boolVariation(featureName, callback);
  }

  addFeatureFlagChangeListener (featureName, callback) {
    if (Platform.OS === 'android') {
      RNLaunchDarkly.addFeatureFlagChangeListener(featureName);
    }

    if (this.featureFlagChangeListener) {
      return;
    }

    this.featureFlagChangeListener = this.emitter.addListener(
      'FeatureFlagChanged',
      ({ flagName }) => {
        if (flagName === featureName) {
          callback(flagName);
        }
      },
    );
  }

  unsubscribe () {
    if (this.featureFlagChangeListener) {
      this.featureFlagChangeListener.remove();
      this.featureFlagChangeListener = null;
    }
  }
}

export default new LaunchDarkly();
