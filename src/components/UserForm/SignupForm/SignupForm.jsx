import { Component } from "react";
// import "./SignupForm.css";
import { signUp } from "../../../utilities/user-service";
<<<<<<< HEAD
=======
import "./SignupForm.css";
import { useNavigate } from "react-router-dom";
>>>>>>> 10742d70d5888f95fcba52f9379a859d2be617d1

export default class SignUpForm extends Component {
  state = {
    name: "asc",
    email: "asc@asc",
    password: "asc",
    confirm: "asc",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // await postData("/api/users", formData);
      console.log("Form data:", this.state);
      const res = await signUp(this.state);
      // res = res.user
      // this.props.setUser(user);
      console.log("Response from signUp:", res);
      if (res.error) {
        this.setState({ error: res.error });
      } else {
        // this.props.setUser(res);
        const { setUser } = this.props;
        console.log("hello");
        const saveUser = () => setUser(user);
        console.log("After");
        this.props.navigate("/calendar");
      }
    } catch (e) {
      const error = JSON.stringify(e);
      console.log("error", typeof error);
      this.setState({ error });
      // console.log(error);
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
