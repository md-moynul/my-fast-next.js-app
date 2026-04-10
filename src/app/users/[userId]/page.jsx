import Link from "next/link";


const UserDetailsPage = async({params}) => {
    const {userId} = await params;
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
  
    const targetedUser = users.find(user => user.id === parseInt(userId))
 console.log(targetedUser);
 
    
    
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="card w-110 bg-base-100 card-xl shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{targetedUser.name}</h2>
                    <p>{targetedUser.email}</p>
          
                    <div className="justify-end card-actions">
                        <Link href="/users" className="btn btn-primary">Back</Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default UserDetailsPage;