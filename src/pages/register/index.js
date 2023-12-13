import { useState, useContext, useEffect } from "react";
import MainContext from "../../MainContext";
import FormCard from "../../components/formCard";

const LoginPage = () => {
  const { registerContext, token } = useContext(MainContext).login;
  const { setPageContext } = useContext(MainContext).trucks;

  useEffect(() => {
    setPageContext("register");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  console.log("token", token);

  const onChange = (key, value) => {
    if (key === "email") {
      setEmail(value);
    }
    if (key === "password") {
      setPassword(value);
    }
    if (key === "name") {
      setName(value);
    }
  };

  const onClick = () => {
    registerContext({
      email,
      name,
      password,
    });
  };
  return (
    <FormCard
      linkText={"already have an account yet?"}
      linkAddress={"/"}
      buttonText={"register"}
      email={email}
      name={name}
      password={password}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default LoginPage;
