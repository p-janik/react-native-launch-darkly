
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#import <React/RCTImageLoader.h>
#else
#import "RCTBridgeModule.h"
#import "RCTImageLoader.h"
#endif

#import <Darkly/LDClient.h>

@interface RNLaunchDarkly : RCTEventEmitter <RCTBridgeModule>

@property(nonatomic) LDUserModel *user;

@end

