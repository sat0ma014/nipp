/* Generated by Opal 0.10.2 */
Opal.modules["time"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$strftime']);
  return (function($base, $super) {
    function $Time(){};
    var self = $Time = $klass($base, $super, 'Time', $Time);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2;

    Opal.defs(self, '$parse', TMP_1 = function ːparse(str) {
      var self = this;

      return new Date(Date.parse(str));
    }, TMP_1.$$arity = 1);

    return (Opal.defn(self, '$iso8601', TMP_2 = function ːiso8601() {
      var self = this;

      return self.$strftime("%FT%T%z");
    }, TMP_2.$$arity = 0), nil) && 'iso8601';
  })($scope.base, null)
};