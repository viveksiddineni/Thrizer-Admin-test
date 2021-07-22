import { IRoute } from "../models/common-models";

export const AUTH: IRoute = {
  path: "auth",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const LOGIN: IRoute = {
  path: "login",
  get fullUrl(): string {
    return `${AUTH.fullUrl}/${this.path}`;
  },
};

export const SIGNUP: IRoute = {
  path: "signup",
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};

export const FORGOT_PASSWORD: IRoute = {
  path: "forgot-password",
  get fullUrl(): string {
    return `${AUTH.fullUrl}/${this.path}`;
  },
};

export const RESET_PASSWORD: IRoute = {
  path: "reset-password",
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};

export const ACCOUNT: IRoute = {
  path: "account",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const FEATURE: IRoute = {
  path: "feature",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const SUGGESTIONS: IRoute = {
  path: "suggestions",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const SUGGESTION_MANAGEMENT: IRoute = {
  path: "management",
  get fullUrl(): string {
    return `${SUGGESTIONS.fullUrl}/${this.path}`;
  },
};















export const ADMIN: IRoute = {
  path: "admin",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const DASHBOARD: IRoute = {
  path: "dashboard",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const PROPERTIES: IRoute = {
  path: "properties",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const PROPERTIES_VIEWINGS: IRoute = {
  path: "property-viewings",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const PROPERTIES_DETAILS: IRoute = {
  path: "details",
  get fullUrl(): string {
    return `${PROPERTIES.fullUrl}/${this.path}`;
  },
};

export const PROPERTIES_ADD: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${PROPERTIES.fullUrl}/${this.path}`;
  },
};

export const PROPERTIES_EDIT: IRoute = {
  path: "edit",
  get fullUrl(): string {
    return `${PROPERTIES.fullUrl}/${this.path}`;
  },
};

export const SHOWCASES: IRoute = {
  path: "showcases",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const SHOWCASES_DETAILS: IRoute = {
  path: "details",
  get fullUrl(): string {
    return `${SHOWCASES.fullUrl}/${this.path}`;
  },
};

export const LINK_EXPIRED: IRoute = {
  path: "link-expired",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};



export const CHANGE_PASSWORD: IRoute = {
  path: "change-password",
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};

export const RESET_CONFIRMATION: IRoute = {
  path: "confirmation",
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};

export const USERS: IRoute = {
  path: "users",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const USER_ACCOUNT: IRoute = {
  path: "account",
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  },
};

export const SETTING: IRoute = {
  path: "setting",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const GROUP: IRoute = {
  path: "group",
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  },
};

export const ANALYTICS: IRoute = {
  path: "analytics",
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  },
};

export const PROFILE: IRoute = {
  path: "profile",
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  },
};

export const USER_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${USERS.fullUrl}/${this.path}`;
  },
};

export const POINTS_LIST = {
  path: "point-earned-list",
  // get fullUrl(): string {
  //   return `${USERS.fullUrl}/${this.path}`;
  // },
  fullUrl(id) {
    return `${USERS.fullUrl}/${id}/${this.path}`;
  },
};
export const BADGES_LIST= {
  path: "badges-earned-list",
  // get fullUrl(): string {
  //   return `${USERS.fullUrl}/${this.path}`;
  // },
  fullUrl(id) {
    return `${USERS.fullUrl}/${id}/${this.path}`;
  },
};

export const USER_DETAIL = {
  path: "detail",
  // get fullUrl(): string {
  //   return `${USERS.fullUrl}/${this.path}`;
  // },
  fullUrl(id) {
    return `${USERS.fullUrl}/${id}/${this.path}`;
  },
};

export const WORKOUT: IRoute = {
  path: "workout",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const WORKOUT_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${WORKOUT.fullUrl}/${this.path}`;
  },
};
export const WORKOUT_ADD: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${WORKOUT.fullUrl}/${this.path}`;
  },
};
export const WORKOUT_EDIT = {
  path: "edit",
  fullUrl(id) {
    return `${WORKOUT.fullUrl}/${id}/${this.path}`;
  },
};
// export const WORKOUT_DETAILS: IRoute = {
//   path: 'details',
//   get fullUrl(): string {
//     return `${WORKOUT.fullUrl}/${this.path}`;
//   }
// };
export const WORKOUT_DETAILS = {
  path: "details",
  fullUrl(id) {
    return `${WORKOUT.fullUrl}/${id}/${this.path}`;
  },
};
export const SUB_ADMIN: IRoute = {
  path: "sub-admin",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const SUB_ADMIN_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${SUB_ADMIN.fullUrl}/${this.path}`;
  },
};
export const ADD_SUB_ADMIN: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${SUB_ADMIN.fullUrl}/${this.path}`;
  },
};
export const EDIT_SUB_ADMIN: IRoute = {
  path: "edit",
  get fullUrl(): string {
    return `${SUB_ADMIN.fullUrl}/${this.path}`;
  },
};
export const SUB_ADMIN_DETAIL: IRoute = {
  path: "detail",
  get fullUrl(): string {
    return `${SUB_ADMIN.fullUrl}/${this.path}`;
  },
};

export const EXERCISE: IRoute = {
  path: "exercise",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const EXERCISE_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${EXERCISE.fullUrl}/${this.path}`;
  },
};
export const ADD_EXERCISE: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${EXERCISE.fullUrl}/${this.path}`;
  },
};
export const EDIT_EXERCISE: IRoute = {
  path: "edit",
  get fullUrl(): string {
    return `${EXERCISE.fullUrl}/${this.path}`;
  },
};
export const EXERCISE_DETAIL: IRoute = {
  path: "detail",
  get fullUrl(): string {
    return `${EXERCISE.fullUrl}/${this.path}`;
  },
};

export const RECIPE: IRoute = {
  path: "recipe",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const RECIPE_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${RECIPE.fullUrl}/${this.path}`;
  },
};
export const ADD_RECIPE: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${RECIPE.fullUrl}/${this.path}`;
  },
};
export const EDIT_RECIPE: IRoute = {
  path: "edit",
  get fullUrl(): string {
    return `${RECIPE.fullUrl}/${this.path}`;
  },
};
export const RECIPE_DETAIL: IRoute = {
  path: "detail",
  get fullUrl(): string {
    return `${RECIPE.fullUrl}/${this.path}`;
  },
};

export const CATEGORY: IRoute = {
  path: "category",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const CATEGORY_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${CATEGORY.fullUrl}/${this.path}`;
  },
};
export const GOAL: IRoute = {
  path: "goals",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const GOAL_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${GOAL.fullUrl}/${this.path}`;
  },
};
export const ADD_GOAL: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${GOAL.fullUrl}/${this.path}`;
  },
};
export const EDIT_GOAL: IRoute = {
  path: "edit",
  get fullUrl(): string {
    return `${GOAL.fullUrl}/${this.path}`;
  },
};
export const GOAL_DETAIL: IRoute = {
  path: "detail",
  get fullUrl(): string {
    return `${GOAL.fullUrl}/${this.path}`;
  },
};
export const TAGS: IRoute = {
  path: "tags",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const TAG_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${TAGS.fullUrl}/${this.path}`;
  },
};

