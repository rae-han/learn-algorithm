n, m = map(int, input().split())

# matrix = [[0] * m for _ in range(n)]
result = 0

for i in range(n):
    row_data = list(map(int, input().split()))
    min_value = min(row_data)
    result = max(result, min_value)

print(result)

