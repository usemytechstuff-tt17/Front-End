import React from 'react'
import styled from 'styled-components'

const StyleSearchBar = styled.input`
    border:1px solid #221e1d; 
    width:20%;
    padding:1%;
    margin:2%;
`


export default function SearchBar(){

    function searchFunc(){
        let input = document.querySelector('#searchBar').value;
        input = input.toLowerCase().trim();
        let allTitles = document.querySelectorAll('.image');

        for (let i=0; i<allTitles.length ;i++){
            if (allTitles[i].childNodes[1].textContent.toLowerCase().includes(input)) {
                allTitles[i].parentElement.style.display=''
            }
            else{
                allTitles[i].parentElement.style.display='none';
            }
        }
    }
    return (
        <div className='searchDiv'>
        <StyleSearchBar className='search' id='searchBar' type='text' placeholder='Search for tech...' onKeyUp={searchFunc}/>
        </div>
    )
}