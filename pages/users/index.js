

function UsersList({ users }) {
  console.log(users);
  return (
    <>
      <h1>List of users</h1>
      <div>
        {
          users.map(user => (
            <div key={user.id} style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h3>{user.name}</h3>
              <div>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone number: {user.phone}</p>
                <p>Website: {user.website}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default UsersList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json()
  return {
    props: {
      users: data,
    },
  }
}
