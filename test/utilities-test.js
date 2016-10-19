var test = require("tape");
var util = require("../src/utilities");

test("flatten", function(t) {
  t.plan(1);
  var multi = ["foo", ["bar", ["baz"]]];

  var actual = util.flatten(multi);

  t.deepEqual(actual, ["foo", "bar", "baz"]);
});

test("arrayUnique", function(t) {
  t.plan(1);
  var arr = ["foo", "foo"]

  var actual = util.arrayUnique(arr);

  t.deepEqual(actual, ["foo"]);
});

test("setter", function(t) {
  t.plan(1);
  var map = new Map();

  util.setter(map, "foo", "bar");

  t.deepEqual(map.foo, ["bar"]);
});

test("setter with existing key", function(t) {
  t.plan(1);
  var map = new Map();
  map.foo = ["bar"];

  util.setter(map, "foo", "baz");

  t.deepEqual(map.foo, ["bar", "baz"]);
});
