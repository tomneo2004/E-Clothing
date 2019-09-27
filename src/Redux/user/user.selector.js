import {createSelector} from 'reselect';

const selectUser = state=>state.user;

export const SelectCurrentUser = createSelector(
    [selectUser],
    
    user=>user.currentUser
);

export const SelectUserError = createSelector(
    [selectUser],

    user=>user.error
);

export const SelectUserSignupError = createSelector(
    [selectUser],

    user=>user.signupError
);