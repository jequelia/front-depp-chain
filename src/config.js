export const CONTACT_ADDRESS = '0x589bD95775864D477d6D36108FF9065480920B38';

export const CONTACT_ABI =  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "author",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "authorName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "nomeFaculdade",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "nomeDiretorGeral",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "nomeSecretariaAcademica",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "nomeCurso",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "nomeAluno",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "documentoAluno",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "qtdDisciplinasConcluida",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "cargaHoraria",
          "type": "uint256"
        }
      ],
      "name": "CreateCard",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "cardId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "donor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "author",
          "type": "address"
        }
      ],
      "name": "SendTip",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "cardCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "cards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "author",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "authorName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nomeFaculdade",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nomeDiretorGeral",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nomeSecretariaAcademica",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nomeCurso",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nomeAluno",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "documentoAluno",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "qtdDisciplinasConcluida",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cargaHoraria",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "nomeFaculdade_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "authorName_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nomeDiretorGeral_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nomeSecretariaAcademica_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nomeCurso_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "nomeAluno_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "documentoAluno_",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "qtdDisciplinasConcluida_",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cargaHoraria_",
          "type": "uint256"
        }
      ],
      "name": "createCard",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id_",
          "type": "uint256"
        }
      ],
      "name": "findCardById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address payable",
              "name": "author",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "authorName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nomeFaculdade",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nomeDiretorGeral",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nomeSecretariaAcademica",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nomeCurso",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nomeAluno",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "documentoAluno",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "qtdDisciplinasConcluida",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cargaHoraria",
              "type": "uint256"
            }
          ],
          "internalType": "struct CardChain.Card",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id_",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "setTipToAuthor",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner_",
          "type": "address"
        }
      ],
      "name": "getBalanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id_",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "fetchAllCards",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address payable",
              "name": "author",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "authorName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nomeFaculdade",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nomeDiretorGeral",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nomeSecretariaAcademica",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nomeCurso",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nomeAluno",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "documentoAluno",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "qtdDisciplinasConcluida",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cargaHoraria",
              "type": "uint256"
            }
          ],
          "internalType": "struct CardChain.Card[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]