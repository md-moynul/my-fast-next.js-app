import Link from "next/link";
export const metadata = {
  title: 'All Users page',
  description: 'all users here',
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);

    return (
        <div >
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
                {users.map(user => <div key={user.id} className="card bg-primary text-primary-content ">
                    <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <p>{user.phone}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/users/${user.id}`} className="btn">See Details</Link>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default UsersPage;