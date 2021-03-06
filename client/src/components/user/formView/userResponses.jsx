import React from 'react';
import Response from './response.jsx';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';


class UserResponses extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			responses: []
		}
	}

  componentDidMount() {
    console.log('USER PROPS', this.props);
    this.props.retrieveResponses(this.props.username, (data) => {
      console.log('USER MESSAGES ON SUB COMPONENT', data);
      this.setState({
        responses: data
      });
    });
  }

	render(){
		if(this.state.responses.length > 0) {
			return (
        <div className="user-header">
          <PageHeader>Message Inbox</PageHeader> 
          <h5>You will see responses to messages you have sent here.</h5>
          <Button className="change-view-button" bsStyle="primary" onClick={this.props.showSubmissionForm}>Send a new message</Button>
          <ul>
            {this.state.responses.map((response, index) => {
              return <Response showSubmissionForm={this.props.showSubmissionForm} key={JSON.stringify(response)} response={response}/>
            })}
          </ul>
    	  </div>
      );
		} else {
      return (
        <div className='user-header'>
          <h3>Message Inbox</h3> 
          <h4>You will see responses to messages you have sent here.</h4>
          <Button bsStyle="primary" onClick={this.props.showSubmissionForm}>Send a new message</Button>
          <div>No responses yet. Please check back soon!</div>
        </div>
      );
    }	
	}
}

export default UserResponses;