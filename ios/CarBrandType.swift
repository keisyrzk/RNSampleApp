//
//  CarBrandType.swift
//  SampleApp
//
//  Created by Krzysztof Banaczyk on 05/07/2023.
//

import Foundation

enum CarBrandType: String, Codable {
  
  case chevrolet//(CarCategory)
  case cadillac //(CarCategory)
  case gmc      //(CarCategory)
}

extension CarBrandType {
  
  var name: String {
    return self.rawValue
  }
}
