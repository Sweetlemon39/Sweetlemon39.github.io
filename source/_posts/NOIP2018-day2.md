---
layout: post
title: NOIP 2018 集训 Day 2
date: 2018-10-21
updated: 2018-10-21
katex: true
categories: 即时笔记
tags: [笔记, 搜索, 字符串]
---

### 冰茶姬

<!-- more -->

#### [无线通讯网](https://www.luogu.org/problemnew/show/P1991)

1. 二分$D$，对于每一个$D$，将两个距离不超过$D$的点连边，连边后检查连通块的个数是否不大于$S$（必须两边都有卫星电话才能通话），当只有一个连通块时不需要卫星电话。$\text{O}(n^2 \log x)$。

2. 对边排序，找到位于最小生成树上的第$P-S$条边（仍然注意只有一个连通块时不需要卫星电话），它的长度即为$D$的最小值。$\text{O}(n^2\log n)$。

#### 穿越走廊

1. 二分球体直径。对障碍物（包括圆和上下墙壁）进行两两的枚举，如果这两个障碍物之间的最小距离（两圆间距离/球与墙壁距离/两墙壁间距离）小于球的直径，就在这两个障碍物之间连边。如果最后上、下墙壁是连通的（可以视为有一堵贯穿上下墙壁的墙），就不可行；否则可行。

2. 连边方法同上。把边按从小到大排序，依次加入图中，则球体的最大直径就是恰使上下墙壁连通的那一条边的长度$l$减去$1$（$l-1$）。

#### [货车运输](https://www.luogu.org/problemnew/show/P1967)

~~本蒟蒻的极度暴力方法：直接$\text{O}(n^3)$跑$\text{Floyd}$。~~

$30$分方法：
1. 二分限重，判断是否连通。$\text{O}(qm\log z)$。    
2. 对边排序，从大到小将边加入图中，直到起点和终点连通为止。$\text{O}(m\log m+qm)$。

### 带权冰茶姬

#### [关押罪犯](https://www.luogu.org/problemnew/show/P1525)

1. 对答案进行二分，对某个答案$x$，对所有怨气值大于$x$的罪犯连边，如果最后得到的图是二分图，则$x$可行。$\text{O}((n+m)\log c)$

