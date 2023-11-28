import React, { useContext } from 'react'
import { ThemeContext } from "../../context/themeContext";
import { Background } from '../../components/base/common'
import { StyledCard } from '../../components/base/card'
import Input from '../../components/base/input'
import { VerticalSpace } from '../../components/base/common'
import Button from '../../components/base/button'
import { StyledLink } from '../../components/base/link'
import styled from 'styled-components'

const Title = styled.div`
    position: Relative;
    color: ${props => props.theme.textPrimary};
    font-size: 24px;
    margin-bottom: 72px;
`

const FormCard = ({ email, password, onChange, linkText, linkAddress, buttonText, onClick }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Background>
            <StyledCard>
                <Title theme={theme} >
                     Enter your email Address and password
                </Title>
                <VerticalSpace height={30} />
                <Input
                    placeholder="Email"
                    onChange={onChange}
                    inputTarget="email"
                    value={email}
                    size='full'
                    validate={true}
                />
                <VerticalSpace height={50} />
                <Input
                    placeholder="Password"
                    onChange={onChange}
                    inputTarget="password"
                    value={password}
                    size='full'
                    validate={true}
                    type="password"
                />
                <VerticalSpace height={50} />
                <Button
                    text={buttonText}
                    onClick={onClick}
                />
                <VerticalSpace height={105} />
                <StyledLink to={linkAddress}>{linkText}</StyledLink>
            </StyledCard>
        </Background>
    )
}

export default FormCard

