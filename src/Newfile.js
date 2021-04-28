import React,{useEffect,useState} from 'react';

const url = 'https://api.github.com/users'

const Newfile = () => {

    const [user,setUser] = useState([])
    const getUser = async () => {
        const response = await fetch(url)
        const users = await response.json()
        setUser(users)
    }
    useEffect(()=>{
        getUser()

    },[])

console.log(user)

    return (
        <div>
            <h1> Fetching data</h1> 
            {user.map((u)=>{
                const {login} = u
                return <h2> 
                    {login} 
                </h2> 

            })}

        </div>
    )
}

export default Newfile
