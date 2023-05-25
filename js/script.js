// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

/**
 * This function calculates and displays the fibonacci sequence given the final term
 */

function calculateFibonacci () {
  // initializing variable for max term given by user
  let maxTermNum = parseInt(document.getElementById('final-term').value)
  // intializing response variables for displaying info
  let response = "";
  let specialResponse = "";
  // special response for when user enters an integer greater than or equal to 31
  if (maxTermNum >= 31) {
    specialResponse = "The ending number of this sequence exceeds one million!"
  }
  // response for when user doesn't enter an integer
  if (isNaN(maxTermNum)) {
    response = "Please enter a valid integer.";
  }
  // response for when user doesn't enter a positive integer
  else if (maxTermNum < 0) { 
    response = "Please enter an integer greater than -1.";
  }
  // else to start the loop
  else {
    // initializing variables for the loop: first term being 0, next term being 1, and the currentTerm equals to 0
    let previousTerm = 0;
    let nextTerm = 1;
    let currentTerm = 0;
    // for loop to calculate the fibonacci sequence starting from 0, ending with max term
    for (let counter = 0; counter <= maxTermNum; counter++) {
      //ending the response once counter == maxTermNum
      if (counter == maxTermNum) {
        response = response + previousTerm;
      }
      // build the response by using the empty string and adding the previous term and next term
      else {
        response = response + previousTerm + ", "
      }
      // setting current term to previous term + next term in order to set next term to the current term
      currentTerm = previousTerm + nextTerm;
      // previous term turns to next term as per rules of the sequence
      previousTerm = nextTerm;
      // following rules of the sequence: current term/sum becomes the next term
      nextTerm = currentTerm;
    }
  }
  
  // display fibonacci sequence to user, different answers depending on if user enters valid input or invalid input
  
  document.getElementById('response').innerHTML = specialResponse;
  
  if ((isNaN(maxTermNum)) || (maxTermNum < 0)) {
    document.getElementById('results').innerHTML = response;
  }
  else {
    document.getElementById('results').innerHTML = "The Fibonacci sequence of Term " + maxTermNum + " is " + response;
  }
}
