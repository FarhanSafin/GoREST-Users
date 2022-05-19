import React from 'react';
import useUsers from '../hooks/useUsers';
import Loading from '../Loading/Loading';

const Home = () => {
    const [users] = useUsers();
    const datas = users.data;
    if (!datas) return <Loading></Loading>;
    return (
        <div className='container mx-auto mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5 text-center'>
            {
                datas.map(data=>
                <div className="card w-30 bg-neutral-content text-base-300" key={data.id}>
                <div className="card-body">
                    <h2 className="text-3xl font-bold">{data.name}</h2>
                    <p>{data.email}</p>
                    <p>{data.gender}</p>
                    <p className='font-bold'>{data.status}</p>
                </div>
                </div>)
            }
        </div>
    );
};

export default Home;