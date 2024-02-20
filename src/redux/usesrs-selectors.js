import { createSelector } from 'reselect';


export const getUsersList = (state) => {
  return state.usersPage.users;
}

// const getUsersFilter = (state) => { //Для примера применения реселекторов
//   return getUsersList(state).filter(u => true)
// }

export const getUserSuper = createSelector(
  getUsersList,
  getUsersList,
  (users, users2) =>  users.filter(u => true));

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
}

export const getTotalUserCount = (state) => {
  return state.usersPage.totalUserCount;
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
}

export const getIsFetchingStatus = (state) => {
  return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
}

