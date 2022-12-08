input_data = [1, 3, 1, 5]
input_data_length = len(input_data)

d = [0] * 100

d[0] = input_data[0]
d[1] = max(input_data[0], input_data[1])

for i in range(2, input_data_length):
    d[i] = max(d[i-2] + input_data[i], d[i-1])

print(max(d[input_data_length-1], d[input_data_length]))
