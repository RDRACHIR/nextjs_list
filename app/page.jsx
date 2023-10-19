import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json(res);
  return data.data;
}

async function Homepage() {
  const users = await fetchUsers();
  return <Users users={users} />;
}

export default Homepage;
