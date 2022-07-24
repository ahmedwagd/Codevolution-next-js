
function UserDetails({ user }) {
  return (
    <div style={{ textAlign: 'center', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h3>{user.name}</h3>
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone number: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    </div>
  )
}
export default UserDetails;

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  const data = await response.json()
  return {
    props: {
      user: data
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  const paths = data.map(user => {
    return {
      params: {
        userId: `${user.id}`
      }
    }
  })
  return {
    paths: [
      ...paths
    ],
    fallback: false,
  }
}