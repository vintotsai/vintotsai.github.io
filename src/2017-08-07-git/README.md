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

- git rm -–cached FILE

　　这个命令只删除远程文件，例如：

　　> git rm --cached database.yml

　　删除database.yml被保存的记录，但是不影响本地文件。这对删除已经推送过的忽略文件记录而且不影响本地文件是非常的方便的。