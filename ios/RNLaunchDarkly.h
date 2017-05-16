
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#import "RCTEventEmitter.h"
#else
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#endif

#import <Darkly/LDClient.h>

@interface RNLaunchDarkly : RCTEventEmitter <RCTBridgeModule>

@property(nonatomic) LDUserModel *user;

@end

