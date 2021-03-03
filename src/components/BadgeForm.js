import React from 'react';

class BadgeForm extends React.Component{
    //state={};
       /*  firstName:' ',
        lastName:' ',
        email:' ',
        jobTitle:' ',
        twitter:' ', */

     /* handleChange = e =>{
        this.setState({ 
           [e.target.name]: e.target.value, 
        });
    }; */

    handleClick = e => {
        console.log("Button was clicked");
    };

    /* handleSubmit = e => {
        e.preventDefault();
        console.log('Forma was sumbmitted');
        console.log(this.state);

    }; */

    render(){
        return(
            <div>
                {/* <h1>Nuevo Participante</h1> */}
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            placeholder="introduci tu nombre"
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            placeholder="introduci tu apellido"
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            placeholder="introduci tu email"
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            placeholder="introduci tu ocupacion"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            placeholder="introduci tu twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>

                    <button 
                        type="submit"
                        /* type="button" /* al estar en el form funciona como submit */ 
                        onClick={this.handleClick} 
                        className="btn btn-primary">Save
                    </button>
                   {this.props.error && <p className="text-danger">{this.props.error.message}</p>}  
                </form>
            </div>
        );
    }
}

export default BadgeForm;