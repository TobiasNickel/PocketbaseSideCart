# SideCart for Pocketbase
With this project I want to provide an easy way to implement functionalities, currently not possible in pocketbase.

- cronjobs
- emails, sending and reading
- notifications, web-push and mobile
- execute js functions straight from a collection, such as automatic cleanup of old outdated data.
- triggers, execute code on pocketbase subscriptions
- replication
- upload/update files through UI to public (even zipped folders)
- edit text files direct from a collection
- data migrations

**disclaimer:** This project is not affiliated with the Pocketbase Project. We just like and use it.

Actually I wished these functionality would be build in to Pocketbase and maybe this project can serve as a prove of concept.

I decided to make this using Bun, because it can compile into a a single executable just like Pocketbase.

The plan is that this sidecart will not host a public webserver, but only use the pocketbase SDK to communicate with the pocketbase server.

I considered to build these functionalities directly into pocketbase and publish it as a distro or plugin. but i feel more proficient with js, so bun it is,...

The communication to pocketbase will work through its subscribe features. the sidecart will subscribe on an emails table or on a cron table. and so on. those tables can be configured within pocketbase with the needed writing and reading access.

the sidecart might even use pocketbase itself to log its own status visible to a pocketbase admin.

as the sidecart will use a number of collections there will be a prefix available.

The sidecart will also offer a file for import into pocketbase, so those tables don't need to get created manually by hand.

We will evaluate how much of this can be automated. 

We should avoid reading the sqlitefile ourselves directly from the sidecart. maybe limit this to migration tasks. but time will show.

Having the feature of data migration, and functions, pocketbase can be used in a sharded setup. you can have one DB for serving public users, an other to serve logged in users and third one where authors maintain your master data. This will provide you with an extra layer of security and enable you to separate the load.
