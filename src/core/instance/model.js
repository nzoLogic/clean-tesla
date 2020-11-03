const Instance = {
  getInstanceStartTime: instance => get(instance)('startTime')
}

function get(obj) {
  return function(prop) {
    return obj[prop]
  }
}

export default Instance;