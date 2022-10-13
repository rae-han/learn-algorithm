graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
]
visited = [False] * len(graph)
routes = []


def dfs(graph, visited, routes, v):
    visited[v] = True

    routes.append(v)

    for i in graph[v]:
        if not visited[i]:
            routes = dfs(graph, visited, routes, v)

    return routes


routes = dfs(graph, visited, routes, 1)
print(routes)


