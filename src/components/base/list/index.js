import styled from 'styled-components'

export const StyledListItem = styled.div`
    background-color: ${props => props.theme.SecondaryBackground + '00'};
    display: flex;
    align-items: center;
    margin: auto;
    width: 70%;
    margin-bottom: 20px;
    margin-top: ${props => props.title ? '35px' : '0'};
    padding: 20px 40px;
    border-radius: 40px;
    box-sizing: border-box;
    box-shadow: 1px 2px 0px 0px rgba(20,20,20,0.4);
    cursor: pointer;
    &:hover{
        box-shadow: 1px 2px 3px 4px rgba(20,20,20,0.4);
        background-color: ${props => props.theme.SecondaryBackground};
    }
`

export const StyledItem = styled.div`
    width: 0;
    white-space: nowrap;
    color: ${props => props.theme.textPrimary};
    font-weight: ${props => props.title ? 'bold' : 'normal'};
`


