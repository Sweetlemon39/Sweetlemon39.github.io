---
layout: post
title: 奇闻记录
date: 2019-04-09
updated: 2019-04-09
mathjax: true
categories: 随笔
tags: 奇闻
---

准备省选了，没想到还遇到这样的坑……开个贴记录一下神坑。

<!-- more -->

1. `std::sort`的比较函数要求高

在重载`sort`的比较函数时，一定要注意，若`a==b`，则`cmp(a,b)`**一定不能**返回`true`，否则会引发段错误。

因此，在写莫队的奇偶排序时，必须写`(bel[lhs.l]&1)?(lhs.r<rhs.r):(lhs.r>rhs.r)`，而不能写`(bel[lhs.l]&1)^(lhs.r<rhs.r)`。

upd: 这个问题在两个多月后又重现了……莫队RE多半就是这个原因了啊。