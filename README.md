1. Build Project
   * ng build --base-href "/web/"
2. Move builded files to public backend server
   * rm -rf ~/projects/DocApp/public/web
   * cp -r dist/doc-app-web/browser ~/projects/DocApp/public && mv ~/projects/DocApp/public/browser ~/projects/DocApp/public/web