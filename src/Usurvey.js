import React, { Component } from 'react';

const firebase = require('firebase');
const uuid = require('uuid');

const config = {
	apiKey: "AIzaSyDIaB-xiCJv44yEKPL1gE1vB__uJ7G3Fkw",
	authDomain: "mcnab-4a601.firebaseapp.com",
	databaseURL: "https://mcnab-4a601.firebaseio.com",
	projectId: "mcnab-4a601",
	storageBucket: "mcnab-4a601.appspot.com",
	messagingSenderId: "561925976901"
};

firebase.initializeApp(config);


export default class Usurvey extends Component {

  constructor(props) {
    super(props);

    this.state = {
    	uid: uuid.v1(),
    	studentName: '',
    	answers: {
    		answer1: '',
    		answer2: '',
    		answer3: ''
    	},
    	isSubmitted: false
    }
  }

  render() {

  	let studentName;
  	let questions;

  	if (this.state.studentName === '' && !this.state.isSubmitted) {
  		studentName = <div>
  			<h1>Please enter your name:</h1>
  			<form type="text" placeholder="Enter your name" ref="name"></form>
  		</div>

  	}

    return (
      <div>
      	{studentName}
      	---------------------------------------------
      	{questions}
      </div>
    );
  }
}
