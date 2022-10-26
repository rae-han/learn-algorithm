parts = [8, 3, 7, 9, 2]
requests = [5, 7, 9]
YES, NO = 'yes', 'no'


def binary_search(parts, target, start=0, end=None):
    end = (len(parts) - 1) if end is None else end

    if start > end:
        return NO

    middle = int((start + end) / 2)

    return YES if parts[middle] == target else (
        binary_search(parts, target, middle+1, end) if target > parts[middle]
        else binary_search(parts, target, start, middle-1)
    )


def search_parts(parts, requests):
    sorted_parts = sorted(parts)
    result = []

    for index in range(len(requests)):
        result.append(binary_search(sorted_parts, requests[index]))

    print(result)


search_parts(parts, requests)

