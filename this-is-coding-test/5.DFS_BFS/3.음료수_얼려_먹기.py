# mold = '00110 00011 11111 00000'
mold = '00000111100000 11111101111110 11011101101110 11011101100000 11011111111111 11011111111100 11000000011111 01111111111111 00000000011111 01111111111000 00011111111000 00000001111000 11111111110011 11100011111111 11100011111111'


def to_matrix(str, row):
    data = [[]] * row

    for index, value in enumerate(str.split(' ')):
        data[index] = list(map(int, value))

    return data


def dfs(data, x, y):
    # exception case: out of range
    if 0 > x or x > (len(data) - 1) or 0 > y or y > (len(data[0]) - 1):
        return False

    # case: empty data
    if not data[x][y]:
        data[x][y] = 1

        dfs(data, x-1, y)
        dfs(data, x, y-1)
        dfs(data, x+1, y)
        dfs(data, x, y+1)

        return True

    # exception case: not empty data
    return False


def exhaustive_search(value):
    row, column = len(value.split(' ')), len(value.split(' ')[0])
    data = to_matrix(value, row)
    count = 0

    for x in range(row):
        for y in range(column):
            count += 1 if dfs(data, x, y) else 0

    return count


result = exhaustive_search(mold)
print(result)
