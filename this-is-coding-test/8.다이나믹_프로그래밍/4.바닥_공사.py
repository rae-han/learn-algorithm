tile_length = 3

d = [0] * 100
[d[0], d[1]] = [1, 3]

for i in range(2, tile_length):
    d[i] = d[i-1] + d[i-2]*2

for i in range(0, tile_length):
    print(i, d[i])

print(d[tile_length-1])
