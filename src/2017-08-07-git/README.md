- git add .操作之后后悔？
    如果是撤销所有的已经add的文件:
    git reset HEAD .
- 如果是撤销某个文件或文件夹：
    git reset HEAD -filename

- git log [finename] 查看某个文件所有提交记录

- git log -p [filename] 查看某个文件的所有详细提交日志改动

- git log -S ‘PATTERN’

　　例如，搜索修改符合stupid的历史：

　　> git log -S'stupid'