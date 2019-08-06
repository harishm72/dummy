const configRoutes = [
    "/users",
    "/location",
    "/users/create",
    "/location/create",
    "/department",
    "/department/create",
    "/groups",
    "/groups/create",
    "/users/edit/:id",
    "/department/edit/:id",
    "/location/edit/:id",
    "/groups/edit/:id",
    "/smtp",
    "/themes",
    "/view",
    "/portals",
    "/contents"
  ];

  let path = "users/edit/123";

console.log(configRoutes.some(route => route.includes(path)))