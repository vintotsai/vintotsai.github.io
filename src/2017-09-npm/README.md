# npm summary

## 初始化

npm init 会询问初始化package.json的各种信息
npm init —y 全部使用默认值，快速生成package.json

## 安装依赖包

$ npm install <package name> <package name> ...

$ npm install <package name> -g

$ npm install <package name> --save

$ npm install <package name> --save-dev

$ npm install <pacakage name>  --O //--save-optional  -B: --save-bundle  -E: --save-exact

npm install <package name> -g 表示全局安装，需要注意的是全局模式并不是将一个模块安装包安装为一个全局包的意思，它并不意味着可以从任何地方通过require()来引用，-g的含义是将一个包安装为全局可用的可执行命令。这意味着，所有通过-g安装的包都可以在终端以命令方式运行，例如gulp，webpack等。

--save与--save-dev的区别在于前者是生产环境中项目运行需要的依赖，安装后被记录在package.json中的dependencies关键字下；而后者是开发时候需要的依赖，安装后被记录在devDependencies关键字下。

同样--O/B/E分别会被记录到对应的关键字下。

## 更新依赖包
$ npm update

$ npm update  -g

$ npm outdated

$ npm outdated -g
在项目目录下运行npm update可以升级项目中所用依赖到最新版本，而npm update -g则可以升级全局安装的依赖包到最新版。

npm outdated用于检查模块是否过时并列出。

## 卸载依赖
$ npm uninstall <package name> <package name> ...

$ npm uninstall <package name> -g

$ npm uninstall <package name> --save

$ npm uninstall <package name> --save-dev
使用npm uninstall可以卸载依赖，但是卸载后，在package.json中的纪录并不会被删除，要想在卸载依赖的同时删除在package.json中的纪录，需要在卸载的时候使用安装时的所有的选项，例如，如果安装时候使用了npm install <package name> --save则卸载的时候，同样使用npm uninstall <pacakage name> --save，而如果使用了--save-dev，卸载时候也需要加相同的选项。

## 使用自定义npm命令
在package.json中，有一个scripts关键字，只需要在该关键字内写入自定义命令以及对应执行的实际命令即可。

"scripts":{
    "test": "nonde ./test.js",
    "dev": "gulp --gulpfile gulpfile-dev.js",
    "build": "gulp --gulpfile gulpfile-build.js"
}
上面的配置中，只要我们在终端运行npm dev就是运行了gulp --gulpfile gulpfile-dev.js，这样就省去了我们在终端输入很长的一段命令，非常方便。

## 其他
npm view <pacakage name>可以查看包的package.json文件，如果只是看包的某个特性，在后面加上相应的key即可，例如npm v zepto version就是查看当前安装的zepto的版本，v是view的简写。

npm ls可以分析出当前当前项目下能够通过模块路径找到的所有包，并生成依赖树。

npm doc <package name>可以打开该依赖包的官网，其实就是打开了package.json中的homepage。