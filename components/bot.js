import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
    const config = {
      width: "300px",
      height: "400px",
      floating: true
    };

    const theme = {
        background: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor: "#f57328",
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: "#f57328",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4c4c4c"
       };


    const steps = [
        {
            id: '0',
            message: 'Hey!',
     
            // This calls the next id
            // i.e. id 1 in this case
            trigger: '1',
        }, {
            id: '1',
     
            // This message appears in
            // the bot chat bubble
            message: 'Please write your name',
            trigger: '2'
        }, {
            id: '2',
     
            // Here we want the user
            // to enter input
            user: true,
            trigger: '3',
        }, {
            id: '3',
            message: " hi {previousValue}, how can I help you?",
            trigger: 4
        }, {
            id: '4',
            options: [
                 
                // When we need to show a number of
                // options to choose we create alist
                // like this
                { value: 1, label: 'About us' },
                { value: 2, label: 'Read More' },
     
            ],
            end: true
        }
    ];
    
    return (
<ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config} />
    </ThemeProvider>
    )
    ;
   }
   export default CustomChatbot;