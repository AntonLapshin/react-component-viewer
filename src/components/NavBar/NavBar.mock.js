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
  selectedItemName: "Home",
  changeHandler: item => window.notify("Selected item: " + item.name)
};
