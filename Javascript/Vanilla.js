var url = "https://cc.codzestage.ml/api/users/org_users?page_count=100";
var token = "JWT " + window.localStorage.getItem("token");
var req_body = [];
fetch(url, {
  headers: {
    Authorization: token
  }
})
  .then(function(response) {
    return response.json();
  })
  .then(function(contents) {
    console.log(contents);
    m = contents.data;
    m.forEach(function(element) {
      var i = {
        label: element.first_name + " " + element.last_name,
        value: element.email
      };
      req_body.push(i);
    });
    instance.setItems(req_body);
  });
