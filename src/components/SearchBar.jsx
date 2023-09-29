import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerms,setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handlerSubmit = (e) => {
        e.preventDefault();
        if(searchTerms){
            navigate(`/search/${searchTerms}`)
            setSearchTerm('')
        }
    }

    return (
        <Paper component={"form"} sx={{ borderRadius:"30px", border:"solid 1px #e3e3e3", pl:2, boxShadow:"none", mr:{sm:5} }} onSubmit={handlerSubmit}>
            
            <input type='text' className='search-bar' placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)} />
            <IconButton type='submit' sx={{p:'10px', color:"red"}}>
                <Search/>
            </IconButton>
        </Paper>
    );
};

export default SearchBar;