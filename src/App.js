import React from 'react';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
    };
  }

  render() {
    return (
      <>
        <label for="inputSearch">Example Search</label>
        <div class="form-group col-md-6">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
          ></input>
        </div>

        <button class="btn btn-primary">Explore!</button>
      </>
    );
  }
}

export default App;
