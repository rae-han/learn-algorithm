a = [1, 2, 5, 4, 3]
b = [5, 5, 6, 6, 5]
limit = 3

sorted_a = sorted(a)
sorted_b = sorted(b, reverse=True)

print(sorted_a, sorted_b)

for index in range(limit):
    if sorted_b[index] > sorted_a[index]:
        sorted_a[index], sorted_b[index] = sorted_b[index], sorted_a[index]
    else:
        break

print(sum(sorted_a))



