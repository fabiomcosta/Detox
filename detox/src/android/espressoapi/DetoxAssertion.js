/**

	This code is generated.
	For more information see generation/README.md.
*/


function sanitize_viewInteraction(value) {
  return typeof value === 'function' ? value() : value;
} 
function sanitize_matcher(matcher) {
  const originalMatcher = typeof matcher._call === 'function' ? matcher._call() : matcher._call;
  return originalMatcher.type ? originalMatcher.value : originalMatcher;
} 
class DetoxAssertion {
  static assertMatcher(i, m) {
    if ((typeof m !== 'object' || typeof m.constructor !== 'function' || m.constructor.name.indexOf('Matcher') === -1) && (typeof m !== 'object' || m.type !== 'Invocation' || typeof m.value !== 'object' || typeof m.value.target !== 'object' || m.value.target.value.indexOf('Matcher') === -1)) {
      const isObject = typeof m === 'object';
      const additionalErrorInfo = isObject ? typeof m.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + m.constructor.name + '"' : 'it is no object';
      throw new Error('m should be an instance of Matcher, got "' + m + '", it appears that ' + additionalErrorInfo);
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "assertMatcher",
      args: [{
        type: "Invocation",
        value: sanitize_viewInteraction(i)
      }, {
        type: "Invocation",
        value: sanitize_matcher(m)
      }]
    };
  }

  static assertNotVisible(i) {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "assertNotVisible",
      args: [{
        type: "Invocation",
        value: sanitize_viewInteraction(i)
      }]
    };
  }

  static assertNotExists(i) {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "assertNotExists",
      args: [{
        type: "Invocation",
        value: sanitize_viewInteraction(i)
      }]
    };
  }

  static waitForAssertMatcher(i, m, timeoutSeconds) {
    if ((typeof m !== 'object' || typeof m.constructor !== 'function' || m.constructor.name.indexOf('Matcher') === -1) && (typeof m !== 'object' || m.type !== 'Invocation' || typeof m.value !== 'object' || typeof m.value.target !== 'object' || m.value.target.value.indexOf('Matcher') === -1)) {
      const isObject = typeof m === 'object';
      const additionalErrorInfo = isObject ? typeof m.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + m.constructor.name + '"' : 'it is no object';
      throw new Error('m should be an instance of Matcher, got "' + m + '", it appears that ' + additionalErrorInfo);
    }

    if (typeof timeoutSeconds !== "number") throw new Error("timeoutSeconds should be a number, but got " + (timeoutSeconds + (" (" + (typeof timeoutSeconds + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "waitForAssertMatcher",
      args: [{
        type: "Invocation",
        value: sanitize_viewInteraction(i)
      }, {
        type: "Invocation",
        value: sanitize_matcher(m)
      }, {
        type: "Double",
        value: timeoutSeconds
      }]
    };
  }

  static waitForAssertMatcherWithSearchAction(i, m, searchMatcher) {
    if ((typeof m !== 'object' || typeof m.constructor !== 'function' || m.constructor.name.indexOf('Matcher') === -1) && (typeof m !== 'object' || m.type !== 'Invocation' || typeof m.value !== 'object' || typeof m.value.target !== 'object' || m.value.target.value.indexOf('Matcher') === -1)) {
      const isObject = typeof m === 'object';
      const additionalErrorInfo = isObject ? typeof m.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + m.constructor.name + '"' : 'it is no object';
      throw new Error('m should be an instance of Matcher, got "' + m + '", it appears that ' + additionalErrorInfo);
    }

    if ((typeof searchMatcher !== 'object' || typeof searchMatcher.constructor !== 'function' || searchMatcher.constructor.name.indexOf('Matcher') === -1) && (typeof searchMatcher !== 'object' || searchMatcher.type !== 'Invocation' || typeof searchMatcher.value !== 'object' || typeof searchMatcher.value.target !== 'object' || searchMatcher.value.target.value.indexOf('Matcher') === -1)) {
      const isObject = typeof searchMatcher === 'object';
      const additionalErrorInfo = isObject ? typeof searchMatcher.constructor === 'object' ? 'the constructor is no object' : 'it has a wrong class name: "' + searchMatcher.constructor.name + '"' : 'it is no object';
      throw new Error('searchMatcher should be an instance of Matcher, got "' + searchMatcher + '", it appears that ' + additionalErrorInfo);
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "waitForAssertMatcherWithSearchAction",
      args: [{
        type: "Invocation",
        value: sanitize_viewInteraction(i)
      }, {
        type: "Invocation",
        value: sanitize_matcher(m)
      }, {
        type: "Invocation",
        value: sanitize_matcher(searchMatcher)
      }]
    };
  }

}

module.exports = DetoxAssertion;