//
//  AppError.swift
//  SampleApp
//
//  Created by Krzysztof Banaczyk on 07/07/2023.
//

import Foundation

enum AppError: Error {
  
    case encoding(message: String)
    case jsonCreation
}
