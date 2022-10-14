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


def dfs(graph, visited, routes, value):
    visited[value] = True

    routes.append(value)

    for node in graph[value]:
        if not visited[node]:
            routes = dfs(graph, visited, routes, node)

    return routes


routes = dfs(graph, visited, routes, 1)
print(routes)


