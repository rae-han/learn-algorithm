from collections import deque

maze = "111111 000001 111111 100000 111111"
directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]


def to_matrix(str, row):
    data = [[]] * row

    for index, value in enumerate(str.split(' ')):
        data[index] = list(map(int, value))

    return data


def bfs(value):
    row, column = len(value.split(' ')), len(value.split(' ')[0])
    data = to_matrix(value, row)
    costs = [[0] * column for _ in range(row)]

    queue = deque([[0, 0]])
    cost = 1
    costs[0][0] = cost

    while queue:
        cost += 1
        [cx, cy] = queue.popleft()

        for [dx, dy] in directions:
            [nx, ny] = [cx+dx, cy+dy]
            if 0 <= nx < row and 0 <= ny < column:
                
                queue.append([nx, ny])

            print(queue)

        break


print(bfs(maze))
