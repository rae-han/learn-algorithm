target = 10

def fibonacci(x):
    if x == 1 or x == 2:
        return 1

    return fibonacci(x - 1) + fibonacci(x - 2)


print(fibonacci(target))


# top-down - 메모제이션은 탑다운 방식에 국한돼서 사용
d = [0] * 100


def fibonacci(x):
    if x == 1 or x == 2:
        return 1
    if d[x] != 0:
        return d[x]

    d[x] = fibonacci(x - 1) + fibonacci(x - 2)
    return d[x]


print(fibonacci(target))


# bottom-up - 다이나믹 프로그래밍의 전형적인 형태
d = [0] * 100


def fibonacci(x):
    d[1], d[2] = 1, 1

    for i in range(3, x+1):
        d[i] = d[i - 1] + d[i - 2]

    return d[x]


print(fibonacci(target))




