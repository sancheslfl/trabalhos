import assert from 'node:assert/strict'
import { describe } from 'node:test'
import {validateProperty} from '../ex3-serie-parte1.js'

describe('validate properties module tests', function () {
  const validators = [
    {
    name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"] 
    },
    {
    name : "p2" , validators: [s => Number.isInteger(s)] 
    }
 ]

  describe('#validateProperties tests', function () {
    it('test1', function () {
      // Arrange
      const obj = {p1 : "a"}

      // Act 
      const objvalidate = obj.validateProperties(validators)

      // Assert 
      assert.deepEqual(objvalidate, ["p1", "p2"] , "['p1', 'p2']")

    })

    it('test2', function () {
      // Arrange
      const obj = {p1 : 123}

      // Act 
      const objvalidate = obj.validateProperties(validators)

      // Assert
      assert.deepEqual(objvalidate, ["p1", "p2"], "['p1', 'p2']")
    })

    it('test3', function () {
      // Arrange
      const obj = {p1 : "abc" , p2 : 123}

      // Act 
      const objvalidate = obj.validateProperties(validators)

      // Arrange
      assert.deepEqual(objvalidate, [] , "[]")
    })
  
  })
      
})