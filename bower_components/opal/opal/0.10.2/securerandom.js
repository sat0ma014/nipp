/* Generated by Opal 0.10.2 */
Opal.modules["securerandom"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$gsub']);
  return (function($base) {
    var $SecureRandom, self = $SecureRandom = $module($base, 'SecureRandom');

    var def = self.$$proto, $scope = self.$$scope, TMP_2;

    Opal.defs(self, '$uuid', TMP_2 = function ːuuid() {
      var $a, $b, TMP_1, self = this;

      return ($a = ($b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").$gsub, $a.$$p = (TMP_1 = function(ch){var self = TMP_1.$$s || this;
if (ch == null) ch = nil;
      
        var r = Math.random() * 16 | 0,
            v = ch == "x" ? r : (r & 3 | 8);

        return v.toString(16);
      }, TMP_1.$$s = self, TMP_1.$$arity = 1, TMP_1.$$has_trailing_comma_in_args = true, TMP_1), $a).call($b, /[xy]/);
    }, TMP_2.$$arity = 0)
  })($scope.base)
};