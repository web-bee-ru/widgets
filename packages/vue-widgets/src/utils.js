import classnames from 'classnames';

export function classesWithPrefix(prefix, cls) {
  return classnames(cls)
    .split(' ')
    .filter(name => !!name)
    .map(cl => prefix + cl)
    .join(' ');
}
