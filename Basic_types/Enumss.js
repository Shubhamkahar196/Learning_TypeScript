"use strict";
//Enums 
// - Enums allow you to define a set of named values.
// - Enums are useful when you have a variable that can take on a limited number of possible values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["Super_admin"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.Admin;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.NOTFOUND;
