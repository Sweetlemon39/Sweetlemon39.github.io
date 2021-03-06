---
layout: post
title: CSP 2019 集训 字符串和树
date: 2019-11-10
updated: 2019-11-14
katex: true
categories: 即时笔记
tags: [笔记, 字符串, 树]
---

## 字符串

<!-- more -->

### 哈希 (Hana~!)

总之是很容易写，也比较稳的方法了。

树哈希？把树的节点排一下序，然后转化为括号序列，最后字符串哈希就好了。

#### Blue Mary的战役

$n$ 这么小，当然暴力啦。

如何快速比较两个子矩阵是否相等？当然哈希啦。

### Trie

多模匹配非常有用。

#### 补退选

前两个操作肯定是 Trie，第三个操作呢？

在每个 Trie 节点上搞一个 `vector` 记录这个节点 $\mathrm{size}$ 为 $t$ 的最早时刻，时空复杂度都可以接受。

### KMP

解释清楚算法的关键是 `next` 数组的“次优解”意义。

#### 字符串周期

这个在 [KMP 小记](https://www.luogu.org/blog/Sweetlemon/kmp-note) 里有详细介绍。

#### 抄卡组

对于 `*`，我们怎么处理呢？

对于两个都有星号的字符串，只有第一个星号之前和最后一个星号之后的字符串是需要匹配的，因为中间不一样的地方都可以塞进星号里。

对于两个没有星号的字符串，直接暴力比较是否完全相同即可。

对于一个有星号和一个没有星号的字符串，每两个星号之间的部分必须依次在无星号字符串里匹配。这个使用 KMP 就可以了。

### Manacher

#### 双倍回文

求一个字符串最长的形如 $ww^Rww^R$ 的子串，其中 $w^R$ 表示 $w$ 的 reverse。

首先要发现一个特点，就是 $ww^Rww^R$ 不是简单的回文串的拼接，它自身也是回文串——事实上这个通过多举例就可以发现，证明也很简单。

于是我们假设第二个 $w$ 的位置是 $[x,y]$，那么以 $x-1$ 为中心的回文半径必须覆盖到 $ww^R$，也就（大约）是 $2(y-x)+x$；以 $y$ 为中心的回文串必须覆盖到 $x$。因此大概是一个可以用数据结构优化的东西。

## 树

### dfs 序

第一种是长度为 $n$ 的简单 dfs 序，只在 op 时加入序列。这时所有子树都是连续序列。模板题是 [LOJ 144 DFS 序 1](https://loj.ac/problem/144)、[LOJ 145 DFS 序 2](https://loj.ac/problem/145)。

第二种是长度为 $2n$ 的 dfs 序，在 op 时加入正的值，在 ed 时加入负的值，这时节点到祖先的路径也成为了连续序列——序列中无关的点都会正负抵消。

#### [HAOI2015]树上操作

看到题是不是就写了树剖？

树剖确实是可以做的，但是也可以用长度为 $2n$ 的 dfs 序。

这里唯一的问题是，如何进行子树修改操作？

这是一段序列，我们需要正的加、负的减。

有两种方法。一种是正负分离，搞一个 op 序列和一个 ed 序列，对每个点记录一下它在 op 序列上的位置和在 ed 序列上的位置，加的时候在两个序列里分别加就行了。

另一种方法是真的处理这个“正的加、负的减”。考虑这些操作对线段树这个节点的影响。线段树上这个节点只记录了这段区间的和，而这次修改对线段树这段区间和的影响当然是“正的增加量-负的减少量”，也就是 $v\times \mathrm{pcnt}-v\times \mathrm{ncnt}$，提公因式得到 $v(\mathrm{pcnt}-\mathrm{ncnt})$，而 $\mathrm{pcnt}$ 和 $\mathrm{ncnt}$ 是建树后就不会再改变的，因此我们只需要记录每个节点所管理区间的正数个数和负数个数的差值，修改时就能正确计算出影响了。

### 树上前缀和与树上差分

这里复制[树上前缀和与树上差分](https://www.luogu.org/blog/Sweetlemon/s-and-d-on-a-tree)的原文。

>树上前缀和与树上差分都是树链剖分优秀的离线替代品，配合树状数组还可以进一步处理在线的情况。
>
>##### 树上前缀和
>
>树上前缀和——某个节点到根的路径上的每个点的权值和
>
>求法：$\mathrm{dfs}$时带参数传递下去即可
>
>用法：$x\rightarrow y$的权值和
>1. 点权：$s[x]+s[y]-s[\mathrm{lca}]-s[\mathrm{par}(\mathrm{lca})]$
>
>2. 边权： $s[x]+s[y]-2s[\mathrm{lca}]$
>
>##### 树上差分
>
>树上差分——某个节点对它到根的路径上的每个点的贡献
>
>求法：修改$x\rightarrow y$上每个点/边的权值时：
>
>1. 点权：$d[x]+=w,\ d[y]+=w,\ d[\mathrm{lca}]-=w,\ d[\mathrm{par}(\mathrm{lca})]-=w$
>
>2. 边权：$d[x]+=w,\ d[y]+=w,\ d[\mathrm{lca}]-=2w$
>
>用法：某个节点的权值即为它子树所有节点的差分和
>
>##### 点权和边权
>
>我们的树上前缀和与树上差分（还有树链剖分，小声）都是基于点权的。那么如果遇到边权的问题，如何解决呢？
>
>当然是把边权分配到点上了啊。由于每个点的父节点是唯一的，因此每个点到父节点的连边是唯一的。那么，我们把边权分配到子节点上，也就是分配到深度较大的端点上，问题就解决了。

#### 树上两点距离

当然要找 LCA，然后如何求距离呢？

可以在倍增的时候边跳边算。

但是如果带上修改（每次修改一条边的权值）呢？

这就要用到树上前缀和了。设 $d[i]$ 表示从 $i$ 到根的路径长度（“某个节点到根的路径上的每个对象的权值和”），查询的时候 $d[x]+d[y]-2d[\mathrm{LCA}(x,y)]$ 就可以了。修改边权会且仅会影响到一棵子树里所有点的 $d$，根据长为 $n$ 的 dfs 序的性质，子树里的点是一个连续的区间。区间修改-单点查询，用差分树状数组就可以了。

#### DFS 序 3, 树上差分 1

这是 [LOJ 的模板](https://loj.ac/problem/146)。

路径加，可以拆成两条树链（树上的点到祖先的路径）的加，就是所谓的“区间加”。如果不用树链剖分，就要使用树上差分，将树链的修改变为端点的单点修改，这样询问一个点的权值就要查看所哟对它有贡献的点。回忆一下，树上差分的定义是“某个节点对它到根的路径上的每个点的贡献”，于是对某个点有贡献的点就是以它为根的子树中的所有点。因此查询单点权值就要变为查询子树和。

那么查询子树权值怎么办呢？子树和的子树和？

还记得数列差分是如何处理“前缀和的前缀和”的吗？再存一个“$i\times d_i$”就可以了。这里也是类似的，要维护类似于 $\mathrm{depth}(x)\times d_x$ 的东西。

#### DFS 序 4

其实这道题和 树上操作 是同一道题……

但是数据范围不对！

怎么办呢？

似乎可以用 $\pm 1$ DFS 序配合正负分离做到？

如果非要用普通 DFS 序呢？

修改有两种，一种是单点加，一种是子树加。由于是加法，因此我们可以把两种修改操作分开，查询时分别计算贡献。

考虑单点加对查询（树链）的影响，那当然是用树上前缀和（树链型）直接做——单点加、区间查，树状数组就可以处理。

考虑子树加对树链的影响。

### LCA

#### 运输计划

给定树上的 $m$ 对点，把某一条树边的权值改为 $0$，使得这 $m$ 对点距离的最大值最小。

由于是“最大值最小”，为了方便，我们采用二分答案——二分一个答案，表示“是否可以使所有点对之间的距离都不大于 $\mathrm{ans}$”，满足可二分性。

接下来的问题就是如何在 $O(n+m)$ 时间内判定了。由于只能删除一条边，这个问题事实上比较简单。考虑每一对距离超过了 $\mathrm{ans}$ 的点（假设这样的点有 $t$ 对），它们之间的路径上必须有一条边被操作，并且这一条边，否则这对点的距离不变，不可能满足要求。假设距离最大的点的距离是 $d$，那么删除的边的权值至少是 $d-\mathrm{ans}$。

对于每一对点，我们可以给这一对点路径上的所有边都打上标记，表示删除这些边会影响这一对点的距离。最后要删除的边一定影响到所有 $t$ 对点，且权值至少为 $d-\mathrm{ans}$。于是我们再扫描一下所有边，查看是否存在这样的边即可。

问题是，怎么打标记呢？这是一个路径加、加完毕后查询的操作，因此可以用树上差分解决。

#### 巡逻

只加一条边时，树变成基环树，环上的边只需要走一次，因此把这一条边连在直径上即可。

加两条边时，会形成两个简单环，只在一个环上的边只需走一次，其余边要走两次。因此在只加一条边的基环树的基础上找直径，把原来的环上每一条边的权值设为 $-1$，表示选了这条边要把原来省下的费用还回去。

### 最小生成树

#### 货车运输

最大瓶颈路 + 树上查询。

#### 免费道路

比较神奇的题目。

首先判断是否无解，求最小生成树和最大生成树，如果最小生成树中 $0$ 边少于 $k$ 条或最大生成树中 $0$ 边多于 $k$ 条，就一定无解。否则考虑从最小生成树加一条 $1$ 边、删一条 $0$ 边，一定能逐渐减少 $0$ 边数量、增加 $1$ 边数量，从而达到 $0$ 边恰好是 $k$ 条的状态。（结论：一个图的两个生成树，一定可以通过一系列连续的“删边-加边”操作相互变换得到，变换过程中任意边数为 $n-1$ 的时刻都得到一个生成树。）

然而我们不能一条一条边地替换。现在的方法是，把最大生成树中的所有 $0$ 边加入，再把其余的边排序做最小生成树，先加 $0$ 边直到 $0$ 边达到 $k$ 条，接下来只加 $1$ 边，加到连通为止。这就相当于把最大生成树中的一些 $1$ 边自动替换成了 $0$ 边，因此是一定可以求出解的。

这题应该是介绍了生成树之间的变换吧。

#### 次小生成树

在最小生成树上换边，从小到大加入非树边，把非树边所在环上最大的一条边替换掉即可。

#### 最小生成树计数

求 $n$ 个点的图的不同的最小生成树的数量，$n\le 100$。

这道题非常好地阐述了最小生成树的性质。

在 Kruscal 过程中，如果把边按照权值分成若干块，块内所有边权值相等，那么无论块内边的顺序如何，跑完某一块后，图的连通性总是一定的，这一块被选的边的数量也是相同的。因此不同块的选边是独立的，我们只需要每一块枚举一下即可。

如果没有原题中的限制，同权边很多怎么办呢？

可以用矩阵树定理计算。