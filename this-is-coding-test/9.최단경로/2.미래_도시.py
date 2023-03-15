node_count, main_count = 5, 7
data = [[1, 2], [1, 3], [1, 4], [2, 4], [3, 4], [3, 5], [4, 5]]
targets = [4, 5]
INFINITY = 987654321
graph = [[INFINITY] * (node_count+1) for _ in range(node_count+1)]


def show_graph(graph):
    graph = graph[1:]
    for index, row in enumerate(graph):
        print(row[1:])


for i in range(len(graph)):
    graph[i][i] = 0

show_graph(graph)

for [x, y] in data:
    graph[x][y] = 1
    graph[y][x] = 1

show_graph(graph)

for n in range(1, len(graph)):
    for x in range(1, len(graph)):
        for y in range(1, len(graph)):
            graph[x][y] = min(graph[x][y], graph[x][n]+graph[n][y])

show_graph(graph)

print(graph[1][targets[1]] + graph[targets[1]][targets[0]])



