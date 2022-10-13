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


def bfs(graph, visited, routes, start):
    queue = deque([start])
    visited[start] = True

    


bfs(graph, visited, routes, 1)

