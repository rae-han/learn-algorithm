purpose = 6
tteok = [19, 15, 10, 17]


def solution(target, list, start=0, end=None):
    end = max(list) if end is None else end
    cut_line = int((start+end)/2)
    result = 0

    for item in list:
        length = item - cut_line
        result += length if length >= 0 else 0

    print('start:', start, 'end:', end, 'cut_line:', cut_line, 'target:', target, 'result:', result)

    return cut_line if target == result else (
        solution(target, list, cut_line+1, end) if result > target
        else solution(target, list, start, cut_line-1)
    )


answer = solution(purpose, tteok)
print(answer)
