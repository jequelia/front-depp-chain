
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { CONTACT_ABI, CONTACT_ADDRESS } from '../../config';
import { Container, Flex,Card,Search } from "./style";
import Header from "../../components/header";
import { Button } from 'semantic-ui-react';

import { useHistory } from 'react-router';

function Home() {
  const [account, setAccount] = useState();
  const [contactList, setContactList] = useState();
  const [contacts, setContacts] = useState([]);
  
  let history = useHistory();

  useEffect( () => {getData()}, []);

    async function getData() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      // Instantiate smart contract using ABI and address.
      const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
      // set contact list to state variable.
      setContactList(contactList);
      // Then we get total number of contacts for iteration
      const listCard = await contactList.methods.fetchAllCards().call();
      setContacts(listCard);
      console.log(listCard);
      // iterate through the amount of time of counter
    }

  
  return (
    <Flex>
    <Header />
        <Container>
              <div className="divide" />
              <Search>
                <h1>Diplomas Digitais Unifacisa</h1>
                <Button onClick={() => history.push('/register')}  type='submit'>Criar</Button>

              </Search>
                <div className="publication">
                  {
                    Object.keys(contacts).map((contact, index) => (
                      <Card key={`${contacts[index].nomeFaculdade}-${index}`}>
                        <h3>Certificado conclusão de curso</h3>
                        <h4>{contacts[index].nomeFaculdade}</h4>
                        <span><b>Curso: </b>{contacts[index].nomeCurso}</span>
                        <span><b>ID: </b>{contacts[index].id}</span>
                        <span><b>Aluno: </b>{contacts[index].nomeAluno}</span>
                        <span><b>Total de disciplinas concluídas: </b>{contacts[index].qtdDisciplinasConcluida}</span>
                        <span><b>Carga horaria: </b>{contacts[index].cargaHoraria} h</span>
                      </Card>
                    
                    ))
                  }
              </div>
        </Container>

    </Flex>
  );
}

export default Home;
