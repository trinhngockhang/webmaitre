import _ from 'lodash';

export var shouldUpdate = function(x, y) {
    return !_(x).differenceWith(y, _.isEqual).isEmpty();
};
  