import React from "react";
import { AppContext } from "providers/AppProvider";
import UserContainerComponent from "components/container/UserContainerComponent";

function ViewProfilePage() {
  const { state } = React.useContext(AppContext);

  const nav = [
    {
      label: "Account",
      link: "/user/auth/account.html",
    },
    {
      label: "Profile",
    },
  ];

  const data = state.user;

  const renderRow = () => {
    const allowed = [
      "email",
      "phone_number",
      "account_name",
      "account_number",
      "bank_name",
      "country",
      "state",
      "address",
    ];

    return allowed.map((key) => {
      return (
        <tr key={key}>
          <td style={{ textTransform: "uppercase" }}>
            {key.replace(/_/g, " ")}
          </td>
          <td>{data[key]}</td>
        </tr>
      );
    });
  };

  return (
    <UserContainerComponent bread={nav}>
      <div className="row">
        <div className="col l6 offset-l3 s12">
          <div className="card-panel">
            <center>
              <img
                src={`/uploads/images/${data.photo_profile}`}
                className="circle"
                height="100px"
              />
            </center>
            <br />
            <table className="striped">
              <tbody>{renderRow()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </UserContainerComponent>
  );
}

export default ViewProfilePage;
