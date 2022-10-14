import React, { useEffect, useState } from "react";

const Dashboard = (props) => {
  console.log("user", props.user);
  return (
    <div>
      {props.user.map((e) => {
        return (
          <div className="container" key={e.id}>
            <div className="card mt-5">
              <div className="card-header d-flex justify-content-between">
                <h5>Name : {e.name}</h5>
                <p>id : {e.id}</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Email : {e.email}</h5>
                <p className="card-text">username : {e.username}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
