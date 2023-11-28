import { useState, useContext} from 'react'
import MainContext from "../../MainContext";
import FormCard from '../../components/formCard'

const LoginPage = () => {
    const { registerContext, token } = useContext(MainContext).login;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log('token', token)
     
    
    const onChange = (key, value) => {
        if (key === "email") {
            setEmail(value)
        }
        if (key === "password") {
            setPassword(value)
        }
    }

    const onClick = () => {
        registerContext({
            email,
            password
        })
    }
    return (
        <FormCard
            linkText={'already have an account yet?'}
            linkAddress={'/login'}
            buttonText={'register'}
            email={email}
            password={password}
            onChange={onChange}
            onClick={onClick}
        />
    )
}

export default LoginPage

