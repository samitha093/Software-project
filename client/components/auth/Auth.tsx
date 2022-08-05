import React from 'react'

interface AuthProps {
type:string;
}

const Auth: React.FC<AuthProps> = ({type, children}) => {
    return (
        <div>{children}</div>
    );
}

export default Auth;