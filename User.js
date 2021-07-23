import React from 'react';

function User(props) { 

return (
    <div>
        <img src={props.myUser[0].avatar} alt={props.myUser[0].name}/>
        <h1>Name: {props.myUser[0].name}</h1>
        <h1>Location: {props.myUser[0].location}</h1>
        <h1>Food: {props.myUser[0].foodType}</h1>
        <h1>Age: {props.myUser[0].age}</h1>
        <h1>Likes: {props.myUser[0].likes}</h1>
        <p>Twitter: <a href="#"></a>{props.myUser[0].twitterUsername}</p>

    </div>
)
}
export default User