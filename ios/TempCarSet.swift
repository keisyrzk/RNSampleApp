//
//  TempCarSet.swift
//  SampleApp
//
//  Created by Krzysztof Banaczyk on 06/07/2023.
//

import Foundation

class TempCarSet {
  
  static let shared = TempCarSet()
  static let tempCarSet: [Car] = [

    Car(brandType: .cadillac, horsePower: 250),
    Car(brandType: .chevrolet, horsePower: 140),
    Car(brandType: .gmc, horsePower: 300)
  ]
  
  private var currentCarIndex: Int = -1

  func nextCar() -> Car? {
    
    currentCarIndex += 1
    if currentCarIndex < TempCarSet.tempCarSet.count && currentCarIndex >= 0 {
      return TempCarSet.tempCarSet[currentCarIndex]
    }
    else {
      return nil
    }
  }
}

