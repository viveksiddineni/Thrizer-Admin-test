import {
  CATEGORY_TYPE,
  TAG_TYPE,
  FOCUS_TYPE,
  SHOW_NUMBER_SEQUENCE,
  SUBCRIPTION_STATUS,
  RAIL_VIEW,
  AUTO_RENEWAL,
  NOTIFICATION_TYPE,
  SUBCRIPTION_MONTH,
  BADGE_CATEGORY_TYPE,
} from "./enums";

export const PAGE_OPTIONS = {
  page: 1,
  limit: 10,
  skip: 0,
  where : {
    type: 0,
  }
};

export const COMMON_PATH = {
  LIST: "list",
  ADD: "add",
  DETAILS: "details",
};

export const USER_TYPE = [
  { name: "Admin", value: 1 },
  { name: "User", value: 2 },
  { name: "Admin", value: 3 },
];

export  enum SUGGESTIONS_TYPE  {
  BEHAVIOURS = 1,
  STRESS = 2,
  DISORDER = 3,
  FEELBETTER = 4,
  TREATMENT_TECHNIQUE = 5,
  LIFEGOALS = 6      
}

export const STATUS = [
  {value: -1, viewValue: 'New Added'},
  {value: 1, viewValue: 'Accepted'},
  {value: 2, viewValue: 'Rejected'},
  {value: 3, viewValue: 'Active'},
  {value: 4, viewValue: 'Inactive'},
]

export const SUGGESTIONS_TYPES = [
  {value: 1, viewValue: 'Behaviours'},
  {value: 2, viewValue: 'Stress'},
  {value: 3, viewValue: 'Disorder'},
  {value: 4, viewValue: 'FeelBetter'},
  {value: 5, viewValue: 'Treatment Technique'},
  {value: 6, viewValue: 'Life Goals'},
]

export const quillConfigConst = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    // [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button

    ["link", "image"], // link and image, video
  ],
};
