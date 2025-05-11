#!/bin/bash

# 获取当前目录作为基础路径
BASE_DIR=$(basename $(pwd))

# 如果网站部署在子目录，设置为子目录名
# SUBDIR="pixelart-tech"
SUBDIR=""

# 询问用户网站是部署在根目录还是子目录
echo "您的网站是部署在网站根目录还是子目录？"
echo "1. 根目录 (例如: http://example.com/)"
echo "2. 子目录 (例如: http://example.com/pixelart/)"
read -p "请选择 [1/2]: " choice

if [ "$choice" = "2" ]; then
  read -p "请输入子目录名称 (如 'pixelart'): " SUBDIR
fi

# 调整路径前缀
PREFIX=""
if [ ! -z "$SUBDIR" ]; then
  PREFIX="/$SUBDIR"
fi

echo "正在修复文件路径..."

# 修复HTML文件中的路径
for file in $(find . -name "*.html"); do
  echo "处理文件: $file"
  # 替换以/_next开头的路径
  sed -i.bak "s|=\"/_next/|=\"$PREFIX/_next/|g" "$file"
  # 替换图片路径
  sed -i.bak "s|=\"/[a-zA-Z0-9]*.png\"|=\"$PREFIX&|g" "$file"
  # 修复双斜杠问题
  sed -i.bak "s|=\"/$SUBDIR/|=\"/$SUBDIR/|g" "$file"
  rm "$file.bak"
done

# 创建.htaccess文件，处理子目录重写规则
if [ ! -z "$SUBDIR" ]; then
  cat > .htaccess << EOL
# 启用Apache的重写引擎
RewriteEngine On

# 基本路径设置
RewriteBase /$SUBDIR/

# 如果请求的不是文件且不是目录，重定向到index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L]

# 缓存控制
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/gif "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType image/svg+xml "access plus 1 month"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
EOL
else
  cat > .htaccess << EOL
# 启用Apache的重写引擎
RewriteEngine On

# 如果请求的不是文件且不是目录，重定向到index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L]

# 缓存控制
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/gif "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType image/svg+xml "access plus 1 month"
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
EOL
fi

echo "路径修复完成！"
echo "请重新上传所有文件到您的服务器。"

if [ ! -z "$SUBDIR" ]; then
  echo "确保您的文件上传到服务器上的 /$SUBDIR/ 目录。"
fi 