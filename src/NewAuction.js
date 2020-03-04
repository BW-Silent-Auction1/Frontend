import React, { useState } from "react";
import styled from 'styled-components';
import './NewAuction.css';
import axios from "axios";

const StyledDiv = styled.div`
width: 800px;
height: 500px;
margin 0 auto;
margin-top: 100px;
background-image: url('./images/computer.jpg')
`
const StyledDiv2 = styled.div`
display:flex;
justify-content: space-between;
margin-top: 70px
`
const StyledDiv1 = styled.div`
width: 800px;
height: 500px;
background-color: rgba(235,235,235, .5)
`
const NewAuction = props => {
    const [auction, setAuction] = useState({name: '', item_description: '', auctions_id: ''})

    const handleChange = event => {
        setAuction({...auction, [event.target.name]: event.target.value})
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(auction.name);
        console.log(auction.item_description);
        console.log(auction.auctions_id);
        console.log(auction.pictures_id);
        axios.post('https://silent-auction-69.herokuapp.com/api/items', auction)
        .then(res => {
            console.log('res:', res)
        })
        .catch(err => {
            console.log('error:', err)
        })
    }

    return (
  
        <StyledDiv id="mainDiv">
        <StyledDiv1 id="div1">
            <form onSubmit={event => handleSubmit(event)}>
                <StyledDiv2>
             <label>Item name 
               <input type="text"
               name="name"
               placeholder="item name"
               onChange={event => handleChange(event)}
               />
            
             </label>
             </StyledDiv2>
             <StyledDiv2>
            <label> Description
               <input type="text" 
               name="item_description"
               placeholder="description"
               onChange={event => handleChange(event)}
               />
               
            </label>
            </StyledDiv2>
            <StyledDiv2>
            <label>Auction ID
               <input type="text"
               pattern="[0-9]"
               name="auctions_id"
               placeholder="auction id"
               onChange={event => handleChange(event)}
               />
             </label>
             </StyledDiv2>
             {/* <StyledDiv2>
            <label>Photo URL
               <input type="text"
               name="pictures_id"
               placeholder="url"
               onChange={event => handleChange(event)}
               />
             </label>
             </StyledDiv2> */}
             <div>
                 <StyledDiv2>
               <button>Create Auction</button>
               </StyledDiv2>
               </div>
            </form>
            </StyledDiv1>
        </StyledDiv>
    )
}


export default NewAuction;