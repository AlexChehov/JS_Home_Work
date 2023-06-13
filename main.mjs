
// MVC

// M - model
// V - view
// C - controller

import { UserView } from "./user/view.mjs";

const user = new UserView("AUDI", 2003, "Kyiv");
user.render(0);

const user2 = new UserView("BMW", 2023, "LVIV");
user2.render(1);