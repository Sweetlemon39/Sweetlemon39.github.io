---
layout: post
title: NOIP 2018 集训 Day 4
date: 2018-10-23
updated: 2018-10-23
mathjax: true
categories: 即时笔记
tags: [笔记, 动态规划]
---

## 动态规划

<!-- more -->

### 动态规划基础

#### 动态规划问题的特征

1. 子问题重复  
2. 最优子结构，无后效性（可以通过扩充状态满足这个特征）

#### $\text{LIS}$

关于[导弹拦截](https://www.luogu.org/problemnew/show/P1020)的介绍在[这篇笔记](https://www.luogu.org/problemnew/show/P1020)里已经有了。

神级技巧！注意`lower_bound(begin,end,x)`和`upper_bound(begin,end,x)`返回的都是迭代器！这么好的东西，我们怎么能不利用？

可以用`*lower_bound(begin,end,x)=x`将数组中第一个大于等于$x$的数直接更改为$x$。

#### $\text{LCS}$

此处$\text{LCS}$指的是最长公共子序列(Longest Common Subsequence)。

如果是两个字符串的$\text{LCS}$，那么只能通过暴力的$\text{O}(n^{2})\text{ dp}$解决。

如果是两个排列的$\text{LCS}$，可以转化为$\text{LIS}$从而在$\text{O}(n\log n)$的复杂度内解决。

考虑第二个序列中的每个数$b_{i}$，建立一个新序列$c$，$c_{i} = \text{pos}  (b_{i})=\text{lower}\_\text{bound}( a , a+n , b_{i} ) - a$，
则序列$c$的一个上升子序列$c_{i_1},c_{i_2},\cdots ,c_{i_m}$就代表$a_{c_{i_1}}$对应$b_{i_1}$等，是一种公共子序列的对应。那么$\text{LIS}$就代表着$\text{LCS}$。

如果对序列的限制改成：每个字符的出现次数为$\text{O}(1)$，又怎么解呢？方法是：把一个字符拆成若干个字符来解！

对于某一个字符，如果它在第一个序列中出现多次，就把它拆分为多次出现位置的倒序。如序列$a=(1,2,3,1,3,2,4)$，序列$b=(2,1,1,2,3,1,2)$，则可以把序列$b$拆为$c=(6,2,\text{ }4,1,\text{ }4,1,\text{ }6,2,\text{ }5,3,\text{ }4,1,\text{ }6,2)$，如$2$在$a$中出现的位置为$2,6$，就拆成$6,2$。这样做的好处是，如果有$c$中的一个上升子序列，那么它同样对应着一个公共子序列；倒序保证$b$中的同一个位置的数字不会对应$a$中的多个数字，“上升”（而非“不降”）保证$a$中的同一个位置的数字不会对应$b$中的多个数字。

#### [公共子序列](https://vjudge.net/problem/HDU-6412)

我也不记得怎么解了？

### 树形$\text{dp}$

#### [聪聪可可](https://www.luogu.org/problemnew/show/P2634)

对于每一条路径，在它的起点和终点的$\text{LCA}$处统计数量。

定义$f[i][j](i\in [1,n],j\in \{0,1,2\})$表示以$i$为根的子树中，到$i$的距离$\text{dis}$同余于$j$的点的个数。在$\text{dfs}$到某一个点时，初始化$f[x][0]=1,f[x][1]=f[x][2]=0$。每搜完一个子节点，就给答案累加上$f[\text{ch}][0]\times f[x][0]+f[\text{ch}][1]\times f[x][2]+f[\text{ch}][2]\times f[x][1]$，再把$f[\text{ch}]$的结果累加到$f[x]$上（加的顺序要注意，防止重复计数）。

#### [Tree](http://poj.org/problem?id=1741)

点分治。具体做法考虑中。

#### [Black Nodes in Subgraphs](https://www.codechef.com/problems/BLACKCOM)

中文题面见[这里](https://s3.amazonaws.com/codechef_shared/download/translated/SNCKEL17/mandarin/BLACKCOM.pdf)。

[到Vjudge提交](https://vjudge.net/problem/CodeChef-BLACKCOM)

首先考虑预处理一些信息。

先证明一个性质：对于每一个$s$，如果可行的最小$b$为$b_1$，可行的最大$b$为$b_2$，那么对于任意$k\in \mathbb{N},k\in [b_1,b_2]$，$(s,k)$都是可行的。

证明方法：若$b_1=b_2$，显然成立。

否则从最大解中删除一个黑点，在周围寻找一个白点，如果寻找不到，就寻找一个黑点。重复上述过程，不可能一直找不到白点，因为一棵树是连通的，又有$b_1<b_2$，因此只要向最小解方向靠拢，就可以找到白点。找到白点后用白点替换删除了的黑点，解的大小即减小$1$。由于解可以不断地减小直到达到最小答案，因此证明完毕。

证明了这个结论，我们也就只需求出，对于每一个$s$，可行的$b$的最大值和最小值分别是多少。而最大值和最小值是对称的，即最大值是黑点最多，最小值是白点最多。因此我们只需要考虑最大值的做法即可。

定义$r[i]$为$i$个点的连通块中黑点的最大数目，定义$f[i][j]$为在以$i$为根的子树中，包含$i$的共有$j$个点的连通块中黑点的最大数目。$r[j]=\max(f[x][j])$。

对树进行$\text{dfs}$，对于某一棵子树的根节点$x$，先初始化$f[x][1]=\text{color[x]},\text{size}(x)=1$。接着对子节点$i$进行搜索`dfs(i,x)`，得到`f[i][j]`的所有结果（$1\le j\le \text{size}(i)$）。

为什么连通块强制包含$i$呢？因为有了根节点，才能保证是连通的呀。

接着做一遍背包：

```cpp
for (int i=1;i<=size[x];i++) //在加入这棵子树前的图中选i个点，一定选根
    for (int j=0;j<=size[child];j++) //在子树中选j个点
        tempmax[i+j]=max(tempmax[i+j],f[x][i]+f[child][j]); //背包
size[x]+=size[child]; //将子树大小累加
for (int i=1;i<=size[x];i++)
    f[x][i]=tempmax[i]; //将tempmax数组中的数据转移回f数组
```
上述代码中使用`tempmax`数组的目的是在记录答案的同时不改变`f`数组中的数据。

遍历完$x$的所有子节点后，我们把$f[x][j]$的答案更新到$r[j]$中。

最小值同理，再做一遍即可。

### 背包

#### [Median Sum](https://www.luogu.org/problemnew/show/AT3857)

这是$\text{ta}$出的测试题，不算太难。

使用大神器$\text{bitset}$。开一个比总和大的$\text{bitset}$，初始化$\text{bs}[0]=1$，对于每一个数，将$\text{bs}\mid =\text{bs}<<a[i]$，意为从前可行的每一个和，加上$a[i]$也是可行的。计算结果时从$\frac{\text{sum}}{2}$开始往上找即可。

#### [~~简单~~困难题](http://hzwer.com/3697.html)

$\text{bzoj}$权限题，kule。

继续动用大神器。由于是异或，因此同一个和出现两次和没有出现是一样的，出现奇数次相当于出现$1$次。因此只需保存每一个和出现次数$\mod{2}$的值。初始化和处理过程和上题相同，最后计算答案时扫描$\text{bitset}$，把为$1$的索引的值异或起来即得答案。

#### [No Need](https://www.luogu.org/problemnew/show/AT2346)

题意：对于集合$A$中的某一个数$x$，若$\exists B \subset A, x \notin B,\sum_{y\in B}y<k$，且$\sum_{y\in B\cup \left \{ x \right \}}\ge k$，则称$x$是必要的。求集合中不必要的数的个数。

注意到$\varnothing \subset A$，而对于$x\ge k$，令$B=\varnothing$，则$\sum_{y\in B}y=0<k, \sum_{y\in B\cup \left \{ x \right \}}=x\ge k$，知$x$是必要的。因此，不必要的数必小于$k$。

我们还可以证明单调性：若$a\le b$，且$a$是必要的，那么$b$也是必要的。

证明是，由于$a$是必要的，知存在满足上述条件的集合$B$。  
若$b\notin B$，则$\sum_{y\in B\cup \left \{ b \right \}}\ge \sum_{y\in B\cup \left \{ a \right \}} \ge k$。  
若$b \in B$，则将$B$中的$b$换成$a$得到集合$C$，由$a\le b$知$\sum_{y\in C}y\le \sum_{y\in B}y<k$，知$C$满足题设条件。而$\sum_{y\in C\cup \left \{ b \right \}}= \sum_{y\in B\cup \left \{ a \right \}} \ge k$，证毕。

有了上下界和单调性，我们就可以进行二分了。注意，下面这段代码的真实时间复杂度是$\text{O}(n^2 \log n)$，因为$\text{bitset}$的移位操作在复杂度上是$\text{O}(n)$的，只是常数很小而已。

```cpp
#include <cstdio>
#include <algorithm>
#include <bitset>
#define MAXN 5005
#define MAXBS 5005
using namespace std;
bitset<MAXBS> bs;
int a[MAXN];
int main(void){
    int n,k;
    int ll,rr;
    scanf("%d%d",&n,&k);
    for (int i=0;i<n;i++){
        scanf("%d",a+i);
    }
    sort(a,a+n);
    n=lower_bound(a,a+n,k)-a;
    //(ll,rr] 
    ll=-1,rr=n;
    while (rr-ll>1){
        int mid=(ll+rr+1)>>1;
        int necessary=0;
        bs.reset(); // bs=0
        bs.set(0); // bs[0]=1;
        for (int i=0;i<n;i++)
            if (i!=mid)
                bs|=(bs<<a[i]);
        bs>>=(k-a[mid]);
        for (int i=0;i<a[mid];i++){
            if (bs.test(i)){
                necessary=1;
                break;
            }
        }
        if (necessary)
            rr=mid;
        else
            ll=mid;
    }
    printf("%d\n",ll+1);
    return 0;
}

```

当然，除了二分，我们还有$\text{O}(n^2)$的更优的解法。

二分法为什么慢呢？因为对于每一个$\text{mid}$，我们都要计算一遍除了$a_{\text{mid}}$以外的元素的组合能达到的数值。下面的方法可以避免重复计算。

我们还需要一个结论。设$s=\sum_{i=1}^{k}a_{i}$，如果$\exists B \subset A, \left\{ a_{1},a_{2},\cdots,a_{k} \right \} \cap B =\varnothing,  \sum_{y\in B}y<k$，且$s+\sum_{y\in B}\ge k$，那么$a_{k}$是必要的。

证明：假设$a_k$不是必要的，那么根据单调性，$a_1,a_2,\cdots,a_k$都不是必要的。

根据题目条件，将$a_1,a_2,\cdots,a_k$按顺序加入到$B$中，则必存在$1\le j\le k$，使加入$a_1,a_2,\cdots,a_{k-1}$时，和小于$k$；加入$a_j$时，和大于等于$k$。因此$a_j$是必要的，与上述假设矛盾。

故假设不成立，$a_{k}$是必要的。

于是，我们可以根据$a_{k+1},a_{k+2},\cdots,a_{n}$的组合能达到的范围来确定$a_k$的必要性，这样就避免了$\text{bitset}$的重复计算，时间复杂度降到$\text{O}(n^2)$。

### 数位$\text{dp}$

#### [Counting Digits](https://projecteuler.net/problem=156) / [梦中的统计](https://www.luogu.org/problemnew/show/P1554) / [数字计数](https://www.luogu.org/problemnew/show/P2602)

先计算$1\le m <n$的整数中出现数字$x$出现的次数。

依次考虑每一位，考虑个位时令$t=1$，考虑十位时令$t=10$，考虑百位时令$t=100$……

那么在$T=10t$的一个完整周期内，这一位上数字$x$共出现了$t$次。

考虑不完整的那一个周期，如果这一位上的数$\lfloor\frac{n}{t}\rfloor \% 10 > x$，那么出现了完整的$t$次；如果$\lfloor\frac{n}{t}\rfloor \% 10 = x$，那么出现了$n \% t$次；如果$\lfloor\frac{n}{t}\rfloor \% 10 < x$，那么没有出现。

对于Counting Digits，暴力对每个数求解即可。优化是如果一个$x$不是解，且函数值为$y$，那么只比$x$大一点的数也不会是解，因此$x$可以增加一个大一点的数。

另外，Counting Digits可以到[这里](https://www.luogu.org/problemnew/show/SP3928)提交。

对于梦中的统计，求出端点相减即可。

“数字计数”是只有一组数据的版本。~~双倍经验~~

### 状态压缩

#### [Sphere Packing](https://projecteuler.net/problem=222)

相当于求哈密顿路。状压。

#### 状态转移的必备技巧（又名$\text{FMT}$,~~Fans MeeTing~~ Fast Mobius Transform）

已知数组$a[0...2^k-1]$。设$b[i]=\sum_{j\& i=j}a[j]$（可以认为是$A$的所有子集的权值之和）。请在$\text{O}(k2^{k})$的时间内求出$b$数组的值。

暴力法：对每一个$i\in [0...2^k-1]$，枚举$j\in [0...2^k-1]$，如果满足条件，则求和。$\text{O}(4^k)$。

子集枚举法：对每一个集合$A$，枚举$A$的所有子集，进行求和。

如何枚举子集？

```cpp
int i; //枚举A(表示为i)的子集
for (int j=i;;j=(j-1)&i){
    //进行操作
    if (!j)
        break;
}
```

时间复杂度$\text{O}(3^{k})$。

正解：进行递推。

```cpp
int len=1<<k;
for (int i=0;i<k;i++){
    int tpow=1<<i;
    for (int j=0;j<len;j++){
        if (j&tpow)
            f[j]+=f[j^tpow];
    }
}
```

如何理解上面这段代码呢？

请看[拙作第二题](https://sweetlemon.blog.luogu.org/rubbish)

补充：请注意$\text{FMT}$的应用范围！参考[洛谷$11$月月赛 咕咕咕](https://sweetlemon.blog.luogu.org/virtual-noip-2018-ii-day5)。

Upd: 这个东西又叫做 [SoS (Sum over Subsets) dp](https://codeforces.com/blog/entry/45223)。


#### [Or Plus Max](https://vjudge.net/problem/AtCoder-4168)

转化：$i\mid j\le k$这个条件很难利用，我们可以求一个数组$f[k]=\max(A_i+A_j)\ \ (i\mid j=k)$，求$f[k]$的前缀最大值$g[k]=\max(f[i])\ \ (i\le k)$，则$g[k]$即为答案数组。

这么计算同样有难度。我们再进行一次转化：令$h[k]=\max(A_i+A_j)(i\subseteq k,j\subseteq j,i\neq j)$，则我们直接用$\text{FMT}$求出$k$的子集中$A$的最大值和次大值即可。

### 期望$\text{dp}$


#### [分手是~~住院~~祝愿](https://www.luogu.org/problemnew/show/P3750)

首先考虑最优策略。假设当前亮着的编号最大的灯是$x$，则关掉它的最优策略是按下开关$x$把它关上，同时$x$的因数的灯的状态会改变。我们接着寻找下一个亮着的灯，继续如此操作。现在我们就能算出，如果一直按照最优策略，需要操作的次数。这样就能拿到$k=n$的$50$分了。

现在我们考虑随机情况。设状态$k$为“此时按照最优策略，还需操作$k$次”，$f[k]$表示从状态$k$转移到状态$k-1$所需操作次数的期望。

在状态$k$，如果我们按了正确的开关（即$k$个正确开关中的一个），那么状态就转移成了$k-1$；如果我们按了其余的$n-k$个错误的开关，我们就必须再按一次这个错误的开关，因此状态被转移到了$k+1$。而状态$k+1$要转移到状态$k-1$，首先必须回到状态$k$。于是得到$f[k]=\frac{k}{n}\times 1+\frac{n-k}{n}\times (1+f[k+1]+f[k])$。由此式知$f[n]=1,f[k]=\frac{(n-k)f[k+1]+n}{k}$。可以从$f[n]$开始，递推得到所有$f$的值。

因此若设最优策略的步数为$t$，则答案即为
$$\sum^{t}_{i=k+1}f[i]+\sum^{k}_{i=1}1$$

有分数怎么办？最后不是求得不就是$\text{ans}\times n! \text{ }\% 100003$的值嘛，因此计算过程中遇到除法就换成乘以逆元就好了。

#### [WJMZBMR打osu! / Easy](https://www.luogu.org/problemnew/show/P1365)

期望有些很神奇的性质！

**期望的线性性质** $\text{Ex}(k_1X+k_2Y)=k_1\text{Ex}(X)+k_2\text{Ex}(Y)$ （见[维基百科 Expected value](https://en.wikipedia.org/wiki/Expected_value#Basic_properties)）

因此，期望可以乱加（逃）。只要是线性的，我们就方便处理。

考虑一段连续的o，第$k$个位置和第$k+1$个位置的得分满足$(k+1)^2-k^2=2k+1$是线性的，可以处理。因此我们得出，如果一个位置是o，那么这个位置的得分的期望可以由上一个位置的得分期望计算出。

设$f[i]$表示到第$i$步为止得分的期望，$g[i]$表示在第$i$步末尾连续o的个数的期望。设$u[i]=f[i]-f[i-1]$。

现在对第$i$步的状况进行讨论。

如果第$i$步是x，那么$u[i]=0,g[i]=0$。  
如果第$i$步是o，那么根据上面的讨论，$u[i]=2g[i-1]+1,g[i]=g[i-1]+1$。  
如果第$i$步是?，那么$u[i]=(0+2g[i-1]+1)\div 2=g[i-1]+0.5,g[i]=g[i-1]+0.5$。  

于是只需要再使用$f[i]=f[i-1]+u[i]$计算即可。可以使用滚动数组节省空间。最后的答案即为$f[n]$。

#### [按位或](https://www.luogu.org/problemnew/show/P3175)

[这是篇好博客，如果看不懂我自己写的就看这里的吧。](http://liu-runda.blog.uoj.ac/blog/2360)

**暴力法**

设$f[i]$表示从数$i$到$2^n-1$所需操作次数的期望，则$f[2^n-1]=0$，$f[x]=1+\sum_{i=0}^{2^{n}-1}f[x \mid i]\times p[i]$。于是最暴力的方法就有了：对于每一个$x$，枚举$i\not\subseteq x$，将$p[i]\times f[x\mid i]$进行累加后加上$1$，再除以$f[x]$项的系数$1-\sum_{i\subseteq x}p[i]$，即得$f[x]$。最后输出$f[0]$。

**正解**

看题解吧……

#### [歌唱王国](https://www.luogu.org/problemnew/show/P4548)

利用$\text{KMP}$的$\text{next}$数组。

### 奇妙的解法

#### [阿狸和桃子的游戏](https://www.lydsy.com/JudgeOnline/problem.php?id=2563)

如果只有点权，就很简单了。

加上边权了如何呢？

把边权平分到两个端点上，如果这条边被两个人分别选择，那么差值为$0$；否则这两半会累加成一个完整的边权。

~~tql~~

#### [星之器](https://www.luogu.org/problemnew/show/P1861)

我们~~可以~~发现，无论操作方法如何，从初状态转移到末状态释放的能量是相等的。考虑物理中势能的概念，我们定义一个点$(x,y)$的单位势能为$E_{s}=\frac{x^2+y^2}{2}$，一个点的势能为$E_{p}=\text{cnt}(\text{star})E_s$，即星星数目乘以单位势能。定义一个状态的势能为所有点的势能之和。那么从初状态到末状态的能量释放数即为势能差。

#### [Friends](https://vjudge.net/problem/HDU-5241)

答案就是$32^n$。可以使用$\text{long double}$直接输出。

这个答案可以从样例推得。因为每一种语言都是独立的，设语言种数为$n$，则答案一定是$a^{n}$。代入样例知$a=32$。

#### [一道防AK好题](http://www.joyoi.cn/problem/tyvj-1927)

从结束标志$0,0,0$倒推。