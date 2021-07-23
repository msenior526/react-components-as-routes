import React from 'react';

class Signup extends React.Component {
  render() {
    return (
        <div>
          <form>
            <div>
              <input type="email" name="email" placeholder="Email" />
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Signup" />
          </form>
        </div>
      )
  }
}

export default Signup; 