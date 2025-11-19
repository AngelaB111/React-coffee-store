import espresso from "../assets/espresso.jpg"; 
import frappe from "../assets/greek-frappe.jpg";
import beans from "../assets/beans.jpg";
import latte from "../assets/latte.jpg";
export const PRODUCTS = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong/bold espresso shot",
    price: 2.5,
    category: "Espresso",
    image: espresso,
  },
  {
    id: 2,
    name: "frappe",
    description: "Smooth and chilled coffee",
    price: 3.5,
    category: "frappe",
    image: frappe,
  },
  {
    id: 3,
    name: "latte",
    description: "Creamy milk coffee",
    price: 3.0,
    category: "Lattes",
    image: latte,
  },
  {
    id: 4,
    name: "Coffee Beans",
    description: "Premium roasted beans",
    price: 10.0,
    category: "Beans",
    image: beans,
  },
];
 
export default PRODUCTS;