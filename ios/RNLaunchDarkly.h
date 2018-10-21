
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#else
#import "RCTBridgeModule.h"
#import "RCTEventEmitter.h"
#endif

#import <Darkly/LDClient.h>

@interface RNLaunchDarkly : RCTEventEmitter <RCTBridgeModule>

@property(nonatomic) LDUserModel *user;

@end

