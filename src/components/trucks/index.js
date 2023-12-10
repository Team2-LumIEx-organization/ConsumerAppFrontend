import React, { useContext } from 'react'
import { ThemeContext } from "../../context/themeContext";
import MainContext from "../../MainContext";
import styled from 'styled-components';
import Truck from '../../asset/trucks/3.svg'
import Truck2 from '../../asset/trucks/4.svg'
import Truck3 from '../../asset/trucks/5.svg'

const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: ${props => props.theme ? props.theme.primaryBackground : 'black'};
`

const StyledTruck = styled.img`
    width: ${props => props.styles.width}vw;
    top: ${props => props.styles.top}vh;
    left: ${props => props.styles.left}vw;
    position: fixed;
    transform: ${props => props.styles.transform};
    transition: 400ms ease-in-out;
    opacity: ${props => props.styles.opacity};
    filter: ${props => props.darkThemeSelected ?
        'invert(100%) sepia(100%) saturate(0%) hue-rotate(21deg) brightness(' + props.styles.brightnessDark + '%) contrast(101%)' :
        'invert(76%) sepia(3%) saturate(22%) hue-rotate(321deg) brightness(' + props.styles.brightnesswhite + '%) contrast(81%)'
    };
`

const styles = {
    dashboard: {
        truck1: {
            width: 60,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 50,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck2: {
            width: 20,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 10,
            brightnessDark: 50,
            opacity: 0.1,
            brightnesswhite: 31,
        },
        truck3: {
            width: 20,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 90,
            brightnessDark: 50,
            opacity: 0.1,
            brightnesswhite: 31,
        }
    },
    dashboard2: {
        truck1: {
            width: 60,
            top: 50,
            transform: 'translate(-50%, -50%)scaleX(-1)',
            left: 50,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck2: {
            width: 20,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 10,
            brightnessDark: 50,
            opacity: 0.1,
            brightnesswhite: 31,
        },
        truck3: {
            width: 20,
            top: 50,
            transform: 'translate(-50%, -50%)scaleX(-1)',
            left: 90,
            brightnessDark: 50,
            opacity: 0.1,
            brightnesswhite: 31,
        }
    },
    setting: {
        truck1: {
            width: 30,
            top: 70,
            transform: 'translate(-50%, -50%)',
            left: 50,
            brightnessDark: 40,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck2: {
            width: 30,
            top: 40,
            transform: 'translate(-50%, -50%)',
            left: 16,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck3: {
            width: 15,
            top: 40,
            transform: 'translate(-50%, -50%)',
            left: 83,
            brightnessDark: 80,
            opacity: 0.5,
            brightnesswhite: 11,
        }
    },
    newParcel: {
        truck1: {
            width: 30,
            top: 60,
            transform: 'translate(-50%, -50%)',
            left: 50,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck2: {
            width: 30,
            top: 60,
            transform: 'translate(-50%, -50%)',
            left: 15,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck3: {
            width: 30,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 80,
            brightnessDark: 70,
            opacity: 0.1,
            brightnesswhite: 81,
        }
    },
    login: {
        truck1: {
            width: 25,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 50,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck2: {
            width: 30,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 20,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck3: {
            width: 25,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 75,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        }
    },
    register: {
        truck1: {
            width: 25,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 60,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck2: {
            width: 40,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 20,
            brightnessDark: 30,
            opacity: 0.3,
            brightnesswhite: 81,
        },
        truck3: {
            width: 25,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 85,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        }
    },
    default: {
        truck1: {
            width: 60,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 50,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck2: {
            width: 20,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 10,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        },
        truck3: {
            width: 20,
            top: 50,
            transform: 'translate(-50%, -50%)',
            left: 90,
            brightnessDark: 30,
            opacity: 0.1,
            brightnesswhite: 81,
        }
    }
}

const Trucks = () => {
    const { darkThemeSelected, theme } = useContext(ThemeContext);
    const { page } = useContext(MainContext).trucks;

    return (
        <Wrapper theme={theme}>
            <StyledTruck styles={styles[page || 'default'].truck1} darkThemeSelected={darkThemeSelected} src={Truck} />
            <StyledTruck styles={styles[page || 'default'].truck2} darkThemeSelected={darkThemeSelected} src={Truck2} />
            <StyledTruck styles={styles[page || 'default'].truck3} darkThemeSelected={darkThemeSelected} src={Truck3} />
        </Wrapper>
    )
}

export default Trucks