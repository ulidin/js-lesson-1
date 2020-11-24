import React from 'react'
import Greeting from './components/Greeting';
import UserDataInfo from './components/UserDataInfo'


function App() {

const greetingText = "hej o hå!"

const userData ={
    username: "goussisg",
    firstName:"Georgios",
    lastName: "Goussis",
    yearOfBirth: 1968,
    location: "Sweden"
}

const artists =[
    "Justin Bieber",
    "Bruno Mars",
    "Britney Spears",
    "Markoolio",
    "I Am Karate",
    "Star Horse"
]

    return ( 
        <div>
        {/* <p onclick={() => alert(userData.username)}>{userData.username}</p>
        <p onclick={() => alert(userData.firstName)}>{userData.firstName}</p>
        <p onclick={() => alert(userData.lastName)}>{userData.lastName}</p>
        <p onclick={() => alert(userData.yearOfBirth)}>{userData.yearOfBirth}</p>
        <p onclick={() => alert(userData.location)}>{userData.location}</p>
        <UserDataInfo userData={userData.username}/> */}
         <Greeting 
         greeting={greetingText} 
         firstName={userData.firstName}
         yearOfBirth={userData.yearOfBirth}
         />
         <UserDataInfo userData={userData.username}/>
         <UserDataInfo userData={userData.firstName}/>
         <UserDataInfo userData={userData.lastName}/>
         <UserDataInfo userData={userData.yearOfBirth}/>
         <UserDataInfo userData={userData.location}/>
        <h2> My Favorite Artists</h2>
        <ul>
            {artists.map((item, index)=>{
            return <li key={index}>{item}</li>
            })}
        </ul>

        </div>
    );
}

export default App;