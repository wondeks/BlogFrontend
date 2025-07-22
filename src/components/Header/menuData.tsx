import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "መነሻ",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "ስለ እኛ",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "ብሎግ",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "ትምህርቶች",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 3,
    title: "ድጋፍ",
    path: "/contact",
    newTab: false,
  },

  {
    id: 4,
    title: "ገፆች",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "ስለ እኛ ገፅ",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "እውነተኛ ገፅ",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "የብሎግ መስቀል ገፅ",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "የብሎግ ዳሽቦርድ ገፅ",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "የብሎግ ዝርዝር ገፅ",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "ግባ ገፅ",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "ይመዝገቡ ገፅ",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "ስህተት ገፅ",
        path: "/error",
        newTab: false,
      },
    ],
  },
];

export default menuData;
