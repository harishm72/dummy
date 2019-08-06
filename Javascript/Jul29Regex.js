let routes = ['/users', '/users/edit', '/users/edit/1234']

console.log(routes.some(route => {
    return route.match(/\/users\/edit\/\//)
}))