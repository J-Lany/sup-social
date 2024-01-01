const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });


const initialState = {
    dialogsData: [
        { id: 1, name: "Phoebe", avatar: "https://img.freepik.com/free-vector/woman-wearing-glasses-head-cartoon-isolated_1308-141333.jpg?size=626&ext=jpg&ga=GA1.1.1646309637.1672866953&semt=ais" },
        { id: 2, name: "Alex", avatar: "https://img.freepik.com/free-vector/bangkok-thailand-may-12-2023-caricature-tiger-woods-smilin_1308-133923.jpg?size=626&ext=jpg&ga=GA1.1.1646309637.1672866953&semt=ais" },
        { id: 3, name: "Ann", avatar: "https://img.freepik.com/free-vector/pop-art-fashion-beautiful-woman-cartoon_18591-52376.jpg?size=626&ext=jpg&ga=GA1.1.1646309637.1672866953&semt=ais" },
        { id: 4, name: "Clark", avatar: "https://img.freepik.com/vecteurs-premium/illustration-vectorielle-femme-noire-portrait-image-avatar-fille-noire-affiche-du-mois-histoire-noirs_610881-10.jpg?w=2000" },
        { id: 5, name: "Grigor", avatar: "https://img.freepik.com/premium-vector/young-man-with-beard-avatar-character-vector-illustration-design_24908-61755.jpg?size=626&ext=jpg&ga=GA1.1.1646309637.1672866953&semt=ais" }
    ],
    messagesData: [
        { id: 1, message: "Hello! How aerw u?" },
        { id: 2, message: "What's uuuuuuuuuup dude?" },
        { id: 3, message: "Yo yo yo" },
        { id: 4, message: "Pizzzzzyyyyyyyy" },
    ],
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: body }],
            };

        default:
            return state;
    }
}

export default dialogsReducer;