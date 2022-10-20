data = [6, 2, 8, 9, 7, 5, 3, 1, 1, 2, 4, 8, 0]


def counting_sort(array):
    counts = [0 for _ in range(max(array) + 1)]
    result = []

    for i in data:
        print(data[i])
        counts[i] += 1

    for index, count in enumerate(counts):
        print(index,count)
        result += [index for _ in range(count)]

    return result


print(counting_sort(data))






