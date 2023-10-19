async function getUserById(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json(res);
  return data.data;
}

export default async function UserPage({ params }) {
  const user = await getUserById(params.id);
  return (
    <div className="bg-slate-400 p-10 rounded-md h-80 my-20 py-10">
      <img
        src={user.avatar}
        alt=""
        className="m-auto my-4 rounded-md hover:scale-125 hover:opacity-75 transition-transform transition-opacity"
      />
      <h3 className="text-3xl font-bold">
        {user.id}. {user.first_name} {user.last_name}
      </h3>
      <p>Email: {user.email}</p>
    </div>
  );
}
