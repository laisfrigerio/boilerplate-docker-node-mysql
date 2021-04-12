# :copyright: docker + node + mysql boilerplate 💜

A boilerplate Docker project for development with a mysql database, a node.js backend using Express

## 🛠️ Stack

- nodejs: 14 + express
- mysql: 8.0
- docker

### Docker version

We develop this boilerplate with the following docker version: `19.03.13`

docker-compose version: `1.29.0`

## :pencil: Features

- :ballot_box_with_check: nodejs 14 + express api
- :ballot_box_with_check: mysql 8 database
- :ballot_box_with_check: running this application with docker

## :gem: Run

Case if you have a mysql instance running, you must shutdown before run docker container:

```
  $ sudo service mysql stop
```

Then:

```
  $ cp .env.example .env
  $ npm run clean:cache
  $ npm run build
  $ npm run start:background
```

### Stop container

1) To stop running a container, first execute the following command to get container id:

```
  docker ps
```

2) Copy the container ID and run the following command:

```
  docker stop <container id>
```

### Access mysql database container

To access the database container, we must get the container id first. Run the following command:

```
  $ docker ps
```

This previous command list all active containers.

Copy mysql container id and type the following:

```
  $ docker exec -it <container id> bash
```

Then, to access database via line command:

```
  $ mysql -u <username> -p
```

## :woman: Author

[@laisfrigerio](https://github.com/laisfrigerio/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details