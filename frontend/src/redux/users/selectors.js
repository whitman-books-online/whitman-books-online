import { createSelector } from 'reselect';

const getUserList = state => state.usersReducer.userList;

const getUserId = (state, props) => props.google_tok;

export const getUserById = createSelector(
  [getUserList, getUserId],
  (userList, userId) => {
    const user = userList.find(item => item.google_tok === userId);
    return user;
  },
);
