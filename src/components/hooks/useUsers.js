import { useEffect, useState } from "react";


const useUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://gorest.co.in/public/v1/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);

    return [users, setUsers];
}

export default useUsers;