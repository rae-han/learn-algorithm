data = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 16, 20, 24]
target = 6


def binary_search(array, target, start=0, end=None):
    end = end if end else (len(array) - 1)

    middle = int((start+end)/2)

    return middle if target == array[middle] else (
        binary_search(array, target, middle+1, end) if target > array[middle]
        else binary_search(array, target, start, middle-1)
    )


result = binary_search(data, target)
print(result)

