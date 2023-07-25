//
//  RNEventsManager.swift
//  SampleApp
//
//  Created by Krzysztof Banaczyk on 07/07/2023.
//

import Foundation
import Combine

let rnEventsManager = RNEventsManager()

class RNEventsManager {
  
  let onRNEvent = PassthroughSubject<(eventName: String, eventBody: String), Never>()
// through onRNEvent we may send an error as event type with name and message as event body
  
  func send(event: RNEventType) {
    
    Task {
      do {
        let eventBody = try await event.bodyObject.makeJSON()
        onRNEvent.send((eventName: event.name, eventBody: eventBody))
      }
      catch {
        //send error through onRNEvent with error event name and message as body
      }
    }
  }
}
