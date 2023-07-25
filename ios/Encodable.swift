//
//  Encodable.swift
//  SampleApp
//
//  Created by Krzysztof Banaczyk on 07/07/2023.
//

import Foundation

extension Encodable {
  
  func makeJSON() async throws -> String {
    
    let encoder = JSONEncoder()
    encoder.outputFormatting = .prettyPrinted
    
    do {
      let jsonData = try encoder.encode(self)
      guard let jsonString = String(data: jsonData, encoding: .utf8) else {
        throw AppError.jsonCreation
      }
      
      return jsonString
      
      
    } catch {
      throw AppError.encoding(message: "Error encoding to JSON: \(error)")
    }
  }
}
