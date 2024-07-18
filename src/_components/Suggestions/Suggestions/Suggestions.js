import React from "react";

import UserInfo from "_components/User/UserInfo/UserInfo";
import PostContent from "_components/Post/PostContent/PostContent";

const Suggestions = (props) => {
    const { heading } = props;

    return (
        <div className="suggestions-container">
            <div className="card">
                <div className="card-header">
                    <span className="suggestion-header">{heading}</span>
                </div>
                <div className="card-body">
                    <div className="suggested-items">

                        <div className="post-header">
                            <UserInfo type="sm" />
                        </div>

                        <PostContent
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type "
                        />
                        
                    </div>



                </div>
                <div className="card-footer align-center">
                    <button className="btn btn-sm btn-text hover-custom">See more</button>
                </div>
            </div>

        </div>
    )
}

export default Suggestions;