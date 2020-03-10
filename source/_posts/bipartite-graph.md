---
layout: post
title: 二分图学习笔记
date: 2018-10-18
updated: 2018-10-18
katex: true
categories: 算法浅解
tags: [算法浅解, 图论, 二分图]
---

## 二分图

#### 定义

二分图又称双分图、二部图、偶图，指顶点可以分成两个不相交的集$U$和$V$，$U$和$V$皆为独立集（即同一个集内的顶点没有共同边）的图。（摘自[维基百科](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E5%9B%BE)）

<!-- more -->

即如果能把某一个图的顶点集$V$划分为两个集合$A$和$B$，使得图中的每一条边都是由$A$中的顶点连向$B$中的顶点（或反之），那么就称这个图为二分图。

#### 判定

二分图有~~两~~三种判定方法。

1. 染色。如果一个图的所有顶点都可以被指定一个颜色，这个颜色是$0$或$1$，且每一条边所连接的两个顶点的颜色都不同，那么这个图就为二分图。

1. 奇环定理。一个图是二分图，当且仅当这个图中没有奇环（即经过边数为奇数的环）。

~~证明留作习题~~

算了，这个稍微证明一下。

首先，二分图与可以染色的等价性是容易证明的，只要把同色顶点划分到一个集合中去就好了。

接着证明奇环定理。这个证明用到了下面的“另一个判定方法”。

引理1：如果无权无向图中存在两点$(u,v)$，它们之间存在两条长度奇偶性不同的路径，那么这个图存在奇环。

证明：设这两条路径分别为$u\rightarrow v, v\rightarrow u$，那么$u\rightarrow v\rightarrow u$的长度为奇数，且构成一个环。证毕。

引理2：如果一个无向图无法进行黑白染色，那么这个图中一定存在两点$(u,v)$，它们之间存在两条长度奇偶性不同的路径。

证明：采用反证法。如果图中不存在两点$(u,v)$，使得它们之间存在两条长度奇偶性不同的路径；  
那么每个连通块任取一个顶点（记为该连通块的$1$号点），把到$1$号点路径长度为奇数的点染上白色，到$1$号点路径长度为偶数的点染上黑色，就完成了黑白染色（这时同色点之间一定无连边）。证毕。

结合这两个引理，就很容易证明奇环定理了。

**补充：带权冰茶姬判断二分图。**

二分图的另一个判定方法：在无权图中，如果任意两点间的任何路径长度的奇偶性都相同，就说明这个图是二分图。（上面引理用到的条件）

证明方法：在有奇环的图中，一个点绕奇环奇数次回到自己的路径长是奇数，走了上述路径后再走路径到达另一点，所走所有路径长之和奇偶性和原来不同。

判断方法：对图中每一条边连边，冰茶姬中维护每一个点到根的距离$\pmod{2}$。

当连接在同一冰茶姬中的两个点时，若这两个点到根的距离之和为奇数，则满足条件；否则不满足二分图条件。

当连接不在同一冰茶姬中的两个点时，在$\text{root}(x)$和$\text{root}(y)$之间连边。若把$\text{root}(x)$并到$\text{root}(y)$上，则$\text{dis}(\text{root}(x))=\text{dis}(x)+1+\text{dis}(y)$（上式中的$1$指边$x\rightarrow y$）。在$\mod{2}$的运算中，加法可以表现为位运算的异或。

证明上述方法要点：一条边走两遍不影响$\text{dis} \mod{2}$的值。

也可以把“每一个点到根的距离$\pmod{2}$”理解为“这个点是否和根在二分图同一侧”，结合异或的性质可以很容易理解。

注意：路径压缩时如何维护$\text{dis}$数组？

```cpp
int ufind(int x){
    if (uset[x]==x)
    	return x;
    int raw_par=uset[x];
    uset[x]=ufind(raw_par);
    dis[x]=dis[x]^dis[raw_par];
    return uset[x];
}
```

#### 例题

1. 设$n\in \mathbb{N}^{*}$，$n\le 15$，集合$A,B$都是$I=\left\{1,2,\cdots,n\right\}$的真子集，$A\cap B=\varnothing$，$A\cup B=I$. 证明：集合$A$或$B$中，必有两个不同的数，它们的和为完全平方数。  
（《奥数教程 高中第一分册 第1讲 集合的概念与运算 例6》）

    我们把集合$I$视作一个图$G$的顶点集，对两个和为完全平方数的顶点连边，那么这道题其实就是证明$G$不是二分图。根据二分图的判定方法2，我们只需证明图中有奇环即可。我们发现$1\rightarrow 3\rightarrow 6\rightarrow 10\rightarrow 15\rightarrow 1$是一个奇环，因此$G$不是二分图，证毕。
    
