import { IContact } from "../interfaces/contacts/IContact";

export const mockContacts: IContact[]  = [
    {
      contactId: 'b3296990-d31a-4f5c-a8cf-8f8f1ef66ba6',
      firstName: 'Catherin',
      lastName: 'Grafton-Herbert',
      emailAddress: 'cgraftonherbert0@angelfire.com',
      company: 'Jatri',
      address: '8262 Chinook Road',
      isLoggedIn: true,
      phoneNumber: '(179) 5953732',
      messages: [
        {
          date: '2020-04-26T15:27:03.384Z',
          message: 'Hi How are you',
          messageType: 1,
         to: {
           id: 'bd07f0b0-d1e2-4768-99a7-80f91b8f782a',
           name: 'Anabella James'
          }
        },
        {
          date: '2020-04-26T15:27:17.667Z',
          message: 'What are you doing ?',
          messageType: 1,
         to: {
           id: 'bd07f0b0-d1e2-4768-99a7-80f91b8f782a',
           name: 'Anabella James'
          }
        },
        {
          date: '2020-04-26T15:27:54.156Z',
          message: 'I am good',
          messageType: 2,
          from: {
            id: 'bd07f0b0-d1e2-4768-99a7-80f91b8f782a',
            name: 'Anabella James'
          }
        },
        {
          date: '2020-04-26T15:28:09.968Z',
          message: 'What about you ?',
          messageType: 2,
          from: {
            id: 'bd07f0b0-d1e2-4768-99a7-80f91b8f782a',
            name: 'Anabella James'
          }
        },
        {
          date: '2020-04-26T15:28:44.539Z',
          message: 'Okay then',
          messageType: 2,
          from: {
            id: 'bd07f0b0-d1e2-4768-99a7-80f91b8f782a',
            name: 'Anabella James'
          }
        }
      ],
      isSelected: false
    },
    {
      contactId: 'bd07f0b0-d1e2-4768-99a7-80f91b8f782a',
      firstName: 'Anabella',
      lastName: 'James',
      emailAddress: 'ajames1@unicef.org',
      company: 'Trudeo',
      address: '17432 Lukken Place',
      isLoggedIn: false,
      phoneNumber: '(448) 8363596',
      messages: [
        {
        date:'2020-04-26T15:27:03.384Z',
        message:'Hi How are you',
        messageType:2,
        from:{
        id: 'b3296990-d31a-4f5c-a8cf-8f8f1ef66ba6',
        name: 'Catherin Grafton-Herbert'
        }
        },
  {
        date:'2020-04-26T15:27:17.667Z',
        message:'What are you doing ?',
        messageType:2,
        from:{
        id:'b3296990-d31a-4f5c-a8cf-8f8f1ef66ba6',
        name: 'Catherin Grafton-Herbert'
        }
        },
  {
        date:'2020-04-26T15:27:54.156Z',
        message:'I am good',
        messageType:1,
        to:{
        id:'b3296990-d31a-4f5c-a8cf-8f8f1ef66ba6',
        name :'Catherin Grafton-Herbert'
        }
        },
  {
        date:'2020-04-26T15:28:09.968Z',
        message:'What about you ?',
        messageType:1,
        to:{
        id:'b3296990-d31a-4f5c-a8cf-8f8f1ef66ba6',
        name :'Catherin Grafton-Herbert'
        }
        },
  {
        date:'2020-04-26T15:28:44.539Z',
        message:'Okay then',
        messageType:1,
        to:{
        id:'b3296990-d31a-4f5c-a8cf-8f8f1ef66ba6',
        name :'Catherin Grafton-Herbert'
        }
        }
        ],
  isSelected: false
    },
  {
      contactId: 'b43bc385-0f5d-413d-a4a5-7d7bd16d75cc',
      firstName: 'Veronique',
      lastName: 'Albrighton',
      emailAddress: 'valbrighton2@youtu.be',
      company: 'Lajo',
      address: '7779 Laurel Place',
      isLoggedIn: false,
      phoneNumber: '(545) 2661238',
      messages: [],
      isSelected: false
    },
  {
      contactId: '0eb2f90e-1946-49eb-9f61-b33ac567f293',
      firstName: 'Maryanne',
      lastName: 'Brightwell',
      emailAddress: 'mbrightwell3@senate.gov',
      company: 'Meevee',
      address: '66458 Hudson Place',
      isLoggedIn: false,
      phoneNumber: '(506) 4116188',
      messages: [],
      isSelected: false
    },
  {
      contactId: '37ead301-230c-44d3-8514-9692e4ea0483',
      firstName: 'Odilia',
      lastName: 'Stirley',
      emailAddress: 'ostirley4@squarespace.com',
      company: 'Buzzbean',
      address: '30 Lighthouse Bay Way',
      isLoggedIn: false,
      phoneNumber: '(637) 4029198',
      messages: [],
      isSelected: false
    },
  {
      contactId: '20216343-248e-433c-a7a9-babe837796f8',
      firstName: 'Henryetta',
      lastName: 'Gilpillan',
      emailAddress: 'hgilpillan5@techcrunch.com',
      company: 'Fatz',
      address: '1 Redwing Parkway',
      isLoggedIn: false,
      phoneNumber: '(110) 8072732',
      messages: [],
      isSelected: false
    },
  {
      contactId: '32e93f9d-66b5-4488-8b59-00d9059eebf9',
      firstName: 'Pauletta',
      lastName: 'Brugh',
      emailAddress: 'pbrugh6@chronoengine.com',
      company: 'Blogpad',
      address: '0 Monica Street',
      isLoggedIn: false,
      phoneNumber: '(953) 7159136',
      messages: [],
      isSelected: false
    },
  {
      contactId: '62415d8f-4c15-4209-b295-7f26613496f7',
      firstName: 'Amitie',
      lastName: 'Burnyeat',
      emailAddress: 'aburnyeat7@usgs.gov',
      company: 'Yodo',
      address: '286 Mesta Court',
      isLoggedIn: false,
      phoneNumber: '(415) 1741624',
      messages: [],
      isSelected: false
    },
  {
      contactId: '87007923-5c8f-4c6c-9af2-ec9febbea504',
      firstName: 'Agatha',
      lastName: 'Finkle',
      emailAddress: 'afinkle8@economist.com',
      company: 'Kayveo',
      address: '9 Merrick Crossing',
      isLoggedIn: false,
      phoneNumber: '(260) 7773750',
      messages: [],
      isSelected: false
    },
  {
      contactId: '19d268c4-ff5e-4739-87b6-ff2f4b8d1d45',
      firstName: 'Cristabel',
      lastName: 'Domnick',
      emailAddress: 'cdomnick9@apache.org',
      company: 'Jetwire',
      address: '87129 Troy Crossing',
      isLoggedIn: false,
      phoneNumber: '(794) 1600754',
      messages: [],
      isSelected: false
    }
  ];
  