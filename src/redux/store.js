import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: "I'm good, thanks bro",
                    likeCounts: 100500,
                    avatar: "https://img.freepik.com/vecteurs-premium/illustration-vectorielle-femme-noire-portrait-image-avatar-fille-noire-affiche-du-mois-histoire-noirs_610881-10.jpg?w=2000"
                },
                {
                    id: 2,
                    message: "Hi! How are u? Duuuude",
                    likeCounts: 1050,
                    avatar: "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
                },
                {
                    id: 3,
                    message: "It's my first post mfk!",
                    likeCounts: 150,
                    avatar: "https://img.freepik.com/vecteurs-premium/illustration-vectorielle-femme-noire-portrait-image-avatar-fille-noire-affiche-du-mois-histoire-noirs_610881-10.jpg?w=2000"
                },
            ],
            newPostText: "Let's writing",
        },
        messagesPage: {
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
            newMessageText: "",
        },
    },
    _callSubscriber() {
        console.log('changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {  // action - object. for example: {type: 'ADD-POST', message: 'Hi'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state);
    },
};



export default store;
