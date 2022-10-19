data = [0, 2, 5, 1, 9, 8, 7, 3, 4, 6]


def insertion_sort(array):
    length = len(array)

    for index in range(1, length):
        for pointer in range(index, 0, -1):
            if array[pointer - 1] > array[pointer]:
                array[pointer - 1], array[pointer] = array[pointer], array[pointer -1]
            else:
                break

    return array


print(insertion_sort(data))
