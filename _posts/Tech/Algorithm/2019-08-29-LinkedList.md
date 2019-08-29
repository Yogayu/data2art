---
layout: post
title: '链表系列题目总结'
postPatterns: circuitBoard
time: 20
keywords: 链表, LinkedList, 算法，链表总结
description: 链表系列题目总结。包含链表的基本概率和高频面试题。
category: Tech
author: 游薪渝
tags: [Algorithm]
bio: 'To create, To experience.'
cover: https://images.unsplash.com/photo-1519942248912-c77dcb5374d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [链表](#%E9%93%BE%E8%A1%A8)
    - [**Linked lists boot camp**](#linked-lists-boot-camp)
    - [**Tips**](#tips)
  - [237. 删除链表中的节点](#237-%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9)
  - [206. 反转链表](#206-%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8)
    - [迭代](#%E8%BF%AD%E4%BB%A3)
    - [递归](#%E9%80%92%E5%BD%92)
  - [141. 判断链表是否有环](#141-%E5%88%A4%E6%96%AD%E9%93%BE%E8%A1%A8%E6%98%AF%E5%90%A6%E6%9C%89%E7%8E%AF)
    - [快慢指针](#%E5%BF%AB%E6%85%A2%E6%8C%87%E9%92%88)
    - [哈希](#%E5%93%88%E5%B8%8C)
  - [142. 环形链表 II 环入口](#142-%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8-ii-%E7%8E%AF%E5%85%A5%E5%8F%A3)
    - [快慢指针双指正](#%E5%BF%AB%E6%85%A2%E6%8C%87%E9%92%88%E5%8F%8C%E6%8C%87%E6%AD%A3)
    - [哈希](#%E5%93%88%E5%B8%8C-1)
  - [160. 相交链表（两个链表交点）](#160-%E7%9B%B8%E4%BA%A4%E9%93%BE%E8%A1%A8%E4%B8%A4%E4%B8%AA%E9%93%BE%E8%A1%A8%E4%BA%A4%E7%82%B9)
    - [哈希表](#%E5%93%88%E5%B8%8C%E8%A1%A8)
  - [21. 合并两个有序链表](#21-%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8)
    - [递归](#%E9%80%92%E5%BD%92-1)
    - [迭代](#%E8%BF%AD%E4%BB%A3-1)
  - [23. 合并K个有序列表 ✨](#23-%E5%90%88%E5%B9%B6k%E4%B8%AA%E6%9C%89%E5%BA%8F%E5%88%97%E8%A1%A8-)
    - [优先队列](#%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97)
    - [归并](#%E5%BD%92%E5%B9%B6)
  - [234. 回文链表](#234-%E5%9B%9E%E6%96%87%E9%93%BE%E8%A1%A8)
  - [328. 奇偶链表](#328-%E5%A5%87%E5%81%B6%E9%93%BE%E8%A1%A8)
    - [四个指针](#%E5%9B%9B%E4%B8%AA%E6%8C%87%E9%92%88)
  - [19. 删除链表的倒数第N个节点](#19-%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%ACn%E4%B8%AA%E8%8A%82%E7%82%B9)
    - [双指针](#%E5%8F%8C%E6%8C%87%E9%92%88)
  - [拷贝带随机指针的链表](#%E6%8B%B7%E8%B4%9D%E5%B8%A6%E9%9A%8F%E6%9C%BA%E6%8C%87%E9%92%88%E7%9A%84%E9%93%BE%E8%A1%A8)
  - [删除链表中重复的数](#%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E4%B8%AD%E9%87%8D%E5%A4%8D%E7%9A%84%E6%95%B0)
  - [总结](#%E6%80%BB%E7%BB%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Sepcifically, a singly linked list is a data structure that contains a sequence of nodes such that each node contains an object and a reference to the next node in the list.

A list is similar to an array in that it contains objects in a linear order.

- **inserting** and **deleting** elements in a list has time complexity **O(1)**.
- On the other hand, **obtaining** the kth element in a list is expensive, having **O(n)** time complexity.

数组在内存中存储的方式是连续的，所以数组可以通过地址偏移量的方式，很快的定位到元素。而链表在内存中存储的方式是离散的。

因为数组是连续存储，需要足够的连续内存空间。而链表节点之间通过指针连接，可以在任意不连续的内存空间进行存储。

### **Linked lists boot camp**

Two type:

1. Implement your own list
2. exploit the standard list library

Implementing a basic list APl-search, insert, delete-for singly linked lists is an excellent way to become comfortable with lists.
```python
def ListNode():
    def __init__(self, data=0, next_node=None):
        self.data = data
        self.next = next_node

class ListNode():
    def __init__(self, data=0, next_node=None):
        self.data = data
        self.next = next_node

    # search for a key
    def search_list(node,key):
        while node and node.data != key:
            node = node.next
        return node

    # insert new_node after node.
    def insert(node, new_node):
        new_node.next = node.next
        node.next = new_node

    # delect the node past this node. Assume node is not a tail.
    def delect_after(node):
        node.next = node.next.next
```
### **Tips**

- Insert and delete: **O(1) time** complexity. Search: **O(n)**
- cleanly coding what's specified
- Consider using a **dummy head** (sometimes referred to as a sentinel) to avoid having to check for empty lists. This simplifies code, and makes bugs less likely.
- It's easy to forget to **update next** (and previous for double linked list) for the head and tail.
- Algorithms operating on singly linked lists often benefit from **using two iterators**, one **ahead of the another**, or **one advancing quicker** than the other.

## 237. 删除链表中的节点

请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。现有一个链表 -- head = [4,5,1,9]，它可以表示为:

![](/assets/img/linkedlist/Untitled-ff4cb21a-88f7-4c9b-a07a-a32c2947b607.png)

输入: head = [4,5,1,9], node = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

来源：力扣（LeetCode）
链接：[https://leetcode-cn.com/problems/delete-node-in-a-linked-list](https://leetcode-cn.com/problems/delete-node-in-a-linked-list)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        node.val, node.next = node.next.val, node.next.next
```
node 本身就是链表的一部分。将下一个值赋值给自己，自己指向下一个的下一个。

时间和空间复杂度都是：O(1)。

## 206. 反转链表

![](https://ask.qcloudimg.com/http-save/yehe-2662963/t87hfab628.gif)

### 迭代

**在遍历列表时，将当前节点的 next 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用！**
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        pre, cur = None, head
        while cur:
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        return pre
                
        '''
        p, rev = head, None
        while p:
            rev, rev.next, p = p, rev, p.next
        return rev
        '''
```
复杂度分析

时间复杂度：O(n)，假设n是列表的长度
空间复杂度：O(1)。

### 递归
希望 n_k+1 的 next 指 向n_k，而 n_k.next 其实就是 n_k+1.next。所以就是n_k.next.next = n_k。最后 n_k 的 next 指向空。

![](/assets/img/linkedlist/Untitled-fd5cc135-aa11-4a05-b924-3c7876e73583.png)
```python
// 递归
public ListNode reverseList(ListNode head) {
    if (head == null || head.next == null) return head;
    ListNode p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}

//尾递归
public ListNode reverseList(ListNode head) {
    return reverse(null,head);
}

private static ListNode reverse(ListNode pre,ListNode cur){
    if(cur==null) return pre;
    ListNode next = cur.next;
    cur.next = pre;
    return reverse(cur,next);
}

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head == None or head.next == None: return head
        p = self.reverseList(head.next)
        head.next.next = head
        head.next = None
        return p
```
参考：

- [https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-by-leetcode/](https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-by-leetcode/)

## 141. 判断链表是否有环

来源：https://leetcode-cn.com/problems/linked-list-cycle/

### 快慢指针

快慢指针，相交代表有环。类比龟兔赛跑。
```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        slow, fast = head, head
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            # 判断语言必须在走了之后，在前面，第一次会一定相等的
            if slow == fast:
                return True
        return False
```
![](/assets/img/linkedlist/Untitled-51fe9887-6fe4-4f05-9140-a1e30af9d797.png)

（时间复杂度分析有点复杂）

### 哈希

另外还可以用哈希表记录已经访问的节点，如果再次访问同一节点，即有环，空间复杂度为O(n)。

```python
def hasCycle(self, head):
    """
    :type head: ListNode
    :rtype: bool
    """
    visited = set()
    cur = head
    
    while cur:
        if cur in visited:
            return True
        visited.add(cur)
        cur = cur.next
    return False
```
## 142. 环形链表 II 环入口

### 快慢双指针

分两步：

1. 找到快慢指针相遇的点
2. 从head和相遇的点同时走，当相遇时，即为环相交点

![](/assets/img/linkedlist/ls.png)

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def detectCycle(self, head):
        fast, slow = head, head
        while True:
            if not (fast and fast.next): return
            fast, slow = fast.next.next, slow.next
            if fast == slow:
                break
        fast = head
        while fast != slow:
            fast, slow = fast.next, slow.next
        return fast

class Solution(object):
    def getIntersect(self, head):
        tortoise = head
        hare = head

        # A fast pointer will either loop around a cycle and meet the slow
        # pointer or reach the `null` at the end of a non-cyclic list.
        while hare is not None and hare.next is not None:
            tortoise = tortoise.next
            hare = hare.next.next
            if tortoise == hare:
                return tortoise

        return None

    def detectCycle(self, head):
        if head is None:
            return None

        # If there is a cycle, the fast/slow pointers will intersect at some
        # node. Otherwise, there is no cycle, so we cannot find an enterance to
        # a cycle.
        intersect = self.getIntersect(head)
        if intersect is None:
            return None

        # To find the enterance to the cycle, we have two pointers traverse at
        # the same speed -- one from the front of the list, and the other from
        # the point of intersection.
        ptr1 = head
        ptr2 = intersect
        while ptr1 != ptr2:
            ptr1 = ptr1.next
            ptr2 = ptr2.next

        return ptr1
```
### 哈希

用哈希表记录已经访问的节点，如果再次访问同一节点，该节点即是环入口。

时间，空间复杂度均为O(n)。
```python
class Solution(object):
    def detectCycle(self, head):
        visited = set()

        node = head
        while node is not None:
            if node in visited:
                return node
            else:
                visited.add(node)
                node = node.next

        return None
```
## 160. 相交链表（两个链表交点）
链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

![](/assets/img/linkedlist/two.png)

A和B要从距离末尾同等距离的位置开始遍历，才能相交。这个位置是较短链表的头结点位置。所以需要消除A和B的长度差。

1. 指针 pA 指向 A 链表，指针 pB 指向 B 链表，依次往后遍历
2. 如果 pA 到了末尾，则 pA = headB 继续遍历
3. 如果 pB 到了末尾，则 pB = headA 继续遍历
4. 比较长的链表指针指向较短链表head时，长度差就消除了
5. 如此，只需要将最短链表遍历两次即可找到位置

想弄清楚为什么这样可行, 可以考虑以下两个链表: A={1,3,5,7,9,11} 和 B={2,4,9,11}，相交于结点 9。 由于 B.length (=4) < A.length (=6)，**pB 比pA 少经过2 个结点，会先到达尾部。**将pB 重定向到 A 的头结点，**pA 重定向到 B 的头结点后，pB 要比pA 多走 2 个结点。**因此，它们会同时到达交点。

![](/assets/img/linkedlist/Untitled-2edc9eb4-4334-4085-9cb3-59753c555b06.png)

![](/assets/img/linkedlist/Untitled-c9cb0bd6-c60a-4ada-8f46-0ecd3afeb8e1.png)
```python
class Solution(object):
    def getIntersectionNode(self, headA, headB):
        ha, hb = headA, headB
        while ha != hb:
            ha = ha.next if ha else headB
            hb = hb.next if hb else headA
        return ha
```
时间复杂度 :O(m+n)。
空间复杂度 :(1)。

### 哈希表

遍历链表 A 并将每个结点的地址/引用存储在哈希表中。然后检查链表 B 中的每一个结点bi
是否在哈希表中。若在，则bi为相交结点。
```python
class Solution(object):
    def getIntersectionNode(self, headA, headB):
        visited = set()
        
        ha = headA
        while ha:
            visited.add(ha)
            ha = ha.next
        
        hb = headB
        while hb:
            if hb in visited:
                return hb
            hb = hb.next
        return None
```
复杂度分析

时间复杂度 :O(m+n)。
空间复杂度 :O(m) 或O(n)。

- 链接：[https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/xiang-jiao-lian-biao-by-leetcode/](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/xiang-jiao-lian-biao-by-leetcode/)
- 链接：[https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/tu-jie-xiang-jiao-lian-biao-by-user7208t/](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/tu-jie-xiang-jiao-lian-biao-by-user7208t/)

## 21. 合并两个有序链表

链接：https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/he-bing-liang-ge-you-xu-lian-biao-by-leetcode/

### 递归

我们可以如下递归地定义在两个链表里的 merge 操作（忽略边界情况，比如空链表等）：

![](/assets/img/linkedlist/Untitled-b859540b-d245-46e7-afd5-74212079a130.png)

- 两个链表头部较小的一个与剩下元素的 merge 操作结果合并。
- 考虑边界情况：
    - 特殊的，如果 l1 或者 l2 一开始就是 null ，那么没有任何操作需要合并，所以我们只需要返回非空链表。
    - 否则，我们要判断 l1 和 l2 哪一个的头元素更小，然后递归地决定下一个添加到结果里的值。
    - 如果两个链表都是空的，那么过程终止，所以递归过程最终一定会终止。

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 == None:
            return l2
        if l2 == None:
            return l1
        
        if l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l2.next, l1)
            return l2
```
复杂度分析

时间复杂度：O(n+m)。 因为每次调用递归都会去掉 l1 或者 l2 的头元素（直到至少有一个链表为空），函数 mergeTwoList 中只会遍历每个元素一次。所以，时间复杂度与合并后的链表长度为线性关系。

空间复杂度：O(n+m)。调用 mergeTwoLists 退出时 l1 和 l2 中每个元素都一定已经被遍历过了，所以n+m 个栈帧会消耗O(n+m) 的空间。

链接：[https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/he-bing-liang-ge-you-xu-lian-biao-by-leetcode/](https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/he-bing-liang-ge-you-xu-lian-biao-by-leetcode/)

### 迭代

> A better approach, in terms of time complexity, is to traverse the two lists, always choosing the node containing the smaller key to continue traversing from.

[Aug-27-2019_11-18-28-0c3ad7cb-623c-474b-8977-49207dbf83f8.mp4](Aug-27-2019_11-18-28-0c3ad7cb-623c-474b-8977-49207dbf83f8.mp4)
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy_head = tail = ListNode(-1)
        while l1 and l2:
            if l1.val < l2.val:
                tail.next, l1 = l1, l1.next
            else:
                tail.next, l2 = l2, l2.next
            tail = tail.next # 记得tail要往下走
        tail.next = l1 or l2 # 把剩余不为空的加进去
        return dummy_head.next
```
复杂度分析

时间复杂度：O(n+m) 。因为每次循环迭代中，l1 和 l2 只有一个元素会被放进合并链表中， while 循环的次数等于两个链表的总长度。所有其他工作都是常数级别的，所以总的时间复杂度是线性的。

空间复杂度：O(1) 。迭代的过程只会产生几个指针，所以它所需要的空间是常数级别的。

## 23. 合并K个有序列表 ✨

### 优先队列

```
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```

**算法**

- 比较 k 个节点（每个链表的首节点），获得最小值的节点。
- 将选中的节点接在最终有序链表的后面。

通过使用PriorityQueue，降低选择最小值的时间复杂度。

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

from Queue import PriorityQueue

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        head = ListNode(-1)
        dummy_head = head
        
        q = PriorityQueue()
        
        for l in lists:
            if l:
                q.put((l.val, l))
        
        while not q.empty():
            val, node = q.get()
        
            head.next = ListNode(val)
            head = head.next
            
            node = node.next
            if node:
                q.put((node.val, node))
        
        return dummy_head.next
```
![](/assets/img/linkedlist/Untitled-c1d926d8-a3f2-40cb-82c2-0778684fcffc.png)

### 归并

## 234. 回文链表
链接：https://leetcode-cn.com/problems/palindrome-linked-list/solution/xing-shu-ji-jian-kuai-man-zhi-zhen-fan-zhuan-lian-/

思路

- **定位中点：**设置快慢指针，每次快指针增加两个，慢指针增加一个，这样当快指针结尾时，慢指针指向了链表的中间
- **反转后半部分：**用慢指针逆序链表的后半部分，利用Python交换的特性，不需要额外的tmp结点
- **比较：**一个从头开始，一个从中间开始，判断两者是否相同

代码
```python
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        slow,fast,prev = head,head,None
        while fast is not None:
            slow = slow.next
            fast = fast.next.next if fast.next is not None else fast.next
        while slow is not None:
            slow.next, slow, prev= prev, slow.next, slow
        while head and prev:
            if head.val != prev.val:
                return False
            head = head.next
            prev = prev.next
        return True
```
作者：jimmy00745
链接：[https://leetcode-cn.com/problems/palindrome-linked-list/solution/xing-shu-ji-jian-kuai-man-zhi-zhen-fan-zhuan-lian-/](https://leetcode-cn.com/problems/palindrome-linked-list/solution/xing-shu-ji-jian-kuai-man-zhi-zhen-fan-zhuan-lian-/)
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 328. 奇偶链表
四个指针，拆分为奇链表和偶链表。

![](/assets/img/linkedlist/Untitled-2e977202-0a55-42b7-ab3a-24b51d45f4f4.png)

![](/assets/img/linkedlist/Untitled-b4d5f6d0-7864-46bb-98d1-78ba96d8d4fd.png)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        if not head or head.next == None: return head
        
        oddHead, evenHead, odd, even = head, head.next, head, head.next
        
        while even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next = odd.next
            even = even.next
        
        odd.next = evenHead
        
        return oddHead
```
复杂度分析

时间复杂度：O(n) 。总共有n 个节点，我们每个遍历一次。

空间复杂度：O(1) 。我们只需要 4 个指针。

链接：[https://leetcode-cn.com/problems/odd-even-linked-list/solution/qi-ou-lian-biao-by-leetcode/](https://leetcode-cn.com/problems/odd-even-linked-list/solution/qi-ou-lian-biao-by-leetcode/)

## 19. 删除链表的倒数第N个节点

### 双指针

- 第一个指针从列表的开头向前移动 **n+1** 步，而第二个指针将从列表的开头出发。
- 现在，这两个指针被n 个结点分开。我们通过同时移动两个指针向前来保持这个恒定的间隔，直到第一个指针到达最后一个结点。此时第二个指针将指向从最后一个结点数起的第n 个结点。
- 我们重新链接第二个指针所引用的结点的 next 指针指向该结点的下下个结点。

链接：[https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-by-l/](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-by-l/)

![](/assets/img/linkedlist/Untitled-805eaf27-52ec-4732-b651-a7af42f2e74c.png)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode(-1)
        dummy.next = head
        s, f = dummy,dummy
        
        for i in range(n+1):
            f = f.next
        
        while f:
            s, f = s.next, f.next
        
        s.next = s.next.next
        return dummy.next
```

时间复杂度：O(n)

空间复杂度：O(1)

## 拷贝带随机指针的链表

## 删除链表中重复的数

## 总结

- 哈希
- 快慢指针
- 画图思考
- Dummy Head

![](/assets/img/linkedlist/Untitled-523adc72-4502-48a2-8f63-aefee4928098.png)

其他参考：

- Element of Programming Interview in Python
- [链表算法面试问题？看我就够了！](https://cloud.tencent.com/developer/article/1403402)
