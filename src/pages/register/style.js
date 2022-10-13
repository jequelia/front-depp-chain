import styled from 'styled-components'

export const Container  = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    background: white;
    width: 70%;
    padding: 59px;
    margin-bottom: 30px;

    .create-form label{
        color: whitesmoke !important;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px !important;
    }

    form{
        width: 50vw;

        h3{
            color:#1976d2;
        }

        .row{
            display: flex;
            margin-bottom: 30px;
        }

        #input1{
            margin-right: 55px;
        }
    }

    #buttons{
        display: flex;
        justify-content: center;

        button{
            margin-top: 20px;
            width: 20vw;
            margin-right: 30px;
        }
    }
`

export const Flex = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

`