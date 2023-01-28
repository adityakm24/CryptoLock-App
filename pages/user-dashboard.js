export default function UserDashboard({ query }) {
    console.log(typeof query);
  return (
    <div>
      <h1>Data from Page 1</h1>
      <pre>{ typeof query.user}</pre>
      <pre>{query.user}</pre>
    </div>
  );
}

UserDashboard.getInitialProps = async ({ query }) => {
  return { query };
};
