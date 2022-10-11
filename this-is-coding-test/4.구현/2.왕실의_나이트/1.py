matrix = input()
row = int(matrix[1])
column = ord(matrix[0]) - ord('a') + 1

move_cases = [
    [1, 2], [-1, 2], [1, -2], [-1, -2],
    [2, 1], [-2, 1], [2, -1], [-2, -1],
]
count = 0

for move_case in move_cases:
    [move_row, move_column] = move_case
    next_row = row + move_row
    next_column = column + move_column

    if 1 <= next_row <=8 and 1<= next_column <= 8:
        count += 1

print(count)



