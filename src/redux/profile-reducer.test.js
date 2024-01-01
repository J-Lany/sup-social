import profileReducer, { addPostActionCreator } from "./profile-reducer";
import { render, screen } from '@testing-library/react';
import App from './App';

it('length of post should be incremented', () => {
  //1. test data
  let action = addPostActionCreator("Sup Factory");
  let state = {
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
  }

  //2. action
  let newState = profileReducer(state, action)

  // 3. expect
  expect(newState.postsData.length).toBe(4);
});

