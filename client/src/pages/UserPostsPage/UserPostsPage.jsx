/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import UserPosts from '../../widgets/UserPosts/UserPosts';

function UserPostsPage({user}) {
    return (
        <div>
            <UserPosts  user={user}/>
        </div>
    );
}

export default UserPostsPage;