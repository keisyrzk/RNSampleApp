//
//  BTServices.swift
//  SampleAppTests
//
//  Created by Krzysztof Banaczyk on 18/07/2023.
//

import Combine
import CKBTManager

class BTServices {
  
  private var cancellables = Set<AnyCancellable>()
  
  let manager = BTManager(deviceNamePrefix_id: "sampleNamePrefix",
                          discoverMultipleDevices: true,
                          serviceUUID: "someUUID_service",
                          characteristicCBUUID_Rx: "someUUID_rx",
                          characteristicCBUUID_Tx: "someUUID_tx")

  func start() {
    
    manager.onBTEvent
      .sink { btEvent in
        switch btEvent {
        case let .didConnectPeripheral(device):
          print("do sth")
        default:
          break
        }
      }
      .store(in: &cancellables)
    
  }
}
