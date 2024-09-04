
const {createApp} = Vue;

const app = createApp ({
    data() {
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '12:33',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '13:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '16:22',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '19:43',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '15:34',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '16:12',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '14:19',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '18:15',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '19:59',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '22:30',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '08:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '9:28',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '00:30',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '01:58',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '11:25',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '12:01',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '13:14',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            currentChat: 0,
            searchInput: "",
            messageInput: ""
        }
    },
    methods: {
        newMessage() {
            const myNewDate = new Date();
            const msgObject = {
                date: myNewDate.getHours()+":"+myNewDate.getMinutes(),
                message:this.messageInput,
                status:'sent'
            }
            this.contacts[this.currentChat].messages.push(msgObject);
            this.messageInput = "";
        },
        changeIndex(){
            if (this.currentChat != 0){
                this.contacts.unshift(this.contacts[this.currentChat]);
                this.contacts.splice(this.currentChat+1, 1);
                this.currentChat = 0;
            }
        },
        sendMessage() {
            const data = new Date();
            const newObj = {
                date: data.getHours()+":"+data.getMinutes(),
                message:"Ciao! Ok :)",
                status:"received"
            };
            
            setTimeout(() => {
                this.contacts[this.currentChat].messages.push(newObj);
                // Run after 1000 milliseconds
            }, 1000);
        },
        deleteMessage(item, object) {
            
            object.splice(item,1);
        
        }
    }
}).mount("#app");