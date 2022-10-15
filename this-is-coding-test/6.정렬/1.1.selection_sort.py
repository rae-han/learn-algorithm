data = [0, 2, 5, 1, 9, 8, 7, 3, 4, 6]


def selection_sort(array):
    length = len(array)
    for index in range(length):
        min_index = index

        for pointer in range(index+1, length):
            if data[min_index] > data[pointer]:
                min_index = pointer

        array[index], array[min_index] = array[min_index], array[index]

    return array


print(selection_sort(data))
