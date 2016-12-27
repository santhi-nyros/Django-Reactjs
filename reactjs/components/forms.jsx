import React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from "react-router"



var FormUpload = React.createClass({
    uploadFile: function (e) {
        var fd = new FormData();
        fd.append('file', e.target.file.getDOMNode().files[0], e.target.file.getDOMNode().files[0].name );
        console.log(fd)


       {/* $.ajax({
                   url: 'http://localhost:51218/api/Values/UploadFile',
                   data: fd,
                   processData: false,
                   contentType: false,
                   type: 'POST',
                   success: function(data){
                       alert(data);
                   }
               });
        e.preventDefault()*/}
    },
    render: function() {
        return (
            <div>
               <form ref="uploadForm" className="uploader" encType="multipart/form-data" >
                   <input ref="file" type="file" name="file" className="upload-file"/>
                   <input type="button" ref="button" value="Upload" onClick={this.uploadFile} />
               </form>
            </div>
        );
    }
});

var ExampleForm = React.createClass({
    handleEmailChange: function(e) {
       this.setState({email: e.target.value});
    },
    handleNameChange: function(e) {
       this.setState({emp_name: e.target.value});
    },
    handleDesignationChange: function(e) {
       this.setState({designation: e.target.value});
    },
    handleProfileChange: function(e) {
       this.setState({profile: e.target.files[0]});
       this.setState({profileName: e.target.files[0].name});
    },
    handleLogin: function(e) {
        var formData = new FormData();
        console.log(formData)
    },
    render : function() {
          return (
            <div className="addEmp">
                <h2>Adding Employee Details</h2>
                <div>
                    <form ref="Employeeform" encType="multipart/form-data" >

                        <DjangoCSRFToken />

                        <input className="form-control input-lg" id="id_emp_name" name="emp_name" placeholder="Employee name" type="text" onChange={this.handleNameChange} required/><br/>

                        <input className="form-control input-lg" id="id_email" name="email" placeholder="Email" type="text" onChange={this.handleEmailChange} required/><br/>

                        <input className="form-control input-lg" id="id_designation" name="designation" placeholder="Designation" type="text" onChange={this.handleDesignationChange} required/><br/>

                        <label>Profile Image:</label>
                        <input id="id_profile" name="profile" type="file" ref="file" onChange={this.handleProfileChange} required/>
                        <br/><br/>

                        <input value="submit" type="submit" onClick={this.handleLogin} />
                    </form>
                </div>
            </div>
          );
        }
    });
