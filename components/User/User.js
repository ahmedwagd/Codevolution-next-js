
function User({ user }) {
  return (
    <>
      <h3>{user.name}</h3>
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone number: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    </>
  )
}
export default User;