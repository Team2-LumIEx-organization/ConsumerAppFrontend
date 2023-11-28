import styled from 'styled-components'

export const StyledCard = styled.div`
    background-color: '#bbbbcc';
    display: flex;
    flex-direction: ${props => props.createParcel? 'row': 'column'};
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    width: ${props => props.createParcel? '1300px': '800px'};
    margin-top: 100px;
    padding: 20px 40px;
    box-sizing: border-box;
    box-shadow: 1px 2px 3px 4px rgba(20,20,20,0.4);
`

export const StyledCardItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 33%;
    margin-top: 20px;
    margin-bottom: 20px;
`


