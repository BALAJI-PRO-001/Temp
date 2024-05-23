
function homePage(req, res) {
  res.send("<h1> Method: GET Response: Home Page </h1>");
}

function aboutPage(req, res) {
  res.send("<h1> Method: POST Response: About Page </h1>");
}

function contactPage(req, res) {
  res.send("<h1> Method: PATCH Response: Contact Page </h1>");
}

function errorPage(req, res) {
  res.send("<h1> Method: DELETE Response: Error Page </h1>");
}

module.exports = {
  homePage: homePage,
  aboutPage: aboutPage,
  contactPage: contactPage,
  errorPage: errorPage
};