rm -rf dist &&
yarn build &&
cd dist &&
git init
git add .
git commit -m 'update'
git branch -M main
git remote add origin git@github.com:JFrank2019/y-vue3-ui.git
git push -f -u origin main
cd ..
echo https://jfrank2019.github.io/y-vue3-ui/index.html
