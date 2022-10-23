import assert from 'node:assert/strict'
import { describe } from 'node:test'
import {validateProperty} from '../ex1-serie-parte1.js'

describe('validate property module tests', function () {
    const validator = {name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]  }

  describe('#validateProperty tests', function () {
    it('test1', function () {
      // Arrange
      const obj = {p1 : "a"}

      // Act 
      const objvalidate = validateProperty(obj, validator)

      // Assert 
      assert.deepEqual(objvalidate, true , "true")

    })

    it('test2', function () {
      // Arrange
      const obj = {p2 : 123}

      // Act 
      const objvalidate = validateProperty(obj, validator)

      // Assert
      assert.deepEqual(objvalidate,false, "false")
    })

    it('test3', function () {
      // Arrange
      const obj = {p1 : "a" , p2 : 123}

      // Act 
      const objvalidate = validateProperty(obj, validator)

      // Arrange
      assert.deepEqual(objvalidate, false , "false")
    })
  
  })
      
})