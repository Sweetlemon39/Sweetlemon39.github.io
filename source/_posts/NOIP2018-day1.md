---
layout: post
title: NOIP 2018 集训 Day 1
date: 2018-10-20
updated: 2018-10-20
katex: true
categories: 即时笔记
tags: [笔记, 动态规划]
---

### 前缀和与差分数组

<!-- more -->

#### 多维的前缀和

$S[i]=S[i-1]+a[i]$  
$S[i][j]=S[i-1][j]+S[i][j-1]-S[i-1][j-1]+a[i][j]$   
$S[i][j][k]=S[i-1][j][k]+S[i][j-1][k]+S[i][j][k-1]$   
$-S[i-1][j-1][k]-S[i-1][j][k-1]-S[i][j-1][k-1]$   
$+S[i-1][j-1][k-1]+a[i][j][k]$

总之，有奇数个$-1$的是加，有偶数个$-1$的是减。

如果不想这么麻烦怎么办？可以先对行做一维前缀和，再对列做一维前缀和，即按定义并结合低维前缀和计算，是降维打击。

#### [最大子矩阵问题](https://www.luogu.org/problemnew/show/P1719)

通过枚举左右端点，降到一维进行处理。

#### [激光炸弹](https://www.luogu.org/problemnew/show/P2280)

坐标同时$+1$可以方便处理。枚举右下端点，用二维前缀和计算子矩阵和。

#### [聪明的质检员](https://www.luogu.org/problemnew/show/P1314)

注意二分的循环条件为$r-l>1$，因为当$r=l+1$时无论$mid$偏向哪一边都会导致无限循环。

#### [狗哥采矿](https://www.luogu.org/problemnew/show/P2380)

$\text{dp}$。$f[i][j]$表示$(1,1)\rightarrow(i,j)$区域未开采，其余部分已开采的最大矿数和。也可以$f[i][j]$表示$(1,1)\rightarrow(i,j)$区域已开采，其余部分未开采的最大矿数和。

#### 跳棋

1. 反向$\text{dp}$。倒过来跳，$[l_{i},r_{i}]$中的点可以跳到$i$。$$f[i]=\sum^{r}_{j=l}f[j]$$

  用“后缀和”处理。

2. 正向$\text{dp}$。对于每一个$i$，给$f[j](j\in [l_{i},r_{i}])$加上$f[i]$。  
  用差分数组（边弄边查）达到$\text{O}(n)$。
  
#### [木棍分割](https://www.luogu.org/problemnew/show/P2511)

1. 先二分求出最大值的最小值$w$，可以$\text{O}(n\log\sum{l})$也可以$\text{O}(\log n \log \sum{l})$。  
  此处笔记：二分时使用半开区间，如$[l,r),(l,r]$是很方便的，但是注意循环判断条件要取$r-l>1$。

2. 再进行$\text{dp}$。$f[i][j]$表示考虑到第$i$根木棍，已经切了$j$次的方案数。$f[i][j]$从$f[t][j-1]$转移而来，其中$t+1$到$i$的和不超过$w$。

  如何维护$t$呢？可以二分（本蒟蒻的想法），但是这样就会额外产生对数因子。大佬用的方法，就是由于$i$是顺序枚举的，所以$t$的左界限也是单调向右移动的。只需要弄一个指针，在$i$向右移动的时候把$t$相应向右移动即可。可理解为“双指针法”。  
    类似的例子有$\text{dp}$中的“决策单调性”（石子合并），也是根据上次的决策确定本次的决策范围。
    这道题对于空间的限制很紧，只能使用$\text{short}$。另外注意如果要计算$a-b\pmod{p}$，一定要$(a+p-b)\%p$，否则变成负数了就没得救了。
    
#### [飞扬的小鸟](https://www.luogu.org/problemnew/show/P1941)

$\text{dp}$，$f[x][y]$表示到达点$(x,y)$所需的最小点击次数，若$f[x][y]=+\infty$表示这个点不可达。

