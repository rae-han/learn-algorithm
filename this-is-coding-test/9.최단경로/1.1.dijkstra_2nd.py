start, end = 1, 6
data = [
    [1, 2, 2], [1, 3, 5], [1, 4, 1], [2, 3, 3], [2, 4, 2],
    [3, 2, 3], [3, 6, 5], [4, 3, 3], [4, 5, 1], [5, 3, 1], [5, 6, 2]
]
graph = [[] for i in range(end+1)]
visited = [False] * (end + 1)
INFINITY = 987_654_321

distance = [INFINITY] * (end + 1)

for [s, e, c] in data:
    graph[s].append([e, c])

visited[start] = True
distance[start] = 0
for [e, c] in graph[start]:
    distance[e] = c

for _ in range(end):
    index = 0
    min_value = INFINITY

    for i in range(len(distance)):
        if min_value > distance[i] and not visited[i]:
            index = i
            min_value = distance[i]

    visited[index] = True

    for [e, c] in graph[index]:
        if distance[e] > (distance[index] + c):
            distance[e] = distance[index] + c

print(distance)



