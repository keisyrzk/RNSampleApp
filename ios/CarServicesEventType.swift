//
//  CarServicesEventType.swift
//  SampleApp
//
//  Created by Krzysztof Banaczyk on 07/07/2023.
//

import Foundation

enum CarServicesEventType: String, CaseIterable {
  
  case carDetailsFetchingState
  
}

extension CarServicesEventType {
  
  static var allCasesNames: [String] {
    return CarServicesEventType.allCases.map{ $0.name }
  }
  
  var name: String {
    switch self {
    case .carDetailsFetchingState:    return "carDetailsFetchingState"
    }
  }
}



