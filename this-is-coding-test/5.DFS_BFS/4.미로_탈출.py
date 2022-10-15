from collections import deque

# maze = "111111 000001 111111 100000 111111"
# maze = "101010 111111 000001 111111 111111"
maze = "11000111 01111101 00000011 11111010 10001110 11100000 11111111"
directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]


def to_matrix(str, row):
    data = [[]] * row

    for index, value in enumerate(str.split(' ')):
        data[index] = list(map(int, value))

    return data


def bfs(value):
    row, column = len(value.split(' ')), len(value.split(' ')[0])
    data = to_matrix(value, row)
    cost = [[0] * column for _ in range(row)]

    queue = deque([[0, 0]])
    cost[0][0] = 1

    while queue:
        [x, y] = queue.popleft()

        for [dx, dy] in directions:
            [nx, ny] = [x+dx, y+dy]
            if 0 <= nx < row and 0 <= ny < column and data[nx][ny]:
                next_cost = cost[x][y] + 1

                if cost[nx][ny] > next_cost or not cost[nx][ny]:
                    cost[nx][ny] = next_cost
                    queue.append([nx, ny])

        # break

    # print(cost)
    return cost[row-1][column-1]


print('minimum cost:', bfs(maze))
