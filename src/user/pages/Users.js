import React from 'react';

import UsersList from '../components/UsersList'
    const USERS = [
        {
            id: 'ul', 
            name: 'Max Shwartz', 
            image:
                'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81eG9bUk8rL._SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FMadden-NFL-21-PlayStation-4%2Fdp%2FB089DFJJGR&tbnid=5stfGA8q4ftWAM&vet=12ahUKEwjs5c3cga3rAhVMA98KHRxBDI8QMygAegUIARDnAQ..i&docid=dkyOaYdcfAUCfM&w=1205&h=1500&q=madden%2021&hl=en&authuser=0&ved=2ahUKEwjs5c3cga3rAhVMA98KHRxBDI8QMygAegUIARDnAQ',
            places: 3
        }
    ];
const Users = () => {
    return <UsersList items={USERS} />;
};

export default Users;