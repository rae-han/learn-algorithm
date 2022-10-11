# 배열의 크기 N, 숫자가 더해지는 횟수 M, 최대 연속되게 더해질수 있는 횟수 K

# n, m, k = map(int, input().split())
# data = list(map(int, input().split()))
n, m, k = 5, 8, 3
data = [2, 4, 5, 4, 6]
answer = 0
result = 46

data = sorted(data, key=lambda x: -x)
# data = sorted(data, reverse=True)

first = data[0]
second = data[1]

mod = m % (k+1)

answer += (first * k + second)*(m/(k+1)) + first * mod

print(int(answer))
