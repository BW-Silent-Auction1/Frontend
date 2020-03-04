import React, { useState } from "react";

const NewAuction = props => {
    
    return (

        <div>
            <form>
               <label>Item name</label> 
               <input type="text"
               />

               <label>Item description</label>
               <input type="text" 
               />

               <label>Starting bid</label>
               <input type="text"
               pattern="[0-9]"
               />
               <button>Create Auction</button>
            </form>
        </div>
    )
}


export default NewAuction;