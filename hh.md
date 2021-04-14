---


# 联系方式


- 手机：18654171092(合肥)
- Email：794089112@qq.com
- QQ/微信号：微信sytclmissyou

---

### 个人信息

 - xx/男/1993 
 - 本科/中国科大计算机系 
 - 工作年限：5年
 - 所在公司：上海华为
 - 技术博客：
 - Github：

 - 期望职位：无线服务端开发工程师/服务端开发工程师

---

### 技能清单

- 掌握语言：C熟练使用，辅助使用Go/Python/C++/shell脚本……
- **熟悉网络编程模型，算是有大规模/高并发优化经验**，由于工作实践稍微熟悉TCP/IP，UDP等协议
- 熟练使用linux，稍微研究了一下下linux内核
- **热爱开源，坚持阅读优秀源码，阅读过ipvs源码，实践xt_GTPU(见github)，阅读过UDT开源库（基于UDP/多线程/有连接有重传的传输开源库）；正在阅读cJSON源码/Go源码**
- 学习能力好，对业界新技术敏感，喜欢钻研，具有良好的学习能力并注重团队合作；**每天空闲时间就看微信技术文章/技术网站技术文章推送**，习惯做笔记，然后就把有些笔记发到自己博客，然后博客内容就显得有些乱
- 坚持写clean code，定期维护自己热爱的代码
- **熟悉/常用工具：valgrind（检查c/c++内存问题等）/perf（性能优化）**
- 基本工作技能，版本管理工具：Svn/Git
- 云开发平台：较熟悉AWS
- 具有较好的英语阅读能力，平时会读读英文小说/英文技术文章

### 工作经历

#### 上海华为有限公司/无线部门（ 2015年6月至今 ）

##### 基于AWS公有云开源EPC蓝军项目 

我在此项目中负责AM模块（基站接入管理）、负载均衡模块（IPVS模块）、GW-PF模块（用户面流量大规模转发）、UDT开源库（适配项目需要各种优化工作）四个模块的工作

出色的地方：

1. 由于性能瓶颈限制，重写GW-PF模块，使单节点能够支持600kpps上下行转发处理能力，完成蓝军项目一挑战目标
2. 负责自己的模块性能调优，使自己负责的模块能够支撑百万模拟用户规格
3. 主动维护svn代码分支，保证开发效率

##### 1.负载均衡模块

性能调优/书写测试程序和使用nuttcp等进行压测

####2.GW-PF模块

使用iptables(xtables)开发框架开发(主要是发现基于netfilter框架开发来不及)

性能从重写前20kpps优化到60kpps

这里面最困难的问题，便是在超大流量压力下GW-PF模块AWS虚拟机网卡异常崩溃。

定位该问题，个人逻辑是：

1. 寻找一个稳定复现该问题的方法（超大流量）
2. 若问题不明确，譬如这个网卡异常崩溃，则先用分段法确定导致问题代码所在；若问题明确，根据现象先推测问题原因，（踩内存？粘包？缓冲区溢出？或是代码书写错误？这个问题明确的场景，问题还是很容易通过分段来定位的）
3. 该bug问题不明确的场景下，然而代码分段打点并没有发现问题，是代码问题可能性较小；既然问题所在是网卡，查看网卡状态，了解到网卡在超大流量下会很频繁重启
4. 模拟多种超大流量场景（因为之前在相同压力下，网卡并无崩溃，所以应该是有什么因素导致虚拟机网卡无法支持该大流量），发现给该虚拟机发包IP低于1000和超过1000（实际是1024左右）时，同样的流量后者会导致系统崩溃，那么通过积累的网络知识，判断应该是给该虚拟机发包的IP地址过多，MAC缓存不够导致，通过查询修改后，重新按照之前稳定复现的场景测试，发现确实是这个原因。

##### 3.UDT开源模块

多线程模式由于业务多连接需要，改造成epoll的I/O模型；socket/连接缓冲区合并

性能从20长连接优化到10k长连接

PL/SE/导师均承认我成长非常迅速，希望我继续加油

##### 4.合作

**当项目中出现问题，坚持对事不对人；合作编程/检查bug效率都很高**

### 开源项目和作品

#### 开源项目

 - [xt_GTPU](https://github.com/Miss-you/xt_GTPU)：GW-PF模块，基于iptables(xtables)开发框架，用于转发/统计GTPU模块，性能还不错**（linux内核模块）**

### 技术文章

- [SSDC_高可用系统在点评的实践与经验（与会笔记以及个人见解）](http://blog.csdn.net/qq_15437667/article/details/50986972)
- [支付宝红包稳定性实践（与思考与会笔记以及个人见解）](http://blog.csdn.net/qq_15437667/article/details/50963770)
- [perf使用简易教程](http://blog.csdn.net/qq_15437667/article/details/50724330)
- [ valgrind官方手册翻译（一）_20151128(翻译文章)](http://blog.csdn.net/qq_15437667/article/details/50182025) 

### 平时瞎捣鼓

1. 没钱买PS4解码器，自己用自己mac电脑拦截PS4视频流，然后使用nginx做了一个简易视频中继服务器，（一个周末下午……）结果没人看……我直播玩
2. ……喜欢斗图，正在写weibo抓图工具……

#### 个人兴趣

1. 喜欢GO，喜欢一些自己写一些小玩意
2. **喜欢健身（有好身体工作才能更好）/烹饪（跟写程序很像^_^）**

---

# 致谢
感谢您花时间阅读我的简历，期待能有机会和您共事。