export const EQUIPMENT: IRoute = {
  path: "equipment",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const EQUIPMENT_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${EQUIPMENT.fullUrl}/${this.path}`;
  },
};

export const KITCHEN_EQUIPMENT: IRoute = {
  path: "kitchen-equipment",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const KITCHEN_EQUIPMENT_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${EQUIPMENT.fullUrl}/${this.path}`;
  },
};

export const RECIPE_TYPE: IRoute = {
  path: "recipe-type",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const RECIPE_TYPE_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${RECIPE_TYPE.fullUrl}/${this.path}`;
  },
};

export const FOCUS_AREA: IRoute = {
  path: "focus-area",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const FOCUS_AREA_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${FOCUS_AREA.fullUrl}/${this.path}`;
  },
};
export const DIFFICULTY_LEVEL: IRoute = {
  path: "difficulty-level",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const DIFFICULTY_LEVEL_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${FOCUS_AREA.fullUrl}/${this.path}`;
  },
};

export const LANGUAGE: IRoute = {
  path: "langauge",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const LANGUAGE_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${LANGUAGE.fullUrl}/${this.path}`;
  },
};
export const COMMON_INGREDIENTS: IRoute = {
  path: "common-ingredients",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const COMMON_INGREDIENTS_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${COMMON_INGREDIENTS.fullUrl}/${this.path}`;
  },
};
export const COMMON_NUTRITION: IRoute = {
  path: "common-nutrition",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const COMMON_NUTRITION_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${COMMON_INGREDIENTS.fullUrl}/${this.path}`;
  },
};

