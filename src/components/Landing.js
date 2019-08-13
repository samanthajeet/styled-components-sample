import React, { Component } from "react";
import {Input, LandingContainer, Button, InputSection, Title, Link} from './Style'


class Landing extends Component {
  state = {
    showLogin: true
  };

  toggle(){
    this.setState({showLogin: !this.state.showLogin})
  }
  render() {
    return (
      <LandingContainer>
        <img src="" alt="" className="landing-image"/>
        <Button onClick={() => this.toggle()} >switch</Button>
        {this.state.showLogin ? (
          <section className="login">
            <Title>login</Title>
            <InputSection>
              <p>email</p>
              <Input type="text" />
            </InputSection>
            <InputSection>
              <p>password</p>
              <Input type="password" />
            </InputSection>
            <Button>Login</Button>
          </section>
        ) : (
          <section className="regsiter">
            <Title>register</Title>
            <InputSection>
              <p>username</p>
              <Input type="text" />
            </InputSection>
            <InputSection>
              <p>email</p>
              <Input type="text" />
            </InputSection>
            <InputSection>
              <p>password</p>
              <Input type="password" />
            </InputSection>
            <Button>Register</Button>
          </section>
        )}

        <Link href="">contact developer</Link>
        
      </LandingContainer>
    );
  }
}

export default Landing;
