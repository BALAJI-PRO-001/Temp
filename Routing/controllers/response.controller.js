
function getMethodHandler(req, res) {
  res.json({
    method: "GET"
  });
}

function postMethodHandler(req, res) {
  res.json({
    method: "POST"
  });
}

function patchMethodHandler(req, res) {
  res.json({
    method: "PATCH"
  });
}

function deleteMethodHandler(req, res) {
  res.json({
    method: "DELETE"
  });
}

module.exports = {
  getMethodHandler,
  postMethodHandler,
  patchMethodHandler,
  deleteMethodHandler
};