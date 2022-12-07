number = 26

memory = [0] * 3001

for i in range(2, number+1):
    memory[i] = memory[i-1] + 1

    if i % 2 == 0:
        memory[i] = min(memory[i], memory[i//2]+1)

    if i % 3 == 0:
        memory[i] = min(memory[i], memory[i//3]+1)

    if i % 5 == 0:
        memory[i] = min(memory[i], memory[i//5]+1)


for i in range(2, number+1):
    print(i, memory[i])



