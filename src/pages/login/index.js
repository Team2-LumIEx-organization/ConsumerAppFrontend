import { useState, useContext } from 'react'
import MainContext from "../../MainContext";
import FormCard from '../../components/formCard'

const LoginPage = () => {
    const { loginContext, token } = useContext(MainContext).login;
    const { updateToasterContext } = useContext(MainContext).toasters;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (key, value) => {
        if (key === "email") {
            setEmail(value)
        }
        if (key === "password") {
            setPassword(value)
        }
    }
    const onClick = async () => {
        try {
            await loginContext({
                email,
                password
            })
            updateToasterContext({
                type: 'success',
                message: 'Opretration successfull'
            })
        } catch {
            updateToasterContext({
                type: 'error',
                message: 'Somthing went wrong'
            })
        } 
    }
    
    
    return (
        <FormCard
            linkText={'dont have an account yet?'}
            linkAddress={'/register'}
            buttonText={'Login'}
            email={email}
            password={password}
            onChange={onChange}
            onClick={onClick}
        />
    )
}

export default LoginPage

