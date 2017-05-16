import { NativeModules, NativeEventEmitter } from 'react-native';

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

  addFeatureFlagChangeListener (callback) {
    this.featureFlagChangeListener = this.emitter.addListener(
      'FeatureFlagChanged',
      result => callback(result.flagName),
    );
  }

  removeFeatureFlagChangeListener () {
    if (this.featureFlagChangeListener) {
      this.featureFlagChangeListener.remove();
      this.featureFlagChangeListener = null;
    }
  }
}

export default new LaunchDarkly();
