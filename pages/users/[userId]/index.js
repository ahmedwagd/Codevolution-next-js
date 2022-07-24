
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
/*
 * * gestStaticPaths > fallback : true 
 * 1- The paths returned from gestStaticPaths will be rerenderd to HTML at build time by gestStaticProps.
 * 2- The paths that have not been generated at build time will not  result in a 404 page. Instead, Next.js will serve a "fallback" version on the page on the first request to such a path.
 * 3- In the background, Next.js will statically generated the requested path HTML and JSON. This includes running gestStaticProps.
 * 4- When that's done, the browser recevies the JSON for the generated path. This will be used to automatically render the page with the required props.
 *       From the user's prespective, the page will be sapped from the callback page to full page.
 * 5- At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent request to the same path will serve the generated page,
 *        just like other pages pre-rendered at build time.
 * * When?
 * The true value is most suitable if your app has a very large number of static pages that depend on data
 * A large e-commerce site.
 * You want all the product pages to be pre-rendered but if you have thousand products, builds can take a really long time.
 * You may statically generate a small subset of products that are popular and use fallback : true for the rest.
 * When someone requests a page that's not generated yet, the user will see the page with loading indicator.
 * Shortly after, getStaticProps finishes and the page will be rendered with the requested data.
 *    From then onwards, everyone  who requests the same page  will get the statically pre-rendered page.
 * This ensures that the users always have a fast experience while  preserving fast build and benefits of Static Generation. 
 */

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