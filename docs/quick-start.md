## 💻 安裝

::: tabs

@tab:active github 安装

在博客根目录里安装最新版【推荐】

```bash
git clone -b main https://github.com/ning0818/hexo-theme-ning.git themes/Ning
```


**升级方法**：在主题目录下，运行

```bash
git pull
```

或者删除**theme/Ning**文件夹，然后重新安装即可。

:::


## ⚙ 应用主题

修改 hexo 配置文件`_config.yml`，把主题改为`Ning`

```yml
theme: Ning
```


## 更好的配置，便于升级主题

- macos/linux
 
  在博客根目录运行

```bash
cp -rf ./themes/Ning/_config.yml ./_config.Ning.yml
```

- windows
  在博客根目录运行
```cmd
copy themes\ning\_config.yml .\ && del themes\ning\_config.yml && ren _config.yml _config.Ning.yml
```

## 本地启动 hexo

```bash
hexo cl && hexo g && hexo s
```

此时就能在看到效果了。

![](/images/theme.png)

## 有问题?

可到仓库提交 [issues](https://github.com/ning0818/hexo-theme-Ning/issues)

## 讨论

<div>
<a href="https://github.com/ning0818/hexo-theme-ning/discussions">Discussions</a>
</div>

## 技术支持

前往 <a href="https://github.com/ning0818/hexo-theme-ning/discussions">Discussions</a> 咨询

## 主题设计

[@阳光下的小宁宁](https://github.com/ning0818)