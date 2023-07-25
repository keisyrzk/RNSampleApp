//
//  CarServices.swift
//  SampleApp
//
//  Created by Krzysztof Banaczyk on 05/07/2023.
//

import Combine

@objc(CarServices)

// standard handling
//class CarServices: NSObject {
  
// to handle events
class CarServices: RCTEventEmitter {
  
  private var cancellables = Set<AnyCancellable>()
  let btServices = BTServices()
  @objc let sampleCarName = "Porsche"
  @objc var sampleCarDictionary: [String: Any] = [
    "name": "Porsche",
    "model": "Cayman",
    "modelNumber": 718
  ]
  
  override init() {
    super.init()
    
    binding()
  }
  
  private func binding() {
    
    rnEventsManager.onRNEvent
      .sink { [weak self] (eventName, eventBody) in
        self?.sendEvent(withName: eventName,
                        body: eventBody)
      }
      .store(in: &cancellables)
  }
  
  @objc override static func requiresMainQueueSetup() -> Bool {
      return false
  }
  
  override func constantsToExport() -> [AnyHashable : Any]! {
    return [
      "sampleCarName": sampleCarName,
      "sampleCarDictionary": sampleCarDictionary
    ]
  }
  
  
  // --------------------------------------------------------
  // access through CarServices with a completion
  /*
   RN implementation
   
   NativeModules.CarServices.getFullName(value => {
   console.log("Received value: " + value)
   })
   */
  @objc
  func getFullName(_ someParameter: String, completion: RCTResponseSenderBlock) {
    
    
    btServices.start()
    
    let car = Car(brandType: .cadillac, horsePower: 250)
    completion([":: completion :: Input parameter value: \(someParameter) ::  Brand: \(car.brandType.name) :: HP: \(car.horsePower)"])
  }
  
  
  
  // --------------------------------------------------------
  // access through CarServices with a promise
  /*
   RN implementation
   
      function getNextCar() {
          NativeModules.CarServices.getNextCar()
              .then(res => console.log(res))
              .catch(e => console.log(e.message, e.code))
      }
   
      getNextCar()
      getNextCar()
      getNextCar()
      getNextCar()
   
   */
  @objc
  func getNextCar(
    _ someParameter: String,
    resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    
    if let nextCar = TempCarSet.shared.nextCar() {
      resolve(":: promise :: Input parameter value: \(someParameter) :: Next car: \(nextCar.brandType.name) :: HP: \(nextCar.horsePower)")
    }
    else {
      let error = NSError(domain: "", code: 400, userInfo: nil)
      reject(":: promise :: NO_CAR_FOUND_ERROR", ":: promise :: cannot find next car", error)
    }
  }
  
  
  
  
  
  // --------------------------------------------------------
  // MARK: Events
  
  
  // need to override this method and
  // return an array of event names that will listen to
  override func supportedEvents() -> [String]! {
    return CarServicesEventType.allCasesNames
  }
  
  
  // access through CarServices listening to the event
  /*
   RN implementation
   
   import {
       NativeModules,
       NativeEventEmitter
   } from 'react-native'
   
  // handle events
  // subscribe to event
  CarServicesEvents.addListener(
      "carDetailsFetchingState",
      res => console.log("sample car fetch event", res)
  )
   
   // event call - call the function that will affect receiving events
   NativeModules.CarServices.startFetchingNextCar()
   
   */
  @objc
  func startFetchingNextCar(_ someParameter: String) {
    
    DispatchQueue.main.asyncAfter(deadline: .now() + 1, execute: {
      rnEventsManager.send(event: .carServices(type: .carDetailsFetchingState,
                                               bodyObject: "\(someParameter) :: fetching started ..."))
    })
    
    DispatchQueue.main.asyncAfter(deadline: .now() + 2, execute: {
      rnEventsManager.send(event: .carServices(type: .carDetailsFetchingState,
                                               bodyObject: CarDetailsFetchingStateType.fetched(Car(brandType: .chevrolet, horsePower: 500))))
    })
  }
}
