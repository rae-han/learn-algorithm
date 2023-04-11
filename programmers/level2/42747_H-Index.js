function* Lazy(cs) {
  const sorted = cs.sort((a, b) => b - a);
  let i = 0;

  while (i < sorted[i]) {
    yield sorted[i++];
  }
}

function solution(citations) {
  // 방법 1.
  // return citations.sort((a, b) => b - a).findIndex((c, i) => (c <= i));

  // 방법 2. 이터레이터 사용.
  const it = Lazy(citations);
  const result = [...it]

  return result.length !== 1 ? result.length : result.at(-1);
}
