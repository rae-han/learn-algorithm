node_count = 4
main_count = 7
INFINITY = 987_654_321

data = [
    [1, 2, 4],
    [1, 4, 6],
    [2, 1, 3],
    [2, 3, 7],
    [3, 1, 5],
    [3, 4, 4],
    [4, 3, 2],
]

# 초기화
graph = [[INFINITY] * (node_count + 1) for _ in range(node_count + 1)]


def show_graph(graph):
    graph = graph[1:]
    for index, row in enumerate(graph):
        print(row[1:])


# 자기자신은 0으로 초기화
for i in range(1, node_count+1):
    graph[i][i] = 0

for [start, end, cost] in data:
    graph[start][end] = cost

show_graph(graph)

for n in range(1, node_count+1):
    for i in range(1, node_count+1):
        for j in range(1, node_count+1):
            graph[i][j] = min(graph[i][j], graph[i][n] + graph[n][j])

show_graph(graph)