这里必须逆向转移才能优化。

$f[x][y]$可以从$f[x-1][y+Y_{x-1}]$（掉了$Y_{x-1}$）或者$f[x-1][y+kY_{x-1}](k\in N_{+})$（点了$k$次）转移而来。

先考虑点了的情形。

可以发现$y+kY_{x-1}$对于$Y_{x-1}$是同余的，并且重复地做了求$\min$操作。可以对同余的点做一个前缀/后缀$min$，即记录$g[x][y]=\min(g[x][t])(t\equiv y\pmod{Y_{x}},t\le y)$思路类似多重背包的单调队列优化。

也可以按$\text{mod } Y_{x-1}$分组计算，用$f[x][y]=\min(f[x-1][y-Y_{x-1}],f[x][y-Y_{x-1}]+1)$，因为到达$(x,y)$所需的点击次数恰好比到达$(x,y-Y_{x-1})$的次数多$1$。

时间复杂度$\text{O}(nm)$。

这题在实现上有相当的难度，尤其要注意碰到顶的情形。额外判断是否能碰到顶时，要注意代码实现。

```cpp
//correct
if (ubound==m){
    for (int j=1;j<=m;j++){
        int tans=(m-j)/x[i-1]+(((m-j)%x[i-1])?1:0);
        f[i][m]=min(f[i][m],f[i-1][j]+max(1,tans));
    }
}

//wrong
if (ubound==m)
    for (int j=max(m-x[i-1],l[i-1]+1);j<=m;j++)
        f[i][m]=min(f[i][m],f[i-1][j]+1);
```

上面错误的写法错在，一个位置可能重复点击多次才碰到顶。

#### [借教室](https://www.luogu.org/problemnew/show/P1083)

$45$分：暴力。

$\{90,100\}$分：线段树，区间最小值。普通线段树常数太大，会$\text{TLE}$一个点；也许$\text{zkw}$线段树可以$\text{AC}$。

$100$分：注意到前$k$个订单能否满足是单调的，因此可以考虑二分可以满足的订单数。对于一个$k$，首先$\text{O}(m)$用差分标记区间加，再$\text{O}(n)$检查是否满足要求。总复杂度$\text{O}((n+m)\log m)$。

想到满分算法的思路应该是先考虑枚举能满足的订单数，使用差分数组进行维护，再发现单调性，将$m$降为$\log m$。差分数组处理每一个订单是$\text{O}(1)$的，然而线段树是$\text{O}(\log n)$的，故差分数组的解法具有优越性。

如果这题一开始就想到线段树，可能对思维定势造成干扰，从而无法得到正解。

#### [最高的牛](https://www.luogu.org/problemnew/show/P2879)

这道题$\text{HDM}$讲过呢，可是我印象不是很深刻了……

证明的要点：区间只会有覆盖而不会有交叉。

记住要去重。

#### [天天爱跑步](https://www.luogu.org/problemnew/show/P1600)

显然很难，所以考虑拿$40$分。

前$20$分是送你的。

第$5$个点暴力是否可过？

对于退化成链的$15$分，考虑能被第$j$个点看到的玩家，他一定在$t=W_j$时位于第$j$个点，因此他的起点$S_{i}=j-W_j$且终点$T_{i}\ge j$，或$S_{i}=j+W_j, T_{i}\le j$。

我的想法是把玩家按$(S_{i},T_{i})$为第一、第二关键字排序，把观察员拆成$(j+W_j),(j-W_j)$两个查询。用两个指针，单调地处理查询。对每一个查询，寻找满足条件的玩家，记录到$ans[j]$中。

老师的想法是，先处理出以$x$为起点的点的数目$cnt[x]$，按顺序枚举观察员，当一个玩家的终点超出观察员的观察范围时把这个玩家从$cnt[x]$中减掉。

群里大佬概括指出，$W_j$相当于起点与观察点的距离。也许根据这个思路，就能解决$S_{i}=1$和$T_{i}=1$的数据了呢（这样好像就$80$分了……）

