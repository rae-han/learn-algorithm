from collections import deque

graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]
visited = [False] * len(graph)
routes = []


def bfs(graph, visited, routes, init):
    queue = deque([init])
    visited[init] = True

    while len(queue):
        next = queue.popleft()
        routes.append(next)

        for i in graph[next]:
            if not visited[i]:
                visited[i] = True
                queue.append(i)

    return routes


routes = bfs(graph, visited, routes, 1)
print(routes)

