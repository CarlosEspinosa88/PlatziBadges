import React from 'react'

class Form extends React.Component {

  // state = {
  // }

  // handleChange = e => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value
  //   // })

  //   this.setState({
  //     // firstName: e.target.value,
  //     [e.target.name]: e.target.value
  //   })
  // }

  handleClick = e => {
    console.log('boton presionado')
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('form fue enviado')
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValue.firstName}
            />
          </div>

          <div className="form-group">
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValue.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValue.email}
            />
          </div>

          <div className="form-group">
            <label>Perfil</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValue.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValue.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default Form