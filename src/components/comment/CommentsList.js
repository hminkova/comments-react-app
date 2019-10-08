import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchComments, deleteComment } from '../../actions';

class CommentsList extends Component {
    componentDidMount() {
        this.props.fetchComments();
    }

    renderActionButton(comment) {
        return (
            <div>
                <Link
                    to={`/comments/edit/${comment.id}`}
                    className="ui button blue">
                    Edit
                </Link>
                <button
                    type="button"
                    onClick={() => { this.props.deleteComment(comment.id) }}
                    className="ui button red">
                    Delete
                </button>
            </div>
        );
    }

    renderComment() {
        return this.props.comments.map((comment) => {
            return (
                <div key={comment.id} className="ui grid segment" style={{alignItems: 'center'}}>
                    <div className="twelve wide column">
                        {comment.comment}
                    </div>
                    <div className="four wide column right aligned">
                        {this.renderActionButton(comment)}
                    </div>
                </div>
            );
        });
    }

    render() {
        if(!this.props.comments.length) {
            return(
                <div className="ui blue message">
                    Please, enter comment
                </div>
            );
        }
        else {
            return (
                <div style={{ marginTop: '50px' }}>
                    <h2 className="ui header">Comments List</h2>
                    {this.renderComment()}
                </div>
            );
        }   
    }
}

const mapStateToProps = (state) => {
    return { comments: Object.values(state.comments).reverse() }
}

export default connect(
    mapStateToProps,
    { fetchComments, deleteComment }
)(CommentsList);