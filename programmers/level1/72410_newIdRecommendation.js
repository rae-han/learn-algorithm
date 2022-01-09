const solution = (new_id = '') => new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '')
    .replace(/^(.)$/, "$1$1$1")
    .replace(/^(.)(.)$/, "$1$2$2");