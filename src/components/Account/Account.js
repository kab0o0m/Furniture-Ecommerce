import "./Account.css";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="account">
      {/* Header */}
      <div className="account-header">
        <Link href="/Furniture-Ecommerce-Website/">Home</Link>
        <div>/</div>
        <div className="account-header-page">
          <p>Account</p>
        </div>
      </div>

      {/* Body */}
      <div className="account-body">
        <form action="">
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" required />
          </div>
          <button className="account-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Account;