### 栈

#### 单调栈例题：[广播体操](https://www.luogu.org/problemnew/show/T15301)

$\text{HDM}$讲过，是[POJ2559](http://poj.org/problem?id=2559)。

首先最终的矩形的高度肯定等于某一个柱的高度，因此先枚举矩形的高度。

设$f[i]$表示$i$左边高度不小于$h[i]$的连续柱子段的长度，那么如果$h[i]\ge h[i-1]$，那么$i-1$柱所满足的连续柱子段，一定也可以用于$i$柱。而如果$h[i]>h[i-1]$就意味着$f[i]=0$。

如果有$h[i]\ge h[i-1]$，那么我们在计算$f[i]$的时候就可以直接利用$f[i-1]$。如果有连续的几个不大于$h[i]$的顶点，我们可以把它们的信息合并，只使用最右边的一个。

体现在程序实现上，我们维护一个栈$s$，$s$中元素的$h$值是单调递增的。我们枚举到$i$时，就删除栈中$h[k]\ge h[i]$的元素$k$，并把$f[k]+1$累加入$f[i]$中，直到栈顶元素$h[k]<h[i]$或栈空。

再计算$g[i]$表示$i$右边高度不小于$h[i]$的连续柱子段的长度，则答案即为$\max((f[i]+g[i])\times h[i])$。


#### 降维打击例题：[玉蟾宫](https://www.luogu.org/problemnew/show/P4147)

枚举矩形底端所在的行，转化为上一题。

#### LIS 模板题：[导弹拦截](https://www.luogu.org/problemnew/show/P1020)

维护单调数组$g[i]$，表示长度为$i$的最长不升子序列的最后一个元素的最大值（为了给后面的元素留下最大的余地）。由于序列越长，最后一个元素一般就越小，因此$g$的值是单调不升的。

对于一个$i$，在$g$中二分寻找不小于$a[i]$的最后一个（最长的）$g[j]$，则以$i$结尾的最长不升子序列的最大长度就是$j+1$。接着更新$g$数组，令$g[j+1]=\max(g[j+1],a[i])=a[i]$，因为根据二分的过程，$a[i]$一定大于$g[j+1]$。

最长上升子序列同理。

#### [最大数](https://www.luogu.org/problemnew/show/P1198)

线段树可以水过去，但是码量稍大（雾？）

“如果一个人比你小，还比你强，你就比不过他了。”

“如果一个元素在你后面，比你大，你就被他掩盖了。”

维护栈$s$，栈中元素单调递减，越靠前的元素就越老。加入一个元素时，把栈中小于它的元素全部删除，~~请退役~~（可以用二分辅助）。查询后$L$个元素的最大值时~~（国际初中生信息学奥林匹克）~~，在栈中二分寻找最靠前（最大）的一个满足位置不小于$L$的元素。

#### [音乐会的等待](https://www.luogu.org/problemnew/show/P1823)

维护单调不增栈，越靠前的元素就越大。加入一个元素时，先在栈中二分找出比它大的最后一个（最小的）元素，，再把栈中小于它的元素全部删除，可以用二分辅助。可以把相同的数据压缩进一个$cnt$里。

#### [矩形](https://www.luogu.org/problemnew/show/P1191)

先考虑一维的情形，如11001101，则11这一段有3个，1这一段有1个。归纳得出，如果某一段有$n$个连续的1，这一段的矩形数就是$\sum_{i=1}^{n}i$。

对于二维的情形，考虑降维打击。枚举矩形的左端点和右端点，把同一行左右端点内的所有格子的按位与运算的结果作为一维时矩形的值。

真的做一遍按位与吗？那样就是$\text{O}(n^4)$的呢，还不如直接枚举矩形的左上右下端点。~~考虑线段树求区间最小值~~ 考虑一个前缀和数组，如果这一段的长度是$l$，那么这一段里面全都是$1$当且仅当这一段的区间和也为$l$。

总复杂度$\text{O}(n^3)$。