export const POPULAR_WORKOUT: IRoute = {
  path: "popular-workout",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const ADD_POPULAR_WORKOUT: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${POPULAR_WORKOUT.fullUrl}/${this.path}`;
  },
};

export const EDIT_POPULAR_WORKOUT: IRoute = {
  path: "edit",
  get fullUrl(): string {
    return `${POPULAR_WORKOUT.fullUrl}/${this.path}`;
  },
};

export const POPULAR_WORKOUT_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${POPULAR_WORKOUT.fullUrl}/${this.path}`;
  },
};
export const POPULAR_WORKOUT_DETAILS: IRoute = {
  path: "details",
  get fullUrl(): string {
    return `${POPULAR_WORKOUT.fullUrl}/${this.path}`;
  },
};

export const LANDING_MANAGEMENT: IRoute = {
  path: "landing",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const TRAIN_MANAGEMENT: IRoute = {
  path: "train-management",
  get fullUrl(): string {
    return `${LANDING_MANAGEMENT.fullUrl}/${this.path}`;
  },
};
export const MEAL_MANAGEMENT: IRoute = {
  path: "meal-management",
  get fullUrl(): string {
    return `${LANDING_MANAGEMENT.fullUrl}/${this.path}`;
  },
};

export const TRENDING_RECIPE: IRoute = {
  path: "trending-recipe",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const TRENDING_RECIPE_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${TRENDING_RECIPE.fullUrl}/${this.path}`;
  },
};
export const ADD_TRENDING_RECIPE: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${TRENDING_RECIPE.fullUrl}/${this.path}`;
  },
};
export const TRENDING_RECIPE_DETAILS: IRoute = {
  path: "details",
  get fullUrl(): string {
    return `${TRENDING_RECIPE.fullUrl}/${this.path}`;
  },
};

export const NOTIFICATION: IRoute = {
  path: "notification",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const NOTIFICATION_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${NOTIFICATION.fullUrl}/${this.path}`;
  },
};
export const ADD_NOTIFICATION: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${NOTIFICATION.fullUrl}/${this.path}`;
  },
};

export const EDIT_NOTIFICATION: IRoute = {
  path: "edit",
  get fullUrl(): string {
    return `${NOTIFICATION.fullUrl}/${this.path}`;
  },
};

export const NOTIFICATION_DETAIL = {
  path: "detail",
  get fullUrl() {
    return `${NOTIFICATION.fullUrl}/${this.path}`;
  },
};

export const EDIT_TRENDING_RECIPE: IRoute = {
  path: "edit",
  get fullUrl(): string {
    return `${TRENDING_RECIPE.fullUrl}/${this.path}`;
  },
};

