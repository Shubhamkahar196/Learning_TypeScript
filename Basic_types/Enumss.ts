//Enums 



// - Enums allow you to define a set of named values.
// - Enums are useful when you have a variable that can take on a limited number of possible values.


enum Color {
  Red,
  Green,
  Blue
}

let favoriteColor: Color = Color.Green;


enum UserRoles{
    Admin = "admin",
    GUEST = "guest",
    Super_admin = 'super_admin'
}

UserRoles.Admin

enum StatusCodes{
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 404"
}

StatusCodes.NOTFOUND