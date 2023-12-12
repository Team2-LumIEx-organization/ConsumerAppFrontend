import styled from 'styled-components'

export const CabinentBox = styled.div`
    width: 260px;
    height: 100px;
    margin-top: 40px;
    border-radius: 20px;
    position: relative;
    margin-top: 100px;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.disabled ? props.theme.textDisabled : props.theme.textPrimary};
    background: ${props => props.disabled ? props.theme.tagBorder : props.theme.cardBackground};
    border: ${props => `1px solid ${props.theme.cardBackground}`};
    border-radius: 40px;
    transition: 200ms ease-in-out;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    &:hover {
        border: 1px solid ${props => props.disabled ? props.theme.tagBorder : props.theme.redColorHover};
        color: ${props => props.disabled ? props.theme.textDisabled : props.theme.redColorHover};
    }
`