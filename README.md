
# react-native-launch-darkly

React Native wrapper over LaunchDarkly SDK's for iOS and Android.

[LaunchDarkly](https://launchdarkly.com)

[Native iOS SDK](https://github.com/launchdarkly/ios-client)

[Native Android SDK](https://github.com/launchdarkly/android-client)

## Getting started

`$ npm install react-native-launch-darkly --save`

or

``$ yarn add react-native-launch-darkly --save``

### Mostly automatic installation

`$ react-native link react-native-launch-darkly`

#### iOS:

1) In XCode in project navigator right click on application name => Add files to... => navigate to node_modules/react-native-launch-darkly/ios and select Darkly.framework.
2) Go to you project target and add Darkly.framework to Embedded Binaries

#### Android:

Add line bellow at the bottom of your app/build.gradle
  ```
  configurations.all { resolutionStrategy.force 'com.squareup.okhttp3:okhttp:3.4.1' }
  ```

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-launch-darkly` and add `RNLaunchDarkly.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNLaunchDarkly.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNLaunchDarklyPackage;` to the imports at the top of the file
  - Add `new RNLaunchDarklyPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-launch-darkly'
  	project(':react-native-launch-darkly').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-launch-darkly/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-launch-darkly')
  	```
4. Add line bellow at the bottom of your app/build.gradle
    ```
    configurations.all { resolutionStrategy.force 'com.squareup.okhttp3:okhttp:3.4.1' }
    ```


## Usage
```javascript
import LaunchDarkly from 'react-native-launch-darkly';

type User = {
  key: string,
  email?: string,
  firstName?: string,
  lastName?: string,
  isAnonymous?: bool
};

// init native SDK with api key and user object
LaunchDarkly.configure(apiKey: string, user: User);

// get boolean feature flag value
LaunchDarkly.boolVariation(featureFlagName: string, callback: function): bool

// get string feature flag value
LaunchDarkly.stringVariation(featureFlagName: string, fallback: string, callback: function): string

// adds listener which is called every time given feature flag value is changed
// callback is called with flagName string, so you will have to call LaunchDarkly.boolVariation()
// to get new feature flag value
LaunchDarkly.addFeatureFlagChangeListener(flagName: string, callback: function): void

// removes all onFeatureFlagChange listeners
LaunchDarkly.unsubscribe(): void
```
