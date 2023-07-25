//
//  Services.m
//  SampleApp
//
//  Created by Krzysztof Banaczyk on 05/07/2023.
//

#import <React/RCTBridgeModule.h>
#import "React/RCTEventEmitter.h" // to handle events

// standard handling
// @interface RCT_EXTERN_MODULE(CarServices, NSObject)

// MARK: events handling
@interface RCT_EXTERN_MODULE(CarServices, RCTEventEmitter)



// --------------------------------------------------------------
// MARK: access through CarServices with a callback

/* without parameter
 RCT_EXTERN_METHOD(getFullName: (RCTResponseSenderBlock)completion)
 */

// with parameter
RCT_EXTERN_METHOD(getFullName: (NSString *)someParameter completion: (RCTResponseSenderBlock)completion)




// --------------------------------------------------------------
// MARK: promise

/* without paramater
 RCT_EXTERN_METHOD(
 getNextCar: (RCTPromiseResolveBlock)resolve
 rejecter: (RCTPromiseRejectBlock)reject
 )
 */

//with parameter
RCT_EXTERN_METHOD(
                  getNextCar: (NSString *)someParameter
                  resolve: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )


// MARK: events

/* without parameter
  RCT_EXTERN_METHOD(startFetchingNextCar)
 */

// with parameter
RCT_EXTERN_METHOD(startFetchingNextCar: (NSString *)someParameter)


@end

