data = [2, 0, 5, 1, 9, 8, 7, 3, 4, 6]


def swap_data(array):
    pivot = 0
    left_limit, right_limit = 1, len(array) - 1
    left_index, right_index = left_limit, right_limit

    while left_index < right_index:
        print('limit', left_limit, right_limit, 'index', left_index, right_index)
        print('before swapping array', array)

        while array[pivot] > array[left_index] and left_index <= right_limit:
            left_index += 1

        while array[pivot] < array[right_index] and right_index > left_limit:
            right_index -= 1

        if left_index > right_index:
            array[pivot], array[right_index] = array[right_index], array[pivot]
        else:
            array[left_index], array[right_index] = array[right_index], array[left_index]

        print('after swapping array', array)

    return [array, array[right_index]]


def quick_sort(array):
    print('array:', array)

    if len(array) <= 1:
        return array

    [swapped_array, pivot] = swap_data(array)
    print('swapped array:', swapped_array, ' / pivot:', pivot)

    [left_array, right_array] = [
        [v for v in array if v < pivot],
        [v for v in array if v > pivot],
    ]

    if len(left_array) == 0 or len(right_array) == 0:
        return left_array + [pivot] if len(left_array) != 0 else [pivot] + right_array

    return quick_sort(left_array) + [pivot] + quick_sort(right_array)


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



