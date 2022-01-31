import React from 'react'
import CardList from '../../components/Card-List/Card-List.component';
import Search from '../../components/Search/Search.component';
import './Home.styles.css'
import {connect } from 'react-redux'
import { searchMonster } from '../../redux/monster/monster.action';

import { useState, useEffect } from 'react';
import axios from 'axios'

const Home = (props)=> {
     const [data, setData] = useState([])
      const {searchName} = props
       console.log(data)
        useEffect(async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/users')
             setData(result.data) },[])
              const filteredMonsters = data.filter((monster) => monster.name.toLowerCase().includes(searchName.toLowerCase()))
               const handleSearch = (event)=>{
                    const {searchField} = props
                     searchField(event.target.value) }


return(
     <>
     <div className='App'>
          <h1>Monsters Rolodex</h1>
          <Search handleSearch={handleSearch} />
           <CardList monsters={filteredMonsters} />
           </div>
            </>
            )
        }


const mapDispatchToProps = dispatch =>({
    searchField: username => dispatch(searchMonster(username)) 
})
const mapStateToProps = state =>({
     searchName: state.search.searchField
    })
    
export default connect(mapStateToProps,mapDispatchToProps) (Home) 

