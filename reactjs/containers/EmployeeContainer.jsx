import React from "react"

import Headline from "../components/Headline"
import StarRatingComponent from 'react-star-rating-component'
import { Button, Modal } from 'react-bootstrap';

export default class EmployeeDetails extends React.Component {
    constructor(){
        super();
        this.state = {data: []};
    };
    componentDidMount(){
    this.serverRequest = $.get('/djreactemployee', function (result) {
      var result = result;
      this.setState({
        data:result
      });
    }.bind(this));
    };
    componentWillUnmount(){
        this.serverRequest.abort();
    };
    render(){
        var employees = this.state.data.map(function (emp){
            return(
                <div className="employee" >
                    <Employee key={emp.id} data={emp} />
                </div>
            );
        });
        return (
            <div className="Employees">
                {employees}
            </div>
        );
    }
};


var Employee = React.createClass({
    getInitialState() {
    return {
            prating: this.props.data.performance,
            trating: this.props.data.team_work,
            brating: this.props.data.behavioral_skill,
            showModal: false
           };
        },

    close() {
        this.setState({ showModal: false });
        },

    open() {
        this.setState({ showModal: true });
        },

    onPerClick(name, value) {
        this.setState({prating: name});
        },

    onTeamClick(name, value) {
        this.setState({trating: name});
        },

    onBehClick(name, value) {
        this.setState({brating: name});
        },

    onSubmitRates() {
        var csrftoken = Cookies.get('csrftoken');
        var data = {
                    "id":this.props.data.id,
                    "performance":this.state.prating,
                    "team_work": this.state.trating,
                    "behavioral_skill": this.state.brating,
                    "csrfmiddlewaretoken": csrftoken
                };
        this.close();
        var handler = $.ajax({
                      data : data,
                      url: 'update_emp/',
                      type: "POST",
                      dataType: "json",
                      success: function ( result ) {
                      }.bind(this)
                    });
                    handler.fail(function() {
                      console.log('error');
                    });
        },

    render:function(){
    return(
        <div className="Employee" onClick={this.open}>
            <h4>{this.props.data.emp_name} </h4>
            <img src={this.props.data.profile} width="100" height = "100" />
            <h6>{this.props.data.email}</h6>
            <h5>{this.props.data.designation}</h5>

            <h5><b>Permance-skill</b>:{this.state.prating}</h5>

            <h5><b>Team-work</b>:{this.state.trating}</h5>

            <h5><b>Behavioral-skill</b>:{this.state.brating}</h5>

            <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Rates Of Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="rating">
                        <h4>Employee : {this.props.data.emp_name}</h4>
                        <h5><b>Permance-skill</b>:{this.state.prating}</h5>
                        <StarRatingComponent name={"perm_"+this.props.data.id} starCount={5} value={this.state.prating} onStarClick={this.onPerClick.bind(this)}/>

                        <h5><b>Team-work</b>:{this.state.trating}</h5>
                        <StarRatingComponent name={"team_"+this.props.data.id} starCount={5} value={this.state.trating} onStarClick={this.onTeamClick.bind(this)}/>

                        <h5><b>Behavioral-skill</b>:{this.state.brating}</h5>
                        <StarRatingComponent name={"beh_"+this.props.data.id} starCount={5} value={this.state.brating} onStarClick={this.onBehClick.bind(this)}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.onSubmitRates.bind(this)}>Submit</Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
    }
});


