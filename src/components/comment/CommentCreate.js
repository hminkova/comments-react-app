import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { createComment } from '../../actions';
import { required, maxLength100 } from '../../utils/validation';

class CommentCreate extends React.Component {
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
        this.props.createComment(formValues);
    }

    render() {
        return (
            <div>
                <div className="ui attached message">
                    <h3 className="ui header"> 
                        Create Comment
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

const afterSubmit = (result, dispatch) =>  dispatch(reset('createComment'));

const formWrapper = reduxForm({
    form: 'createComment',
    onSubmitSuccess: afterSubmit,
})(CommentCreate);

export default connect(
    null,
    { createComment }
)(formWrapper);