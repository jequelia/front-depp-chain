
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { CONTACT_ABI, CONTACT_ADDRESS } from '../../config';

import { Button, Form } from 'semantic-ui-react';
import { Container, Flex } from "./style";

import 'semantic-ui-css/semantic.min.css';
import Header from "../../components/header";
import { useHistory } from 'react-router';

function Register() {
  const [account, setAccount] = useState();
  const [contactList, setContactList] = useState();

  const [nomeFaculdade, setNomeFaculdade] = useState('');
  const [nomeDiretorGeral, setNomeDiretorGeral] = useState('');
  const [nomeSecretariaAcademica, setNomeSecretariaAcademica] = useState('');
  const [nomeCurso, setNomeCurso] = useState('');
  const [nomeAluno, setNomeAluno] = useState('');
  const [documentoAluno, setDocumentoAluno] = useState('');
  const [qtdDisciplinasConcluida, setQtdDisciplinasConcluida] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  
  let history = useHistory();
  

  const handleCreateCard = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      // Instantiate smart contract using ABI and address.
      const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
      // set contact list to state variable.
      setContactList(contactList);

      console.log(contactList);
      await contactList.methods.createCard(
        nomeFaculdade,
        "Anonymous",
        nomeDiretorGeral,
        nomeSecretariaAcademica,
        nomeCurso,
        nomeAluno,
        documentoAluno,
        qtdDisciplinasConcluida,
        cargaHoraria).send({
          from: accounts[0],
        });
        history.push('/');
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
  
  return (
    <Flex>
    <Header />


        <Container>

                <div className="divide" />

                <div className="publication">
                    <Form>
                        <h3>Cadastrar Diploma</h3>
                        <Form.Field>
                            <label>Nome da faculdade</label>
                            <input 
                            placeholder='Nome da faculdade' 
                            onChange={(e) => setNomeFaculdade(e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Nome diretor geral</label>
                            <input 
                            placeholder='Nome diretor geral' 
                            onChange={(e) => setNomeDiretorGeral(e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Nome da secretaria academica</label>
                            <input 
                            placeholder='Nome da secretaria academica' 
                            onChange={(e) => setNomeSecretariaAcademica(e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Nome do curso</label>
                            <input 
                            placeholder='Nome do curso' 
                            onChange={(e) => setNomeCurso(e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Nome do aluno</label>
                            <input 
                            placeholder='Nome do aluno' 
                            onChange={(e) => setNomeAluno(e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Documento do aluno</label>
                            <input 
                            placeholder='Documento do aluno' 
                            onChange={(e) => setDocumentoAluno(e.target.value)} />
                        </Form.Field>

                        <div className="row">
                            <Form.Field id="input1">
                                <label>Quantidade de disciplinas concluídas</label>
                                <input placeholder='Quantidade de disciplinas concluídas' 
                                onChange={(e) => setQtdDisciplinasConcluida(e.target.value)}/>
                            </Form.Field>

                            <Form.Field id="input2">
                                <label>Carga horária</label>
                                <input 
                                placeholder='Carga horária' 
                                onChange={(e) => setCargaHoraria(e.target.value)}/>
                            </Form.Field>
                        </div>

                        <div id="buttons">
                            <Button  onClick={handleCreateCard}  type='submit'>Criar</Button>
                        </div>

                    </Form>

                </div>

        </Container>

    </Flex>
  );
}

export default Register;
