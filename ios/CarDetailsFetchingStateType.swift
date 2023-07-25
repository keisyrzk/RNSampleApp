//
//  CarDetailsFetchingStateType.swift
//  SampleApp
//
//  Created by Krzysztof Banaczyk on 07/07/2023.
//

import Foundation

enum CarDetailsFetchingStateType: Codable {
  
  case started
  case fetched(Car)
}
