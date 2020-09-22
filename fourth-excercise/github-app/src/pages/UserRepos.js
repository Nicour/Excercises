import React, { Component } from 'react';
import axios from 'axios';

class UserRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repository: '',
      contributors: []
    }
  };

  handleOnChange = (event) => {
    const { name, value } = event.target; 
    this.setState({
      [name]:[value]
    })
  }

  handleSubmit = (event) => {
    const { username, repository } = this.state;
    event.preventDefault();
    axios.get(`https://api.github.com/repos/${username}/${repository}/contributors`)
    .then (response => {
      let contributors = [];
      response.data.forEach(contributor => {
        contributors.push(contributor.login)
      })
      this.setState({
        contributors: contributors
      })
    });
  }

  clearSearch = (event) => {
    event.preventDefault();
    this.setState({
      contributors: []
    })
  }

  render() {
    const { repository, username, contributors } = this.state;
    return (

      <div>
        <h2>List of contributors</h2>
        <section>
        {
          contributors.length ? contributors.map((contributor) => {
            return (
              <div key={contributor}>
                <h3>{contributor}</h3>
              </div>
            )
          })
          : 
          <>
            <section>
              <form onSubmit={this.handleSubmit} className="search-user-repos">
                <label htmlFor="username">Repository owner username</label>
                <input type="text" id='username' onChange={this.handleOnChange} value={username} name='username' placeholder="Username" required/>
                <label htmlFor="repository">Repository</label>
                <input type="text" id='repository' onChange={this.handleOnChange} value={repository} name='repository' placeholder="Repository"required/>
                <button type="submit" className="button">Search</button>
              </form>
            </section>
          </>
        }
        </section>
      </div>
    )
  };
};

export default UserRepos;