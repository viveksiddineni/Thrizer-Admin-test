export enum FILE_TYPE {
  image = 1,
  pdf = 2,
  video = 3,
}
export enum CATEGORY_TYPE {
  WORKOUT = 1,
  RECIPE = 2,
  EXERCISE = 3,
}

export enum TAG_TYPE {
  WORKOUT = 2,
  MEALS = 3,
  EXERCISE = 1,
}

export enum RAIL_VIEW {
  LANDSCAPE = 1,
  PORTRAIT = 0,
}

export enum SHOW_NUMBER_SEQUENCE {
  SHOW = 1,
  DONT_SHOW = 0,
}
export enum AUTO_RENEWAL {
  YES = 1,
  NO = 0,
}

export enum FOCUS_TYPE {
  WORKOUT = 1,
  // EXERCISE = 1,
}
export enum MEDIA_TYPE {
  IMAGE = 1,
  VIDEO = 2,
  GIF = 3,
}
export enum ELEMENT_STATUS {
  ACTIVE = 1,
  BLOCKED = 0,
  DELETED = 2,
}

export enum BLOCK_UNBLOCK{
  BLOCK="block",
  UNBLOCK="unblock",
}

export enum MODULE_NAME {
  tags = "tags",
  exerciselib = "exerciselib",
  users = "users",
  category = "category",
  notification = "adminnotification",
  version = "version",
  goals = "goals",
  equipments = "equipments",
  recipe_equipments = "recipe_equipments",
  targetmuscle = "targetmuscles",
  subs_config = "subs_config",
  language = "language",
  workoutlib = "workoutlib",
  dynamicpanel = "dynamicpanel",
  dynamicbanner = "dynamicbanner",
  nutritions = "nutritions",
  ingredients = "ingredients",
  recipetype = "recipetype",
  reciep_equipments = "reciep_equipments",
  recipelib = "recipelib",
  content = "content",
  difflevel = "difflevel",
  trendingrecipe = "trendingrecipe",
  badgemaster="badgemaster"
}

// sortBy ('createdAt', 'workoutName')
// sortType ('asc', 'desc')

export enum SUBCRIPTION_STATUS {
  SUBSCRIBED = 1,
  NON_SUBSCRIBED = 0,
  FREE_TRIAL = 3,
}

export enum SUBCRIPTION_TYPE {
  MONTHLY = 1,
  QUATERLY = 2,
  HALFYEARLY = 3,
  YEARLY = 4,
  FREE = 0,
}
export enum SUBCRIPTION_MONTH {
  MONTHLY = 1,
  QUATERLY = 3,
  HALFYEARLY = 6,
  YEARLY = 12,
  FREE = 0,
}

export enum WORKOUT_LANDING_PAGE_MODULE {
  recomendedWorkouts = "recomendedWorkouts",
  popularWorkouts = "popularWorkouts",
  landscapeRailWorkoutsTable = "landscapeRailWorkoutsTable",
  staticBanner = "staticBanner",
  dynamicRail1WorkoutsTable = "dynamicRail1WorkoutsTable",
  dynamicRail2WorkoutsTable = "dynamicRail2WorkoutsTable",
  potraitRailWorkoutsTable = "potraitRailWorkoutsTable",
  dynamicRail3WorkoutsTable = "dynamicRail3WorkoutsTable",
  dynamicRail4WorkoutsTable = "dynamicRail4WorkoutsTable",
  allWorkoutRailTable = "allWorkoutRailTable",
  singleRecipeRail = "singleRecipeRail",
  discoverRecipeTable = "discoverRecipeTable",
  guideToExcersiseTable = "guideToExcersiseTable",
  defaultStaticBanner = "defaultStaticBanner",
}

export enum MEAL_LANDING_PAGE_MODULE {
  recomendedRecipes = "recomendedRecipes",
  trendingRecipes = "trendingRecipes",
  categoricRailRecipeTable = "categoricRailRecipeTable",
  dynamicRail1RecipesTable = "dynamicRail1RecipesTable",
  dynamicRail2RecipesTable = "dynamicRail2RecipesTable",
  potraitRailRecipesTable = "potraitRailRecipesTable",
  recentAddedRecipeRailTable = "recentAddedRecipeRailTable",
  dynamicRail3RecipesTable = "dynamicRail3RecipesTable",
  dynamicRail4RecipesTable = "dynamicRail4RecipesTable",
  discoverRecipeTable1 = "discoverRecipeTable1",
  discoverRecipeTable2 = "discoverRecipeTable2",
  landscapeRail1RecipesTable = "landscapeRail1RecipesTable",
}

export enum NOTIFICATION_TYPE {
  ALL = 0,
  OTHER = 1
}

export enum RECIPIENT_TYPE {
  ALL = 0,
  OTHER = 1,
}

export enum ROLES {
  dashboard = "Dashboard",
  language = "Language",
  categories = "Category",
  cms = "CMS",
  notification = "Notification",
  subAdmin = "Subadmin",
  user = "User",
  landing = "LandingPage",
  exercise = "Exercise",
  workout = "Workout",
  recipe = "Recipe",
  goal = "Goal",
  
  tag = "Tag",
  equipment = "Equipment",
  kitchen = "Kitchen",
  recipyType = "RecipeType",
  trendingRecipe = "TrendingRecipe",
  focusArea = "FocusArea",
  difficulty = "Difficulty",
  ingredient = "Ingredient",
  nutrition = "Nutrition",
  defaultWorkout = "DefaultWorkout",
  rating = "Rating",
  badge="badgeManagement",
  point = "Point",
  level ="level",
  excerciseAdded="excerciseAdded",
  ingredientAdded="ingredientAdded",
  newUsers="newUsers",
  recipeAdded="recipeAdded",
  workoutAdded="workoutAdded",
  subscription="subscription"
}

export const ACTION_NAME = {
  list: "list",
  edit: "edit",
  add: "add",
  block: "block",
  delete: "delete",
  detail: "detail",
};
export enum SUB_ADMIN_PAGE {
  detail = "detail",
}

export enum CONTENTPAGES {
  ABOUTPAGE = 'about-us',
  TERMSPAGE = 'terms-of-services',
  PRIVACYPAGE = 'privacy-policy',
  OPENSOURCEPAGE = 'open-sources-licences',
}

export enum POINT_TABLE_MODULE{
  onboarding="onboarding",
  training="training",
  subscription="subscription",
  lifeevents="lifeevents",
  dailylogin="dailylogin",
  shareevent="shareevent",
  activity="activity",
  food="food"
}

export enum POINT_TABLE_SUB_MODULE{
  otpregistration="otpregistration",
  profilecreation="profilecreation",
  workoutcompletion="workoutcompletion",
  ratetheworkout="ratetheworkout",
  workoutshare="workoutshare",
  inviteforworkout="inviteforworkout",
  monthlysubscription="monthlysubscription",
  yearlysubscription="yearlysubscription",
  birthday="birthday",
  anniversary="anniversary",
  atlogin="atlogin",
  sharetheapp="sharetheapp",
  sharepaidworkout="sharepaidworkout",
  activitytime="activitytime",
  recipecook="recipecook",
}

export enum BADGE_CATEGORY_TYPE {
  general='GENERAL', 
  workout='WORKOUT',
  day= 'DAY', 
  week='WEEK', 
  year='YEAR', 
  month='MONTH'
}



