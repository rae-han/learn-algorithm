start, end = 1, 6
data = [
    [1, 2, 2], [1, 3, 5], [1, 4, 1], [2, 3, 3], [2, 4, 2],
    [3, 2, 3], [3, 6, 5], [4, 3, 3], [4, 5, 1], [5, 3, 1], [5, 6, 2]
]
graph = [[] for i in range(end+1)]
visited = [False] * (end + 1)
INFINITY = 987_654_321

distance = [INFINITY] * (end + 1)

for [start, end, cost] in data:
    graph[start].append([end, cost])

visited[start] = True
for [end, cost] in graph[start]:
    distance[end] = cost

for _ in range(end):
    index = 0
    min_value = INFINITY

    for i in distance[1:]:
        print(i)



