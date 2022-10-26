parts = [8, 3, 7, 9, 2]
requests = [5, 7, 9]
YES, NO = 'yes', 'no'


def binary_search_recursion(parts, target, start=0, end=None):
    end = (len(parts) - 1) if end is None else end
    if start > end:
        return NO

    middle = int((start + end) / 2)

    return YES if parts[middle] == target else (
        binary_search_recursion(parts, target, middle+1, end) if target > parts[middle]
        else binary_search_recursion(parts, target, start, middle-1)
    )


def object_search(parts, requests):
    dic = dict()
    result = []

    for part in parts:
        dic[part] = (dic[part] + 1) if part in dic else 1

    for req in requests:
        result.append(YES if req in dic else NO)

    return result


def search_parts(parts, requests):
    sorted_parts = sorted(parts)
    result = []

    for request in requests:
        result.append(binary_search_recursion(sorted_parts, request))

    print(result)

    print(object_search(parts, requests))


search_parts(parts, requests)