2. 将正整数集$\mathbb{N}_{+}$分为两个集合使得  
  (1)$1\in A$  
  (2)$A$中任意两个元素之和都不具有$2^{k}+2(k\in \mathbb{N})$的形式  
  (3)$B$也具有性质(2)  
  证明：这样的分划是唯一的。  
  （《奥数教程 高中第一分册 第22讲 集合的分划 练习题7》）
  
    一个连通的二分图的分划只有两种，如果指定了某一个元素所属的集合，这样的分划就是唯一的。于是我们只需证明这个图是连通的即可。  
    我们对两个和具有$2^{k}+2(k\in \mathbb{N})$的形式的两个顶点连边，经过考察，我们发现这个图不仅是连通图，还是一棵树！（证明方法是，对于每一个$x\in \mathbb{N},x>1$，有且仅有一个$y\in \mathbb{N},0<y<x$，使得$x+y=2^{k}+2(k\in \mathbb{N})$。我们只要把$y$作为$x$的父亲节点即可。）于是这道题也解决了。
    
    这道题被改编为了[数学社某次周赛题](https://sweetlemon.blog.luogu.org/shake-hands-with-your-parent-solution)。
    
    
## 二分图染色

用$\text{dfs}$和$\text{bfs}$均可，时间复杂度为$\text{O}(n)$。
## 二分图匹配

#### 致谢

下文参考和摘录了[Renfei Song's Blog - 二分图的最大匹配、完美匹配和匈牙利算法](http://www.renfei.org/blog/bipartite-matching.html)这篇文章的内容，在此向原作者表示感谢！

#### 定义


若$M$是二分图$G$的子图，且$M$中的任意两条边都没有公共顶点，那么就称$M$为$G$的一个匹配。

“匹配点”指$M$中连边的点，“非匹配点”指$G$中除了匹配点以外的其他点；“匹配边”指$M$中的边，“非匹配边”指$M$中除了匹配边以外的其他边。

显然，匹配点的个数$v$和匹配边的条数$e$之间存在关系$v=2e$。

下面的图3和图4都是二分图匹配的例子，其中红色的边是匹配边。图3中$1,4,5,7$是匹配点，图4中$1,2,3,4,5,6,7,8$是匹配点。

![图3](http://img.renfei.org/2013/08/3.png)![图4](http://img.renfei.org/2013/08/4.png)

一个图所有匹配中，所含匹配边数最多的匹配（当然也可以定义为所含匹配点数最多的匹配），称为这个图的最大匹配。图 4 是一个最大匹配，它包含 4 条匹配边。

如果一个图的某个匹配中，所有的顶点都是匹配点，那么它就是一个完美匹配。图 4 是一个完美匹配。显然，完美匹配一定是最大匹配（匹配点不可能再多），但并非每个图都存在完美匹配。

#### 匈牙利算法

匈牙利算法是利用“增广路”求最大匹配的算法。首先我们来看一下什么是“交替路”和“增广路”。

![图5](http://img.renfei.org/2013/08/5.png)

交替路：从一个未匹配点出发，依次经过非匹配边、匹配边、非匹配边、匹配边...，形成的简单路径叫交替路。

增广路：起点和终点均为非匹配点的交替路称为增广路。例如，图 5 中的一条增广路如图 6 所示（图中的匹配点均用红色标出）：  
![图6](http://img.renfei.org/2013/08/6.png)

增广路有一个重要特点：非匹配边比匹配边多一条。因此，研究增广路的意义是改进匹配。只要把增广路中的匹配边和非匹配边的身份交换即可。由于中间的匹配节点不存在其他相连的匹配边，所以这样做不会破坏匹配的性质。交换后，图中的匹配边数目比原来多了 1 条。

我们可以通过不停地找增广路来增加匹配中的匹配边和匹配点。找不到增广路时，达到最大匹配（这是增广路定理）。匈牙利算法正是这么做的。

摘录了这么多，为什么可以利用增广路来找最大匹配呢？下面我解释一下。

首先，我们要从二分图的集合$A$中找到一个非匹配点（如果找不到，就说明这已经是最大匹配了，算法结束），下面我们的目标就是对它进行匹配。

从哪里去找匹配呢？肯定只能从和它连边的顶点去找呀。如果和它连边的顶点中有某一个是非匹配点，那么就匹配成功了。此时找到的这条路正是增广路（既满足交替路的条件，又满足起点和终点都是非匹配点）。

如果和它连边的顶点都是匹配点了怎么办？放弃吧！~~南三科艺楼，一跃解千愁~~

不行呢，要热爱生命（逃）。如果和它连边的顶点都是匹配点，有可能是之前的匹配不合适。如下图，与$3$顶点连边的都是匹配点，但是我们很容易就能看出来这个匹配不合适，如果把顶点$1$改成和$6$匹配，那么顶点$3$就可以和$5$顺利匹配了。

![图7](https://cdn.luogu.com.cn/upload/pic/38515.png)

因此，下一步应该是，让顶点$3$和顶点$1$“协商”，请顶点$1$寻找另一个匹配点。这样问题就转化为了对顶点$1$进行匹配。这时我们可以理解为先走非匹配边$3\rightarrow 5$，再走匹配边$5\rightarrow 1$；接下来顶点$1$由于不能继续和原来的配对点$5$配对，必须走非匹配边$1\rightarrow 6$。而且走环是没有意义的（只会导致死循环）。从而我们证明了，这样一个过程走的是交替路。

如果在上述过程中，某一个$A$中的顶点找到了与之相邻的非匹配点，那么显然它就可以改成和这个新找到的非匹配点相匹配，从而之前的假设“更换匹配点”就满足了。这时的路径便是一条增广路。或者按照上文增广路的特点来理解，更换增广路中匹配边和非匹配边的身份，也可以增加匹配数。总之，如果这个点有可能匹配成功，就能通过增广路的方法进行匹配。

接下来是一个小优化（效果很好）。“如果一直没有找到增广路，则不再从这个点开始搜索。事实上，此时搜索后会形成一棵匈牙利树。我们可以永久性地把它从图中删去，而不影响结果。”

~~这是什么意思呢？就是说，如果对$B$中的某个节点，与它匹配的$A$中节点没有办法更换匹配点，那么我们就可以给$B$中的这个节点打上一个“你是我的唯一”不可替代的标记，今后再尝试匹配时就不需要再和$B$中的这个节点进行协调了。~~

上面这一段的内容有问题。如果是递归的某一层（不是顶层）找不到可更换的匹配，可能原因是，这个点其实是可以换匹配的，但是需要和它的上层协调（它的上层当前还没有更换到合适的匹配），而为了防止死循环，我们规定下层不能和上层协调，因此这次会返回失败。当然，如果顶层匹配失败，那就一定没有匹配，可以给这个点打上一个“单身狗”标签（笑）。

给一组数据：

```plain
5 5 8
1 4
1 5
5 5
3 1
2 2
2 5
1 2
3 2
```

匈牙利算法的时间复杂度是$\text{O}(nm)$，是不是和$\text{SPFA}$的时间复杂度一样呢？事实上，匈牙利算法和$\text{SPFA}$一样，实际运行时间往往并没有理论上的那么糟。

#### 匈牙利算法的实现

以[P3386 【模板】二分图匹配](https://www.luogu.org/problemnew/show/P3386)为例。这道题$A$集合和$B$集合中的顶点编号是重复的，要格外注意。

下面是$\text{bfs}$版本的代码。($215\text{ms}$，无优化$928\text{ms}$)
```cpp
#include <cstdio>
#define MAXM 1000005
#define MAXN 1005
#define MAXQ 1005
using namespace std;
int g[MAXM]; //Graph array
int fst[MAXN]={0},nxt[MAXM]={0}; //Fore list
int prev[MAXN]={0}; //prev means the last vertex which wanted to match
int ans=0; //Ans means the count of matching edges
int match[MAXN]={0}; //Match (A->B)
int invmatch[MAXN]={0}; //Match (B->A)
int que[MAXN]; //Don't use std::queue! It's slow.
int visited[MAXN]; //Only for vertexes in B
int unable_stack[MAXN]={0}; //Store the vertexes (in B) which are going to be unable
void hungarian(int x);
int main(void){
    int n,m,e;
    scanf("%d%d%d",&n,&m,&e);
    for (int i=0;i<e;i++){
        int u,v;
        int edge_num=i+1;
        scanf("%d%d",&u,&v);
        if (v>m)
            continue; //According to the tips
        //Only connect edges from A to B
        g[edge_num]=v;
        nxt[edge_num]=fst[u];
        fst[u]=edge_num;
    }
    for (int i=1;i<=n;i++)
        if (!match[i]) //i hasn't found a vertex to match with
            hungarian(i);
    printf("%d\n",ans);
    return 0;
}

void hungarian(int x){
    int head,tail,st; //Queue head, queue tail, stack top
    head=tail=0;
    que[tail++]=x; //Notice: every vertex in que is in A
    prev[x]=0; //Prev means the vertex which asks i to change its matching vertex
    st=0;
    while (head!=tail){ //!q.empty()
        int nowv=que[head++];
        //nowv means the current vertex which wants to change its matching vertex
        if (head==MAXQ)
            head=0;
        //Cycling queue
        for (int i=fst[nowv];i;i=nxt[i]){
            if (visited[g[i]]==-1 || visited[g[i]]==x)
            //The visited array is similar to the "inq" tag
            //visited[x]==-1 means it can't be replaced
                continue;
            unable_stack[st++]=g[i]; //Push g[i] to the stack
            //If this match fails, visited[g[i]] will be set to -1
            visited[g[i]]=x; //Notice: the index of visited means vertexes in B
            if (!invmatch[g[i]]){
                //If g[i] isn't a matching vertex
                int nowv_to_match=g[i];
                int prev_to_match;
                ans++; //Find a new matching edge
                while (nowv){
                    //Go back in order to update the matching vertexes
                    prev_to_match=match[nowv];
                    match[nowv]=nowv_to_match;
                    invmatch[nowv_to_match]=nowv;
                    nowv=prev[nowv];
                    nowv_to_match=prev_to_match;
                }
                //Match successfully, return
                return;
            }
            //Ask invmatch[g[i]] (the vertex which matches with g[i]) to change its matching vertex
            que[tail++]=invmatch[g[i]];
            prev[invmatch[g[i]]]=nowv; //Set down the prev
            if (tail==MAXQ)
                tail=0;
        }
    }
    //Match failed
    //Set the visited value of all the vertexes which I have asked to change to -1
    while (st){
        st--;
        visited[unable_stack[st]]=-1;
    }
}
```

下面是$\text{dfs}$版本的代码（$262\text{ms}$，无优化$1042\text{ms}$）。

```cpp
#include <cstdio>
#define MAXM 1000005
#define MAXN 1005
using namespace std;
int g[MAXM]; //Graph array
int fst[MAXN]={0},nxt[MAXM]={0}; //Fore list
int ans=0; //Ans means the count of matching edges
int rnd=0; //Means the round of dfs
int match[MAXN]={0}; //Match (A->B)
int invmatch[MAXN]={0}; //Match (B->A)
int visited[MAXN]; //Only for vertexes in B
int hungarian(int x);
int main(void){
    int n,m,e;
    scanf("%d%d%d",&n,&m,&e);
    for (int i=0;i<e;i++){
        int u,v;
        int edge_num=i+1;
        scanf("%d%d",&u,&v);
        if (v>m)
            continue; //According to the tips
        //Only connect edges from A to B
        g[edge_num]=v;
        nxt[edge_num]=fst[u];
        fst[u]=edge_num;
    }
    for (int i=1;i<=n;i++){
        if (!match[i]){ //i hasn't found a vertex to match with
            rnd=i;
            if (hungarian(i))
                ans++;
        }
    }
    printf("%d\n",ans);
    return 0;
}

int hungarian(int x){
    for (int i=fst[x];i;i=nxt[i]){
        if (visited[g[i]]==-1 || visited[g[i]]==rnd)
        //The visited array is similar to the "inq" tag
        //visited[x]==-1 means it can't be replaced
            continue;
        visited[g[i]]=rnd; //Notice: the index of visited means vertexes in B
        if (!invmatch[g[i]] || hungarian(invmatch[g[i]])){
            //If g[i] isn't a matching vertex or its matching vertex has successfully changed
            match[x]=g[i];
            invmatch[g[i]]=x;
            return 1;
        }
    }
    //Match failed
    //Set the visited of match[x] to -1
    if (match[x])
        visited[match[x]]=-1;
    return 0;
}
```