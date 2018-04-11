import { createSelector } from 'reselect';

const getUserList = state => state.usersReducer.userList;

const getUserId = (state, props) => props.userId;

export const makeGetUserById = () =>
  createSelector(
    [getUserList, getUserId],
    (userList, userId) => {
      const user = userList[userId];
      return user;
    },
  );