export const RATING_REVIEWS: IRoute = {
  path: "rating-reviews",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const RATING_REVIEWS_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${RATING_REVIEWS.fullUrl}/${this.path}`;
  },
};

export const SUBSCRIPTION_PLAN: IRoute = {
  path: "subscription",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const SUBSCRIPTION_PLAN_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${SUBSCRIPTION_PLAN.fullUrl}/${this.path}`;
  },
};
export const EDIT_SUBSCRIPTION = {
  path: "edit-subscription",
  // get fullUrl(): string {
  //   return `${SUBSCRIPTION_PLAN.fullUrl}/${this.path}`;
  // },
  fullUrl(id) {
    return `${SUBSCRIPTION_PLAN.fullUrl}/${id}/${this.path}`;
  },
};
export const ADD_SUBSCRIPTION: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${SUBSCRIPTION_PLAN.fullUrl}/${this.path}`;
  },
};

export const REPORTS: IRoute = {
  path: "reports",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const REPORTS_USERS: IRoute = {
  path: "new-users",
  get fullUrl(): string {
    return `${REPORTS.fullUrl}/${this.path}`;
  },
};

export const REPORTS_WORKOUT: IRoute = {
  path: "workout-added",
  get fullUrl(): string {
    return `${REPORTS.fullUrl}/${this.path}`;
  },
};

export const REPORTS_EXERCISE: IRoute = {
  path: "exercise-added",
  get fullUrl(): string {
    return `${REPORTS.fullUrl}/${this.path}`;
  },
};

export const REPORTS_RECIPE: IRoute = {
  path: "recipe-added",
  get fullUrl(): string {
    return `${REPORTS.fullUrl}/${this.path}`;
  },
};

export const REPORTS_INGREDIENT: IRoute = {
  path: "ingredient-added",
  get fullUrl(): string {
    return `${REPORTS.fullUrl}/${this.path}`;
  },
};

export const FAQ: IRoute = {
  path: "faq",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};
export const FAQ_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${FAQ.fullUrl}/${this.path}`;
  },
};
export const ADD_FAQ: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${FAQ.fullUrl}/${this.path}`;
  },
};

export const CONTENT_MANAGEMENT: IRoute = {
  path: "content-management",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const ABOUT_US = {
  path: "about-us",
  get fullUrl() {
    return `${CONTENT_MANAGEMENT.fullUrl}/${this.path}`;
  },
};

export const TERMS_OF_SERVICES = {
  path: "terms-of-services",
  get fullUrl() {
    return `${CONTENT_MANAGEMENT.fullUrl}/${this.path}`;
  },
};

export const PRIVACY = {
  path: "privacy-policy",
  get fullUrl() {
    return `${CONTENT_MANAGEMENT.fullUrl}/${this.path}`;
  },
};
export const OPEN_SOURCES_LICENSES = {
  path: "open-sources-licesnses",
  get fullUrl() {
    return `${CONTENT_MANAGEMENT.fullUrl}/${this.path}`;
  },
};

export const POINTS_MANAGEMENT: IRoute = {
  path: "points-management",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const POINTS_MANAGEMENT_BADGES: IRoute = {
  path: "badges",
  get fullUrl(): string {
    return `${POINTS_MANAGEMENT.fullUrl}/${this.path}`;
  },
};

export const POINTS_MANAGEMENT_BADGES_LIST: IRoute = {
  path: "list",
  get fullUrl(): string {
    return `${POINTS_MANAGEMENT_BADGES.fullUrl}/${this.path}`;
  },
};
export const POINTS_MANAGEMENT_BADGES_LIST_VIEW: IRoute = {
  path: "list-view",
  get fullUrl(): string {
    return `${POINTS_MANAGEMENT_BADGES.fullUrl}/${this.path}`;
  },
};
export const POINTS_MANAGEMENT_BADGES_GRID_VIEW: IRoute = {
  path: "grid-view",
  get fullUrl(): string {
    return `${POINTS_MANAGEMENT_BADGES.fullUrl}/${this.path}`;
  },
};

export const POINTS_MANAGEMENT_BADGES_ADD: IRoute = {
  path: "add",
  get fullUrl(): string {
    return `${POINTS_MANAGEMENT_BADGES.fullUrl}/${this.path}`;
  },
};
export const POINTS_MANAGEMENT_BADGES_EDIT = {
  path: "edit",
  fullUrl(id) {
    return `${POINTS_MANAGEMENT_BADGES.fullUrl}/${id}/${this.path}`;
  },
};

export const POINTS_MANAGEMENT_POINTS: IRoute = {
  path: "points",
  get fullUrl(): string {
    return `${POINTS_MANAGEMENT.fullUrl}/${this.path}`;
  },
};

export const POINTS_MANAGEMENT_LEVELS: IRoute = {
  path: "levels",
  get fullUrl(): string {
    return `${POINTS_MANAGEMENT.fullUrl}/${this.path}`;
  },
};
