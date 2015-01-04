
# marsoon

Export `fig.yml` to Diagram Graph. No just only `fig.yml`.

**This feature will be merged into [Dockerboard][]**.

### Quick Start


#### fig.yml
```yml
db:
  image: postgres
  ports:
    - "5432"
web:
  build: .
  command: bundle exec rackup -p 3000
  volumes:
    - .:/myapp
  ports:
    - "3000:3000"
  links:
    - db
```

#### json data
```json
{
  "db": {
    "image": "postgres",
    "ports": [
      "5432"
    ]
  },
  "web": {
    "build": ".",
    "command": "bundle exec rackup -p 3000",
    "volumes": [
      ".:/myapp"
    ],
    "ports": [
      "3000:3000"
    ],
    "links": [
      "db"
    ]
  }
}
```

#### Diagram Graph

![Diagram Graph Web-db](https://raw.githubusercontent.com/dockerboard/marsoon/master/screenshots/web-db.png)


#### Mermaid Graph

```
graph LR;
  db[db];
  style db fill:#484F40;
  web[web];
  style web fill:#484F40;
  web-->db;
```

[Dockerboard]: https://github.com/dockerboard
