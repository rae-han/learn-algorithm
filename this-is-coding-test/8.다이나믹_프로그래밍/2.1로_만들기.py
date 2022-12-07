number = 26

memory = [0] * 3001

for i in range(2, number):
    memory[i] = memory[i-1] + 1

    if i % 2 == 0:
        memory[i] = min(memory[i])



