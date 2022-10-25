import { IUser } from "../../models/IUser";

interface ListProps{
    users:IUser[];
}

function List({users}:ListProps){

    return(
        <>
            {users.map(user => {

                return(
                    <div>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
                        <p>{user.phone}</p>
                        <p>{user.email}</p>
                    </div>
                );
            })}
        </>
    );
}

export default List;