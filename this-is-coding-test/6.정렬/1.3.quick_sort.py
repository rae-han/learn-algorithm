# data = [2, 0, 5, 1, 9, 8, 7, 3, 4, 6]
# data = [i for i in range(10)]
data = [i for i in range(10)][::-1]


def swap_data(array):
    pivot = 0 # 3. 맨 왼쪽 데이터를 피벗 값으로 정하고
    left_limit, right_limit = 1, len(array) - 1 # 3. 왼쪽, 오른쪽 끝 인덱스를 기억해둔다.
    left_index, right_index = left_limit, right_limit # 3. 그리고 탐색을 시작할 왼쪽, 오른쪽 인덱스를 정해준다.

    while left_index <= right_index: # 4. 왼쪽 인덱스가 오른쪽 인덱스보다 오른쪽에 위치할 때까지 반복한다.

        # 5. 왼쪽 인덱스 값이 피벗 값 보다 클 때 까지 오른쪽으로 탐색을 해준다.
        # 5. 탐색 범위는 오른쪽 끝 인덱스 까지다.
        # 5. 인덱스와 한계 값을 먼저 비교하는 이유는 숫자가 오름차순 일 때 인덱스는 9 까지지만 10을 접근하는 경우를 막기 위해서다.
        while left_index <= right_limit and array[pivot] > array[left_index]:
            left_index += 1

        # 6. 오른쪽 인덱스 값이 피벗 값 보다 작을 때 까지 왼쪽으로 탐색을 해준다.
        # 6. 탐색 범위는 왼쪽 끝 인덱스 까지다.
        while right_index >= left_limit and array[pivot] < array[right_index]:
            right_index -= 1

        print(left_index, right_index)
        # 7. 만약 두 인덱스가 서로 교차 했다면 오른쪽 인덱스에 있는 값과 피벗 값을 바꿔준다.
        # 7. 오른쪽 인덱스에 있는 작은 값과 바꾸는 이유는 피벗 값이 왼쪽에 있기 때문이다.
        if left_index > right_index:
            array[pivot], array[right_index] = array[right_index], array[pivot]
        # 8.두 인덱스가 교차하지 않았다면 왼쪽 인덱스와 오른쪽 인덱스에 있는 값을 서로 바꿔준다.
        else:
            array[left_index], array[right_index] = array[right_index], array[left_index]

    return [array, right_index]


def quick_sort(array):
    # 1. 데이터가 없거나 1개라면 정렬을 할 필요가 없으므로 바로 리턴한다.
    if len(array) <= 1:
        return array

    # 2. 데이터가 2개 이상이라면 정렬을 해준다.
    [swapped_array, pivot] = swap_data(array)

    # [left_array, right_array] = [
    #     [v for v in swapped_array if v < pivot],
    #     [v for v in swapped_array if v > pivot],
    # ]
    left_array, right_array = swapped_array[:pivot], swapped_array[pivot+1:]
    print(left_array, right_array)

    # if len(left_array) == 0 or len(right_array) == 0:
    #     return quick_sort(left_array) + [pivot] if len(left_array) != 0 else [pivot] + quick_sort(right_array)

    return quick_sort(left_array) + [swapped_array[pivot]] + quick_sort(right_array)


print(quick_sort(data))


# def swap_data(array):
#     pivot = 0
#     [left_limit, right_limit] = [1, len(array) - 1]
#     [left_index, right_index] = [left_limit, right_limit]
#     print(1, pivot, left_index, right_index)
#
#     while left_index <= right_index:
#         print(12, left_index, right_limit, right_index)
#         while left_index <= right_limit and array[pivot] >= array[left_index]:
#             left_index += 1
#
#         while right_index > left_limit and array[pivot] <= array[right_index]:
#             right_index -= 1
#
#         # print('before swap', array[left_index], array[right_index], left_index, right_index)
#
#         if left_index > right_index:
#             array[pivot], array[right_index] = array[right_index], array[pivot]
#         else:
#             array[left_index], array[right_index] = array[right_index], array[left_index]
#
#         # print('after swap', array[left_index], array[right_index], left_index, right_index)
#
#         print(array)
#
#     return [left_index, array]
#
#
# def quick_sort(array):
#     if len(array) <= 1:
#         return array
#
#     [index, array] = swap_data(array)
#     print(index, array)
#     left_array, right_array = [v for v in array if v < (index - 1)], [v for v in array if v > index]
#     print(123, right_array, left_array)
#
#     print(1234, quick_sort(left_array) + [index] + quick_sort(right_array))
#     return quick_sort(left_array) + [index] + quick_sort(right_array)
#
#
# print(quick_sort(data))



