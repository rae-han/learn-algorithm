const testcases = [
  { nums: [2, 1, 3], k: 4, result: 3 },
  { nums: [3, 3, 5, 5], k: 7, result: 10 },
]

// 배열 nums 정수 k가 주어지면, nums로 만들 수 있는 sub-array의 합계 중
// k번째로 작은 하위 배열의 합계 값을 반환하세요.

// sub-array는 배열에서 비어 있지 않은 연속적인 시퀀스로 정의됩니다.
// sub-array 합계는 하위 배열에 있는 모든 요소의 합계입니다.

const solution = ({nums, k, result}) => {
  let sequence = nums;
  let prevDepthSeq = nums;

  for (let i=1; i<=prevDepthSeq.length; i++) {
    prevDepthSeq = prevDepthSeq.reduce((acc, cur, idx) => {
      if (nums[idx+i]) {
        acc.push(cur+nums[idx+i]);
      }
      return acc;
    }, [])

    sequence = [...sequence, ...prevDepthSeq]
  }

  const sortedSequence = sequence.sort((a, b) => a-b)
  console.log(sortedSequence[k-1] === result)
}

testcases.forEach(testcase => solution(testcase));