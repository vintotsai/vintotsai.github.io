#### vuejs2.+的渲染逻辑并不是特别复杂，核心关键的几步流程还是非常清晰的：

1. new Vue，执行初始化
2. 挂载$mount方法，通过自定义Render方法、template、el等生成Render函数
3. 通过Watcher监听数据的变化
4. 当数据发生变化时，Render函数执行生成VNode对象
5. 通过patch方法，对比新旧VNode对象，通过DOM Diff算法，添加、修改、删除真正的DOM元素
至此，整个new Vue的渲染过程完毕。