import React from "react";

function Users({ data, deleteData }) {
  return (
    <ul className='user'>
      {data &&
        data.results.map((user, i) => {
          return (
            <li key={i} className='user__item'>
              <button
                onClick={() => {
                  deleteData(user.email);
                }}
                className='user__delete--btn'>
                ✖
              </button>
              <img
                className='user__img'
                src={user.picture.large}
                alt='user photo'
                width={100}
                height={100}
              />
              <div className='user__name'>
                <span>📰</span>
                <span>
                  - {user.name.title} {user.name.first} {user.name.last}
                </span>
              </div>
              <div className='user__year'>
                <span>📆</span>
                <span>- {user.dob.age} years old</span>
              </div>
              <div className='user__location'>
                <span>🌎</span>
                <span>- {user.location.city}</span>
              </div>
              <div className='user__gender'>
                <span>{user.gender === "male" ? "🧍‍♂️" : "🧍‍♀️"}</span>
                <span>- {user.gender}</span>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default Users;
