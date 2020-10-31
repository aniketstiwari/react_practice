import React from 'react';

//If you want to give default value in context. The default value only be used
// when the component doesn't have the matching provider above the component tree
const UserContext = React.createContext('shivam');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }

//2nd way to pass data is context type property

export default UserContext;