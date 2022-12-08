target = 23
money = [2, 3, 4]
# money = [2]

d = [target] * (target+1)

d[0] = 0

for m in money:
    for i in range(0, len(d)+1):
        if i+m <= target:
            d[i+m] = min(d[i+m], d[i]+1)

print(d[target])


