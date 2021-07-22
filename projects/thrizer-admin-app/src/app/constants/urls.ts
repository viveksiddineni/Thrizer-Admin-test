const USER = "users";
export const ADMIN = "admins";
const DASBOARD = `${USER}/dashboard`;
const CATEGORY = `${ADMIN}/category`;
const GARAGE = `${ADMIN}/garage`;
const REQUEST = `${ADMIN}/request`;

export const LOGIN_API = `${ADMIN}/login`;
export const LOGOUT_API = `${ADMIN}/logout`;
export const SIGNUP_API = `${ADMIN}/signup`;
export const FORGOT_PASSWORD_API = `${ADMIN}/forgot-password`;
export const CHANGE_PASSWORD_API = `${ADMIN}/password`;
export const RESET_PASSWORD_API = `${ADMIN}/reset-password`;
export const USER_DETAILS = `${ADMIN}/details`;
export const ADMIN_UPDATE_API = `${ADMIN}`;
export const ADMIN_DASHBOARD_API = `${ADMIN}/get-dashboard-details`;
export const EDITPROFILE_API = `${ADMIN}/editProfileDetails`;
export const VALIDATE_TOKEN_API = `${ADMIN}/verify-token`;
export const VERIFYPASSWORD_API = `${ADMIN}/verifyPasswordEditProfile`;
export const USERS_API = `${ADMIN}/users`;
export const USERS_LIST_API = `${ADMIN}/users/list`;

// CATEGORY MODULE API's //get-categorylist

export const CATEGORY_LIST_GET = `${ADMIN}/get-categorylist`;
export const CATEGORY_ADD_POST = `${ADMIN}/add-category`;
export const CATEGORY_EDIT_PATCH = `${ADMIN}/edit-category`;

// SUGGESTIONS

export const SUGGESTIONS = `suggestions`;
export const CHANGE_STATUS = 'change-status';
