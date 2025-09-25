import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      email: "",
      gender: "",
    };

    this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);
    this.onChangeGenderHandler = this.onChangeGenderHandler.bind(this);
    this.onChangeNamaHandler = this.onChangeNamaHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  /**
   * Handler for nama input change event. Updates the nama state with the new value.
   * @param {Event} event - The change event.
   */
  onChangeNamaHandler(event) {
    this.setState({ nama: event.target.value });
  }

  /**
   * Handler for email input change event. Updates the email state with the new value.
   * @param {Event} event - The change event.
   */
  onChangeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }

  /**
   * Handler for gender input change event. Updates the gender state with the new value.
   * @param {Event} event - The change event.
   */
  onChangeGenderHandler(event) {
    this.setState({ gender: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const message = `Nama: ${this.state.nama}\nEmail: ${this.state.email}\nGender: ${this.state.gender}`;
    alert(message);
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmitEventHandler}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Register</legend>

        <label className="label" htmlFor="nama">
          Nama
        </label>
        <input
          type="text"
          className="input"
          placeholder="Masukkan nama"
          value={this.state.nama}
          onChange={this.onChangeNamaHandler}
        />
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="input"
          placeholder="Masukkan Email"
          value={this.state.email}
          onChange={this.onChangeEmailHandler}
        />

        <label className="label" htmlFor="gender">
          Gender
        </label>
        <select
          defaultValue={this.state.email}
          onChange={this.onChangeGenderHandler}
          className="select"
        >
          <option value="" disabled={true}>
            Pilih Gender
          </option>
          <option value="Man">Man</option>
          <option value="Woman">Woman</option>
        </select>

        <button className="btn btn-neutral mt-4">Register</button>
      </form>
    );
  }
}

export default MyForm;
