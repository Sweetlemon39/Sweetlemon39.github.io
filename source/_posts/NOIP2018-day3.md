---
layout: post
title: NOIP 2018 集训 Day 3
date: 2018-10-22
updated: 2018-10-22
katex: true
categories: 即时笔记
tags: [笔记, 图论]
---

## 图论

<!-- more -->

### 图的存储

- 邻接矩阵（$\text{O}(n^{2})$）  
- 邻接表（时间复杂度$\text{O}(n+m)$，空间复杂度$\text{O}(n^{2})$）  
- 邻接链表（$\text{O}(n+m)$）

### 图的遍历

#### $\text{bfs}$

计算无权图或树上最短路、求连通块比较实用。

输出路径可以用$\text{dis}$乱搞，也可以在松弛的时候记录路径上的上一个点（也可以叫做最短路径树上的父节点）。

输出字典序最小的路径，可以在反图上进行搜索，再根据字典序倒推路径的上一个点。

**$\text{printf}$输出技巧** `printf("%5d",x);`右对齐占$5$格，`printf("%-5d",x);`左对齐占$5$格。

#### [障碍路线](https://www.luogu.org/problemnew/show/P1649)

状态包含位置和朝向。

巧妙地设计转移坐标数组`turnx[]={0,1,0,-1};turny[]={1,0,-1,0};`，使向右转恰好是$+1 \pmod{4}$，左转恰好是$-1 \pmod{4}$。

为了使用$\text{bfs}$，要一次性将所有下一个转弯的位置加入队列中，搜到终点直接返回即可。

防止重复的要点：强制至少走一步，不允许原地转弯。

#### [最优贸易](https://www.luogu.org/problemnew/show/P1073)

~~强连通分量缩点+$\sout{\text{DAG}}$上$\sout{\text{dp}}$~~

纯$\text{bfs}$！厉害吧。

**注意到价格很小，考虑到按价格拆点。**

先去除所有不能到达$n$的点，可以在反图上$\text{bfs}$或$\text{dfs}$。

$\text{f}[i][j]$表示到达$i$时所经过的点的最低价为$j$能否实现。从起点开始进行$\text{bfs}$，对于遍历到的每个可能状态$\text{f}[i][j]$，用$\text{price}[i]-j$更新答案。如果发现了一个新的可能状态，就把它入队。

#### [关押罪犯](https://www.luogu.org/problemnew/show/P1525)

对答案二分，用$\text{bfs}$或$\text{dfs}$染色，自动过滤掉边权不大于答案的边。$\text{O}((n+m)\log c)$。

### $\text{DAG}$

#### [车站分级](https://www.luogu.org/problemnew/show/P1983)

直接拓扑排序边会过多，要添加**虚拟的中间点**，两个级别的车站连边时，上一级别的车站统一向虚拟点连边，再由虚拟点连向下一级别的车站。

这么做的原因是，题目给出的是$\forall (x,y) \in A \times B,x<y$这样的关系。

回忆我们解数学题时处理这样的条件的过程：$\forall x_{1}\in [a,b],\forall x_{2}\in [c,d],f(x_1)>g(x_2)$。我们可以把它转化为$f(x)$在$[a,b]$内的最小值大于$g(x)$在$[c,d]$内的最大值。

进行知识迁移，我们把信息转化为$\min(A)>\max(B)$。我们不妨设虚拟点的分级为$\frac{\min(A)+\max(B)}{2}$，则信息转化为，上一级别的所有车站的分级大于虚拟点的分级，下一级别所有车站的分级小于虚拟点的分级，这样这道题的难点就解决了。

### 最短路

#### $\text{SPFA}$优化
被称为$\text{SLF(Small label first)}$策略。若当前入队的顶点的$\text{dis}$比队头的$\text{dis}$小，就将这个点从队头插入；否则插入队尾。在随机图上表现得不错，但是在恶意构造出的数据上会表现出$\text{O}(2^n)$的复杂度~~，死得更惨~~。

#### [道路重建](https://www.luogu.org/problemnew/show/P3905)

考虑把已经有公路连接的点缩成同一个点，重新建图跑最短路即可。

其实不需要重新建图，把完好的公路的权值改为$0$即可。

#### [INGRED](https://www.luogu.org/problemnew/show/SP18187)

最暴力的方法是先用$\text{Floyd}$计算出任意两点间的最短路，再枚举两个人访问的特殊点，再枚举访问的顺序，更新答案即可。

比较好的方法是利用特殊点比较少的性质，从每个起点开始跑最短路。把每一个点的状态信息扩充，即把已经访问的特殊点记入点本身，或者说是“拆点”，把每一个点拆成$2^s$个，点$(x,\text{status})$表示到点$x$且状态为$\text{status}$的最短路。最后枚举两个人分别走过的特殊点，直接计算答案即可。这样之所以能带来速度提升，是因为它把前面暴力方法中连续枚举（即复杂度相乘）的访问顺序变成了分开枚举（复杂度相加）。

计算特殊的最短路时，拆点时很重要的技巧。如[飞行路线](https://www.luogu.org/problemnew/show/P4568)。