<!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<title>欢迎注册</title>
	<link rel="stylesheet" type=“text/css” href="css/register.css">
	<link rel="stylesheet" type=“text/css” href="css/inc.css">
	<script type="text/javascript" src="js/register.js"></script>
</head>
<body>
	<div id="header">
		<p>欢迎注册hiterbuy! <a>已有账号请登录</a></p>
	</div>
	<div id="content">
		<div id="register">
			<form method="post" action="register.php">
				<div class="row">
					<label>用户名称:</label>
					<input type="text" name="name" placeholder="昵称">
				</div>
				<div class="row">
					<label>登录邮箱:</label>
					<input type="text" name="name" placeholder="登录邮箱">
				</div>
				<div class="row">
					<label>输入密码:</label>
					<input type="password" name="pwd" placeholder="建议至少两种字符">
				</div>
				<div class="row">
					<label>确认密码:</label>
					<input type="password" name="pwd" placeholder="再次确认密码">
				</div>
				<div class="row">
					<input type="submit" value="立即注册" class="btn_large">
				</div>
			</form>
		</div>
	</div>
	<div id="footer">
		<span class="center">
			<a>关于hiterbuy</a>		
			<a>加入我们</a>		
			<a>帮助中心</a>		
		</span>
	</div>
</body>
