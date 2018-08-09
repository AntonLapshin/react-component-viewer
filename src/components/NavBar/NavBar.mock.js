export default {
  items: [
    {
      name: "Home"
    },
    {
      name: "Contacts"
    },
    {
      name: "Help"
    }
  ],
  pathname: "Home",
  changeHandler: item => window.notify("Selected item: " + item.name)
};
