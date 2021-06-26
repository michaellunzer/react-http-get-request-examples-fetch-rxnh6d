import React from 'react';

class GetRequestSetHeaders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReactPackages: null
    };
  }

  componentDidMount() {
    // GET request using fetch with set headers
    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5NWY5ODI2YTFhYzU0ZmIwOTlmYzg5MjNkNGYyYzUxZiIsImlhdCI6MTYyNDY1NDI4MiwiZXhwIjoxOTQwMDE0MjgyfQ.fQLypZBR8ju5KV8shkakoL94Oa4WR1er6ZTK5ASv1nU'
    };
    fetch('https://home.michaellunzer.com/api/states/sensor.sn1_temperature', {
      headers
    })
      .then(response => response.json())
      .then(data => this.setState({ totalReactPackages: data.state }));
  }

  render() {
    const { totalReactPackages } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">GET Request with Set Headers</h5>
        <div className="card-body">Temp: {totalReactPackages}</div>
      </div>
    );
  }
}

export { GetRequestSetHeaders };
