# n = int(input())
# plans = input().split()
n = 5
plans = ['R', 'R', 'R', 'U', 'D', 'D']
x, y = 1, 1

# direction = dict()
# [direction['U'], direction['D'], direction['L'], direction['R']] = [[-1, 0], [1, 0], [0, -1], [0, 1]]
direction = {
    'U': [-1, 0],
    'D': [1, 0],
    'L': [0, -1],
    'R': [0, 1],
}

for plan in plans:
    [dx, dy] = direction[plan]
    [nx, ny] = [x+dx, y+dy]

    if 1 <= nx <= n and 1 <= ny <= n:
        x, y = nx, ny

print(x, y)


