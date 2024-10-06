export const UserData = ({ user }) => {
    const { avatar_url, public_repos, url, login, name, bio, created_at } = user;
    const createdDate = new Date(created_at);
    return (
      <div className="user-profile">
        <div>
          <img src={avatar_url} alt="user" className="user-image" />
        </div>
  
        <fieldset>
          <legend>User Profile</legend>
          <div>
            <p>
              User joined on{" "}
              {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                month: "short",
              })} ${createdDate.getFullYear()}`}
            </p>
            <p>Public repos : {public_repos}</p>
            <p>{url}</p>
            <p>UserName:{login}</p>
            <p>Github AdminName :{name}</p>
          </div>
        </fieldset>
      </div>
    );
  };
  