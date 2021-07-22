export const VALIDATION_MESSAGES = {
  END_SCHEDULE:
    "Cannot send the notification as delivery time has already passed. Please edit it.",
};
export const POPUP_MESSAGES = {
  SELECT_IMAGE_SCENE:
    "Please select at least one image or a pano image file to continue",
  SELECT_VIDEO_SCENE: "Please select at least one video file to continue",
  ok: "Ok",
  close: "Close",
  confrim: "Confirmation",
  no: "No",
  yes: "Yes",
  cancel: "Cancel",
  save: "Save",
  sendNow: "Send Now",
  deleteNow: "Delete Now",
  passwordResetTitle: "Reset Password",
  passwordResetLink:
    "Password reset link has been sent to registered email id . Please follow the link to reset password .",
  passwordChanged: "Password has been changed successfully.",
  logout: "Confirmation",
  resendMessage: "Are you sure you want to resend?",
  logoutConfirmation: "Are you sure you want to logout?",
  sendNowMessage:
    "This notification will be sent immediately to selected audience. You will not be able to edit this notification once sent.",
  forgotPasswordTitle:
    "Forgot Your Password? Don't worry send us your registered email address and we will send yousteps to reset your password.",
  FORM_ERROR: "Please fill all required field",
};

export const invalidImageError = (format = "jpeg/png") =>
  `Only ${format} images are allowed`;
export const xlsx_file_format = `Only .xlsx files are allowed`;
export const invalidFileSize = (size = 5) =>
  `File size can not be more than ${size} MB`;
export const actionMessage = (action = "delete") =>
  `Are you sure you want to ${action} this?`;

export const COMMON_MESSAGES = {
  ADDED: (type) => toTitleCase(type) + " has been added successfully",
  UPDATED: (type) => toTitleCase(type) + " has been updated successfully",
  BLOCKED: {
    confirm: (type) => `Do you want to block this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been blocked successfully`,
  },

  ACTIVE: {
    confirm: (type) => `Do you want to active this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been activated successfully`,
  },
  INACTIVE: {
    confirm: (type) => `Do you want to inactive this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been inactive successfully`,
  },
  ACCEPT: {
    confirm: (type) => `Do you want to accept this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been accepted successfully`,
  },

  REJECT: {
    confirm: (type) => `Do you want to reject this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been rejectd successfully`,
  },
  DELETED: {
    confirm: (type) => `Do you want to delete this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been deleted successfully`,
  },
  VERIFY: {
    confirm: (type) => `Do you want to verify this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been verified successfully`,
  },
  SENT: (type) => toTitleCase(type) + " has been sent successfully",
  RESENT: (type) => toTitleCase(type) + " has been resent successfully",
};

export const SOMETHING_WENT_WRONG =
"We can not proccess your request right now, Please try again later.";
export const IS_AGREE = "Please agree before you proceed.";
export const IMAGE_REQUIRED = "Please select an image.";
export const NO_INTERNET_CONNECTION =
  "Please check your internet connection and try again later.";
export const SERVER_NOT_RESPONDING = "API Server not working!";
export const INTERNAL_SERVER_ERROR = "Internal server error.";
export const TIME_OUT = "Server time out.";

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const TOAST_MESSAGES = {
  NO_ACCESS: (module, action) =>
    `You do not have access to ${module} with ${action} access`,
  NO_RATING: "No rating available",
};
