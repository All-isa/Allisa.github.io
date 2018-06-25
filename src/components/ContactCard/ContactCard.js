import React from "react";
import { Form, Field } from "form-for";
import User from "./User";

class ContactCard extends Component {
  constructor(props) {
    super(props);

    const user = new User();
    user.name = "John";
    user.phone = "000 999-9999";
    user.email = "john@doe.com";

    this.state = { user: user };
  }

  handleChange = (mutator, name, value) => {
    this.setState({ user: mutator() });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Form for={this.state.user} onChange={this.handleChange}>
              <div className="row">
                <div className="col-sm-6">
                  <Field name="name" />
                </div>
              </div>

              <Field name="phone" />
              <Field name="email" />

              <button className="btn btn-primary">Submit</button>
            </Form>
          </div>

          <div className="col-md-6">
            <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;
