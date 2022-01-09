function solution(new_id = '') {
  const answer = new_id
    .toLowerCase()
    .replace(/\w-./g, '')
    .replace(/[.]+/g, '.')
    .replace(/^\.|\.$/, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '')

  return answer.length>=3 ? answer : answer.padEnd(3, answer[answer.length-1]);
}