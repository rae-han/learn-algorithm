purpose = 6
# tteok = [19, 15, 10, 17]
tteok = [19, 15, 10, 18]


def solution_stack(target, list, start=0, end=None):
    end = max(list) if end is None else end
    cut_line = int((start+end)/2)
    result = 0

    for item in list:
        length = item - cut_line
        result += length if length >= 0 else 0

    print('start:', start, 'end:', end, 'cut_line:', cut_line, 'target:', target, 'result:', result)

    return cut_line if target == result else (
        solution_stack(target, list, cut_line+1, end) if result > target
        else solution_stack(target, list, start, cut_line-1)
    )


# answer_stack = solution_stack(purpose, tteok)
# print(answer_stack)


def solution_queue(target, list):
    start, end = 0, max(list)
    result = None
    test_count, test_limit = 0, 10

    while start < end:
        print(test_count)
        test_count += 1

        cut_line = int((start+end)/2)
        total_quantity = 0


        for item in list:
            length = item - cut_line
            total_quantity += length if length >= 0 else 0

        if total_quantity > target:
            start = cut_line + 1
            result = cut_line
        elif total_quantity < target:
            end = cut_line - 1
        else:
            return cut_line
            break

    return result


answer_queue = solution_queue(purpose, tteok)
print(answer_queue)
