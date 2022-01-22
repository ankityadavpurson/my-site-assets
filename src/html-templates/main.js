module.exports = (body, title = "Ankit") =>
  `<!DOCTYPE html>
    <html lang="en">
    <head>
    <title>{{title}}</title>
    <style>
        *{margin:0;padding:0}
        a{text-decoration:none;color:#000}
        .listItem{list-style:none;padding:5px;margin:5px;
        border:1px solid gray;border-radius:2px;max-width:200px}
        .listItem:hover{box-shadow:2px 2px 5px #a1a1a1}
    </style>
    </head>
    <body>{{body}}</body>
    </html>
  `
    .replace("{{title}}", title)
    .replace("{{body}}", body);
