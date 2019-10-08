import React from 'react';

import CommentCreate from './CommentCreate';
import CommentsList from './CommentsList';

const CommentsWrapper = () => {
    return(
        <div>
            <CommentCreate />
            <CommentsList />
        </div>
    );
};

export default CommentsWrapper;