<!-- 同时兼容http与https -->
<script src="//cdn1.lncld.net/static/js/2.5.0/av-min.js"></script>
<script>
    // 第一个参数是appid，第二个参数是appkey，此处的只是示例
    AV.initialize("6v9M58wsB6UX9x6xOtd4dX7J-gzGzoHsz", "3ALzySnLoBlnJfRdyNVR0BAt");
    // 自己创建的Class的名字
    var name='Counter';
    function createRecord(Counter){
      // 设置 ACL
      var acl = new AV.ACL();
      acl.setPublicReadAccess(true);
      acl.setPublicWriteAccess(true);
      // 获得span的所有元素
      var elements=document.getElementsByClassName('leancloud_visitors');
      // 一次创建多条记录
      var allcounter=[];
      for (var i = 0; i < elements.length ; i++) {
        // 若某span的内容不包括 '-' ，则不必创建记录
        if(elements[i].textContent.indexOf('-') == -1){
          continue;
        }
        var title = elements[i].getAttribute('data-flag-title');
        var url = elements[i].id;
        var newcounter = new Counter();
        newcounter.setACL(acl);
        newcounter.set("title", title);
        newcounter.set("url", url);
        newcounter.set("time", 0);
        allcounter.push(newcounter);
        // 顺便更新显示span为默认值0
        elements[i].textContent=0;
      }
      AV.Object.saveAll(allcounter).then(function (todo) {
        // 成功保存记录之后
        console.log('创建记录成功！');
      }, function (error) {
        // 异常错误 
        console.error('创建记录失败: ' + error.message);
      });
    }
    function showCount(Counter){
      // 是否需要创建新纪录的标志（添加一篇新文章）
      var flag=false;
      var query = new AV.Query(name);
      query.greaterThanOrEqualTo('time', 0);
      query.find().then(function (results) {
        // 当获取到的记录为0时置默认值
        if(results.length==0){
          $('.leancloud_visitors').text('-');
          flag=true;
          console.log('返回查询记录为空');
          // 如果获取到空记录就创建新记录
          createRecord(Counter);
          return;
        }
        // 将获取到的数据设置为text
        for (var i = 0; i < results.length; i++) {
          var item = results[i];
          var url = item.get('url');
          var time = item.get('time');
          var element = document.getElementById(url);
          element.textContent = time;
        }
        // 当某个span含有默认值时说明需要创建记录
        if($('.leancloud_visitors').text().indexOf("-") != -1){
          flag=true;
        }
        // 当获取的记录数与span个数不吻合时
        if(results.length != $('.leancloud_visitors').length){
          flag=true;
        }
        if(flag){
          createRecord(Counter);
        }
      }, function (error) {
        console.log('query error:'+error.message);
      });
    }
    $(function() {
      var Counter = AV.Object.extend(name);
      showCount(Counter);
    });
</script>