2. 对边排序，从大到小按上述方法连边，直到图不是二分图时，加入的最后一条边的权值即为答案。$\text{O}(m\log m)$  
  **[（带权）冰茶姬判二分图](https://sweetlemon.blog.luogu.org/bipartite-graph)**。
  
### 搜索

#### [逛公园](https://www.luogu.org/problemnew/show/P3953)

$10$分：先$\text{Dijkstra}$计算最短路长度，再$\text{dfs}$枚举简单路径（无剪枝）。

$20$分：先$\text{Dijkstra}$计算最短路长度，再$\text{dfs}$枚举简单路径（当前已走路径长超过$\text{dis}(1,n)+k$时剪枝）。

$30$分：  
1.   先$\text{Dijkstra}$计算每个点到$1$和$n$的距离，再$\text{dfs}$枚举简单路径（$\text{dis}(1,u)+w+\text{dis}(v,n)$超过$\text{dis}(1,n)+k$时剪枝）。其实只能过$k=0$的点。    
2.   注意到有$3$个点$k=0$。先$\text{Dijkstra}$计算最短路长度，再做一遍[最短路计数](https://www.luogu.org/problemnew/show/P1608)。判断每个点是否在最短路上，重新建图，插入在最短路上的边（边权设为$1$），新图应该是一个$\text{DAG}$，接着$\text{dp}$即可（应该是$\text{O}($能过$)$）。

#### [国王游戏](https://www.luogu.org/problemnew/show/P1080)

$20$分：正序枚举排列并剪枝。

$50$分：因为后面的人得到的金币数一般多于前面的，因此倒序枚举排列可以让最大值尽早暴露出来从而便于剪枝。

#### [飞扬的小鸟](https://www.luogu.org/problemnew/show/P1941)

~~dp好烦啊，不想写dp~~

$50$分：$\text{dfs}(x,y,t)$表示到达$(x,y)$，点了$t$次。枚举点了多少次即可。稍加可行性和最优性剪枝。

#### [愤怒的~~绿鸟~~小鸟](https://www.luogu.org/problemnew/show/P2831)

~~这题据说搜索可以拿满分，久仰久仰~~

~~现在是亲自证明搜索可以满分了~~

对于每一个状态，强制要求消灭当前编号最小的猪，再枚举另一只猪，如果过这两只猪的抛物线满足题目要求，则扫描所有猪，把在这条抛物线上的所有猪删除，继续搜索。

关键是“强制要求消灭当前编号最小的猪”，因为抛物线没有先后之别，因此作如上处理可以减少状态数。

为方便判断边界，可以$\text{dfs}(x,k)$表示当前编号最小的猪是$x$，已经发射了$k$只鸟。

$\text{upd}$：没想到这题比预料中好写。用了记忆化状压搜索，先预处理每一条抛物线可以消灭的猪，再搜索。

#### [宝藏](https://www.luogu.org/problemnew/show/P3959)

先枚举根，再枚举生成树的形态。

如何枚举生成树的形态呢？只需枚举每一个点在第几层即可。第$k$层的点可以连向第$k-1$层的任意一个与它有连边的点，为了使这个方案最优，应该往上一层中与它距离最小的点连边。上述优化极其有效，大大降低了枚举的生成树的数量。

其实这个也没有我想象中的那么难实现嘛 ~~废话你都看过老师代码了~~

#### [换教室](https://www.luogu.org/problemnew/show/P1850)

~~什么？期望dp？~~

先用$\text{Floyd}$算出任意两点最短路。再枚举提出更换教室申请的方案，对于每一种申请方案，计算出这种方案下的期望，加上剪枝即可。$\text{dfs}(x,t)$表示当前计算到第$x$个教室，已经提出申请的次数是$t$。

#### [斗地主](https://www.luogu.org/problemnew/show/P2668)

极其繁琐。

注意到对于$30\%$的数据，$n\le 4$。因此只能出火箭、炸弹、单张、对子、三张和三带一。因此就比较简单。

#### [Mayan游戏](https://www.luogu.org/problemnew/show/P1312)

$30\%$数据为一维，不会有连锁反应。

#### [翻转棋](https://www.luogu.org/problemnew/show/P1985)

这道题是去年$\text{NOIP}$初赛的问题求解呢……当时我什么都不懂~~，现在也还是什么都不懂~~。

首先发现每个格子只有可能翻$0$或$1$次。接着我们发现，第一行的方案确定后，第二行的方案也确定了（如果上方的格子是$1$，就必须翻；否则不能翻），整个棋盘的翻转方案也确定了。因此只需要$\text{O}(2^n)$。

#### [狗哥玩木棒](https://www.luogu.org/problemnew/show/P2383)

因为木棒全用完，因此正方形边长为$\frac{\sum l}{4}$。

#### [小木棍](https://www.luogu.org/problemnew/show/P1120)

枚举原来木棍的段数（注意不能二分）。

剪枝要点：

木棍段数是总长的因数，还有许多极其难以想到的优化。

## 字符串

### 字符串 蛤 习

#### 蛤 习 基 本 法

1. 不要把数字映射到$0$，要不然有没有都不知道

2. 基底要大于字符种数（否则会被冒充）

3. 膜 数还是选一个质数（比较$\text{simple}$的数）吧，比如某些$8$位质数，或者$998244353,993244853,998244853,10^9+7,10^9+9$。

时间复杂度$\text{O}(n) + 1\text{s}$。

#### 子串的 蛤 习
记录前缀 蛤 习 数组$\text{hash}[x]$表示到$x$的前缀串的 蛤 习，则任意子串$s[i...j]$的 蛤 习 值就是$(\text{hash}[j]-e^{j-i+1}\text{hash}[i-1])\% p$。时间复杂度$\text{O}(1) + 1\text{s}$。

#### 蛤 习 求周期

枚举循环节长度$L$，判断$s[1...L],s[L+1...2L],s[2L+1...3L]...$的子串 蛤 习 是否相等，注意最后一个循环节可能不满。时间复杂度$\sum_{i=1}^{n}\frac{n}{i}=\text{O}(n\log n)$。

$\text{KMP}$可以$\text{O}(n)$。

#### 求每个字符为中心的回文串的最大长度

从$\text{Manacher}$那里借一个方便的转化：在相邻两字符之间插入一个奇怪的字符~~，比如男魂~~，最后答案除以$2$即可。

做正向和逆向两个 蛤 习 ，对每一个中心，二分最大回文串长度。

$\text{O}(n\log n)$。

#### 字符串匹配

枚举位置。

#### [优秀的拆分](https://www.luogu.org/problemnew/show/P1117)

1. 枚举子串，对每一个子串枚举$A$，$\text{O}(n^3)$。

2. 不枚举子串，转而枚举$A,B$的分界线，在分界线两端分别枚举$A$和$B$，再用乘法原理计算总方案数，$\text{O}(n^2)$。

虽然这是一道$\text{NOI}$的题目，但是仅用 蛤 习 再加上一些可以理解的暴力手段，就可以拿到$95$分！因此 蛤 习 大法好！坚持 $\text{MoHf}$！