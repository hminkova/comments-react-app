import React from 'react';
import { Router, Route } from 'react-router-dom'; 
import history from '../history';

import CommentsWrapper from './comment/CommentsWrapper';
import CommentEdit from './comment/CommentEdit';

const App = () => {
    return(
        <Router history={history}>
            <div className="ui container">
                <div className="ui masthead vertical segment" style={{marginBottom: "50px"}}>
                    <Route path="/" exact component={CommentsWrapper} />
                    <Route path="/comments/edit/:id" exact component={CommentEdit} />
                </div>
            </div>
        </Router>
    );
}

export default App;