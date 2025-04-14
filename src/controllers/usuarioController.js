// src/controllers/usuarioController.js

export const listarUsuarios = (req, res) => {
    const usuarios = [
      {
        nome: 'Mauricio Rafael',
        email: 'mauricio.rgv10@gmail.com',
        cadastro: '2010-05-01',
        acesso: 'Admin',
        cpf: '415.682.368.85',
        endereco: 'Rua Bolivia, 123 - Registro/SP'
      },
      {
        nome: 'Bruno Eduardo',
        email: 'brunoedp@gmail.com',
        cadastro: '2014-06-05',
        acesso: 'Admin',
        cpf: '555.214.331-10',
        endereco: 'Rua Paraguai , 456 - Registro/SP'
      },
      {
        nome: 'Bruno Davies',
        email: 'brunodavies@gmail.com',
        cadastro: '2012-03-11',
        acesso: 'Admin',
        cpf: '145.588.668.34',
        endereco: 'Rua Brasil, 77 - Registro/SP'
      },
      {
        nome: 'Renan Ramos',
        email: 'renanramos@gmail.com',
        cadastro: '2014-08-22',
        acesso: 'Admin',
        cpf: '818.173.557-19',
        endereco: 'Rua Equador, 15 - Registro/SP'
      },
      {
        nome: 'Leonardo Ribeiro',
        email: 'leoribeiro@gmail.com',
        cadastro: '2016-05-12',
        acesso: 'Admin',
        cpf: '045.114.844-15',
        endereco: 'Rua Argentina, 151 - Registro/SP'
      }
    ];
  
    res.render('usuarios', { usuarios });
  };
  
