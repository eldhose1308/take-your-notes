import React from "react";

import Post from "_components/Post/Post/Post";
import { Button, TextBox } from "_components/Form";

import './Search.css'

const Search = () => {

    return (
        <React.Fragment>
            <div className="search-page">
                <div className="search-form">

                    <TextBox labelName='Enter your query' />
                    <Button text="Search" />
                </div>


                <div className="search-contents">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>

        </React.Fragment>
    )
}

export default Search;