
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { CONTACT_ABI, CONTACT_ADDRESS } from './config';


function App() {
  const [account, setAccount] = useState();
  const [contactList, setContactList] = useState();
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    async function load() {
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
    load();
  }, []);
  
  return (
    <div>
      Your account is: {account}
      <h1>Contacts</h1>
      <ul>
      {
        Object.keys(contacts).map((contact, index) => (
          <li key={`${contacts[index].nomeFaculdade}-${index}`}>
            <h4>{contacts[index].nomeFaculdade}</h4>
            <span><b>Phone: </b>{contacts[index].nomeFaculdade}</span>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
