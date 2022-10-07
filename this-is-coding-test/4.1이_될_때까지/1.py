n, k = map(int, input().split())
result = 0

while True:
    n, mod = (n // k), (n % k)
    print(n, mod)
    result += mod + 1

    if k > n:
        result += (mod - 1) if mod else mod
        break

print(result)







