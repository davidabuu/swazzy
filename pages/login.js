import React from "react";
import { Button, Input } from "antd";
import UserWebLayout from "../src/components/UserWebLayout";
const Login = () => {
  return (
    <UserWebLayout webtitle='LOGIN'>
      <div className="login">
        <div className="form">
          <form>
            <h2>LOGIN</h2>
            <div>
              <div>
                <label>Matric Number</label>
                <br></br>
                <Input type="text" placeholder="Enter FullName" required />
              </div>
            </div>
            <div>
              <div>
                <label>Password</label>
                <br></br>
                <Input type="password" required />
              </div>
            </div>

            <br></br>
            <div>
              <Button className="login-btn" htmlType="submit">
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </UserWebLayout>
  );
};

export default Login;
