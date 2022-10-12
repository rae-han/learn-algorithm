# 0: 북
# 1: 동
# 2: 남
# 3: 서
direction = 0
[x, y] = [1, 1]
directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

# size = 4
# landmark = [
#     [1, 1, 1, 1],
#     [1, 0, 0, 1],
#     [1, 1, 0, 1],
#     [1, 1, 1, 1],
# ]
size = 5
landmark = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1]
]

visited = [[0] * size for _ in range(size)]
visited[x][y] = 1

count = 1
turn_number = 0


def show_position(x, y):
    land = [['O'] * size for _ in range(size)]
    land[x][y] = 'X'

    for row in land:
        print(row)


while True:
    direction = ((direction - 1) % 4)
    turn_number += 1

    [dx, dy] = directions[direction]
    [nx, ny] = [x + dx, y + dy]

    if landmark[nx][ny] == 0 and visited[nx][ny] == 0:
        count += 1
        turn_number = 0
        visited[nx][ny] = 1
        [x, y] = [nx, ny]
        print('front', x, y)
        show_position(x, y)

    if turn_number == 4:
        rear = (direction - 2) % 4
        [dx, dy] = directions[rear]
        [rx, ry] = [x + dx, y + dy]
        print('rear', rx, ry)

        if landmark[rx][ry] == 0:
            turn_number = 0
            [x, y] = [rx, ry]
            show_position(x, y)
            continue

        print(count)
        break







