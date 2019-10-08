import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { fetchComment, editComment } from '../../actions';
import { required, maxLength100 } from '../../utils/validation';

class CommentEdit extends React.Component {
    componentDidMount() {
        this.props.fetchComment(this.props.match.params.id);
    }

    renderError({ error, visited }) {
        if (visited && error) {
            return (
                <div className="ui red message">
                    {error}
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <textarea {...input} rows="2"></textarea>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.editComment(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.comment) {
            return <div className="ui active centered inline loader"></div>;
        }
        return (
            <div>
                <div className="ui attached message">
                    <h3 className="ui header">
                        Edit Comment
                    </h3>
                </div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui large form attached fluid segment">
                    <Field
                        name="comment"
                        component={this.renderInput}
                        label="Enter comment"
                        validate={[required, maxLength100]} />
                    <button
                        type="submit"
                        disabled={this.props.invalid}
                        className={`ui button ${this.props.invalid ? 'grey' : 'green'}`}>
                        Submit
                </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        comment: state.comments[ownProps.match.params.id],
        initialValues: state.comments[ownProps.match.params.id]
    };
}

const afterSubmit = (result, dispatch) =>  dispatch(reset('createComment'));

const wrapperForm = reduxForm({
    form: 'commentEdit',
    onSubmitSuccess: afterSubmit,
})(CommentEdit);

export default connect(
    mapStateToProps,
    { fetchComment, editComment }
)(wrapperForm);
