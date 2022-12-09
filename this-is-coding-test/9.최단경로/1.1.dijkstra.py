start, end = 1, 6
data = [
    [1, 2, 2], [1, 3, 5], [1, 4, 1], [2, 3, 3], [2, 4, 2],
    [3, 2, 3], [3, 6, 5], [4, 3, 3], [4, 5, 1], [5, 3, 1], [5, 6, 2]
]
graph = [[] for i in range(end+1)]
print(graph)

visited = [False] * (end + 1)
# 1~6까지 직접 넣기 위해 +1 했음.
print(visited)

INFINITY = 987_654_321

distance = [INFINITY] * (end + 1)
# 각 노드 최단거리 초기화
print(distance)


# 그래프 초기화 함수
def init_graph (graph, data):
    for [start, end, distance] in data:
        graph[start].append((end, distance))

    return graph


graph = init_graph(graph, data)

print(graph)


# 최단 거리가 가장 짧은 노드 꺼내서 방문 처리
def get_smallest_node ():
    min_value = INFINITY
    index = 0

    for i in range(1, len(distance)):
        if distance[i] < min_value and not visited[i]:
            min_value = distance[i]
            index = i

    return index


# 최단 거리 찾는 함수
def dijkstra (start):
    distance[start] = 0
    visited[start] = True

    for init in graph[start]:
        (e, d) = init
        distance[e] = d

    for i in range(len(graph)-1):

        now = get_smallest_node()
        visited[now] = True

        for (e, d) in graph[now]:
            cost = distance[now] + d

            if distance[e] > cost:
                distance[e] = cost


dijkstra(start)

for i in range(1, len(distance)):
    print(i, distance[i])

