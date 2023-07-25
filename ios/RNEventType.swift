//
//  RNEventType.swift
//  SampleApp
//
//  Created by Krzysztof Banaczyk on 07/07/2023.
//

import Foundation

enum RNEventType {
  
  case carServices(type: CarServicesEventType, bodyObject: Encodable)
}

extension RNEventType {
    
  var name: String {
    switch self {
    case let .carServices(type, _):    return type.name
    }
  }
  
  var bodyObject: Encodable {
    switch self {
    case let .carServices(type: _, bodyObject: object):
      return object
    }
  }
}
