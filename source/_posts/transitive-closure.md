---
layout: post
title: 传递闭包
date: 2018-10-16
updated: 2018-10-16
katex: true
categories: 算法浅解
tags: [算法浅解, 图论, floyd]
---

#### 什么叫传递闭包
“传递闭包”这个名字听起来很吓人，其实它不难理解。

给定一个有向图$G$，那么“传递闭包”就是指“图上一点$i$能否到达另一点$j$”。

<!-- more -->

“传递”二字概括了“传递闭包”的意义：描述具有传递性的性质，比如小于关系具有传递性、两非零向量平行（或线性相关）具有传递性，等等。

#### $\text{Floyd}$求传递闭包
$\text{Floyd}$是极其著名的最短路算法。既然是最短路算法，那就也可以用来求传递闭包。

使用时要把图存在邻接矩阵里。另外要注意循环顺序是$k,i,j$。

时间复杂度$\text{O}(n^3)$。

```cpp
void floyd(void){
    for (int k=1;k<=n;k++)
        for (int i=1;i<=n;i++)
            for (int j=1;j<=n;j++)
                if (g[i][k] && g[k][j])
                    g[i][j]=1;
}
```

#### $\text{Floyd}$判环
这是很懒的一种做法，只需求一遍传递闭包，然后看一看有没有自环既可。

时间复杂度$\text{O}(n^3)$。（当然，用$\text{dfs}$可以$\text{O}(n+m)$，只不过码量稍稍大一点。）

```cpp
bool floyd(void){
    //Return 1 if circles exist.
    for (int k=1;k<=n;k++)
        for (int i=1;i<=n;i++)
            for (int j=1;j<=n;j++)
                if (g[i][k] && g[k][j])
                    g[i][j]=1;
    for (int i=1;i<=n;i++)
        if (g[i][i])
            return 1;
    return 0;
}
```