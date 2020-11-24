import React from 'react'

// function Greeting(props){
    
// const {greeting, firstName} = props;
// const greeting = props.greeting
// <h1>{props.greeting}, {props.firstName}</h1>

function Greeting({greeting, firstName, yearOfBirth}){
  const age = new Date().getFullYear() - yearOfBirth
  let ageSpecificGreeting = ""
  if (age > 18) {
      ageSpecificGreeting = greeting
  }else{
      ageSpecificGreeting =greeting.replace("hej", "Tja")
  }
    
return (
    
    <h1>{ageSpecificGreeting}, {firstName}😊</h1> // kan skriva så här om vi använder oss of constanten ovan
)
}
export default Greeting;
